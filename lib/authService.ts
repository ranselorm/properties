import { router } from "expo-router";
import { account } from "./appwriteConfig";
import * as SecureStore from "expo-secure-store";

// Register User & Auto-Login
export const registerUser = async (
  email: string,
  password: string,
  name: string
) => {
  try {
    // Register new user
    const user = await account.create("unique()", email, password, name);
    console.log("User Registered:", user);

    // Auto-login after registration
    const session = await account.createEmailPasswordSession(email, password);
    console.log("Auto-login successful:", session);

    // Store session securely
    await SecureStore.setItemAsync("session", session.$id);

    return user;
  } catch (error) {
    console.error("Registration Failed:", error);
    throw error;
  }
};

// Login User
export const loginUser = async (email: string, password: string) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    console.log("Login Successful:", session);
    return session;
  } catch (error) {
    console.error("Login Failed:", error);
    throw error;
  }
};

// Logout User
export const logoutUser = async () => {
  try {
    await account.deleteSession("current");
    console.log("User Logged Out");
    router.replace("/(auth)/login");
  } catch (error) {
    console.error("Logout Failed:", error);
  }
};

// Get Current User
export const getUserData = async () => {
  try {
    const user = await account.get();
    router.replace("/(root)/(tabs)");
    console.log("User Data:", user);
    return user;
  } catch (error) {
    console.error("Failed to fetch user data:", error);
    throw error;
  }
};
