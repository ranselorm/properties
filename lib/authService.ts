import { account } from "./appwriteConfig";

// Register User
export const registerUser = async (
  email: string,
  password: string,
  name: string
) => {
  try {
    const user = await account.create("unique()", email, password, name);
    console.log("User Registered:", user);
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
  } catch (error) {
    console.error("Logout Failed:", error);
  }
};

// Get Current User
export const getUserData = async () => {
  try {
    const user = await account.get();
    console.log("User Data:", user);
    return user;
  } catch (error) {
    console.error("Failed to fetch user data:", error);
    throw error;
  }
};
