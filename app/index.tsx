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
          <Text className="text-center mt-12 font-rubik text-black-200 text-lg ">
            Login to Restate
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-zinc-300 shadow-md py-2 rounded-full flex-row justify-center items-center w-full gap-x-4 mt-5"
          >
            <Image
              source={icons.google}
              className="w-5 h-5"
              resizeMode="contain"
            />
            <Text className="text-lg font-rubik-medium text-black-200">
              Continue with Google
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
