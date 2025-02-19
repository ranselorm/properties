import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";
import { useGlobalContext } from "@/lib/globalProvider";
import { logoutUser } from "@/lib/authService";

const Home = () => {
  const { user, loading } = useGlobalContext();

  // if (!loading && !user) return <Redirect href="/(auth)/login" />;

  return (
    <View className="">
      <Text>Home screen</Text>
      <Link href="/sign-up" className="text-3xl uppercase text-green-700">
        Sign In
      </Link>

      <Text>{user?.name}</Text>
      <Text>{user?.email}</Text>
      <Button title="Logout" onPress={logoutUser} />
    </View>
  );
};

export default Home;
