import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { loginUser } from "@/lib/authService";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import { Link, Redirect, router } from "expo-router";
import { useGlobalContext } from "@/lib/globalProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const { loading, isLoggedIn } = useGlobalContext();

  const handleAuth = async () => {
    try {
      setLoading(true);
      await loginUser(email, password);
      alert("Login successful!");
      router.replace("/(root)/(tabs)");
    } catch (error) {
      alert("Authentication failed");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  if (!loading && isLoggedIn) return <Redirect href="/(root)/(tabs)" />;
  if (isLoading) return <ActivityIndicator />;

  return (
    <SafeAreaView className="flex-1 bg-white items-center">
      <View className="mt-20 items-center">
        <Image
          source={images.icon}
          className="w-28 h-28"
          resizeMode="contain"
        />
        <Text className="font-rubik text-4xl mt-5">Login</Text>
      </View>
      <View className="flex-1 items-center mt-24 w-full px-12 gap-y-5">
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          className="bg-gray-200 w-full py-4 pl-4 rounded-md"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          className="bg-gray-200 w-full py-4 pl-4 rounded-md"
        />
        <TouchableOpacity
          className="w-full bg-black-300 rounded-md py-4 mt-6"
          activeOpacity={0.9}
          onPress={handleAuth}
        >
          <Text className="text-white text-center font-rubik">Login</Text>
        </TouchableOpacity>
        <Text className="text-lg font-rubik">
          Don't have an account?{" "}
          <Link href="/sign-up" className="text-primary-100 font-rubik text-lg">
            Signup
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
