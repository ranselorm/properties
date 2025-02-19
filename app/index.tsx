import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { login } from "@/lib/appwrite";
import { router } from "expo-router";

const SignIn = () => {
  const handleLogin = async () => {
    const result = await login();
    if (result) {
      console.log("Login successful");
    } else {
      Alert.alert("Failed to login");
    }
  };
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="font-rubik uppercase text-center text-base text-black-200">
            Welcome to Restate
          </Text>
          <Text className="font-rubik-bold text-center text-3xl text-black-200 mt-2">
            Let's Get You Closer To {"\n"}
            <Text className="text-primary-100">Your Ideal Home</Text>
          </Text>
          <TouchableOpacity
            className="bg-primary-100 shadow-zinc-300 shadow-md py-4 rounded-md flex-row justify-center items-center w-full gap-x-4 mt-5"
            onPress={() => router.push("/(auth)/sign-up")}
          >
            <Text className="text-lg font-rubik text-white uppercase">
              Get started
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
