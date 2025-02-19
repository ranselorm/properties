import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { registerUser } from "../lib/authService";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import { Link } from "expo-router";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const handleAuth = async () => {
    try {
      await registerUser(email, password, name);
      alert("Registration successful!");
    } catch (error) {
      alert("Authentication failed");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white items-center">
      <View className="mt-20 items-center">
        <Image
          source={images.icon}
          className="w-28 h-28"
          resizeMode="contain"
        />
        <Text className="font-rubik text-4xl mt-5">Register</Text>
      </View>
      <View className="flex-1 items-center mt-24 w-full px-12 gap-y-5">
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          className="bg-gray-200 w-full py-4 pl-4 rounded-md"
        />

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
        <TouchableOpacity className="w-full bg-black-300 rounded-md py-4 mt-6">
          <Text className="text-white text-center font-rubik">Sign Up</Text>
        </TouchableOpacity>
        <Text className="text-lg font-rubik">
          Already have an account?{" "}
          <Link href="/" className="text-primary-100 font-rubik text-lg">
            Login
          </Link>
        </Text>

        {/* <Link href={"/"}>Login</Link> */}

        {/* <Button title="Register" onPress={handleAuth} /> */}
      </View>
    </SafeAreaView>
  );
};

export default Register;
