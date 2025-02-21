import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";

const Profile = () => {
  return (
    <SafeAreaView className="h-full flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-4 px-7"
      >
        <View className="items-center justify-between flex-row mt-5">
          <Text className="text-xl font-rubik-bold">Profile</Text>
          <Image source={icons.bell} className="size-6" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
