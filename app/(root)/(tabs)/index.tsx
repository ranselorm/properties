import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";
import { useGlobalContext } from "@/lib/globalProvider";
import { logoutUser } from "@/lib/authService";

const Home = () => {
  const { user, loading } = useGlobalContext();

  // if (!loading && !user) return <Redirect href="/(auth)/login" />;

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl">Welcome to ReState</Text>
    </View>
  );
};

export default Home;
