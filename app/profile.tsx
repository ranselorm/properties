import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { getUserData, updateUserName } from "../lib/authService";

const ProfileScreen = () => {
  const [user, setUser] = useState<any>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  console.log(user, "user");

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const userData = await getUserData();
      setUser(userData);
      setName(userData.name || "");
      setEmail(userData.email || "");
    } catch (error) {
      alert("Error fetching user data");
    }
  };

  const handleSave = async () => {
    try {
      if (name) await updateUserName(name);
      fetchUserData();
    } catch (error) {
      alert("Error updating profile");
    }
  };

  return (
    <View className="flex-1 bg-yellow-400">
      <Text className="text-3xl">User Profile</Text>
      <Text>Phone: {user?.phone || "Not Set"}</Text>

      <TextInput
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
        className=""
      />
      <Button title="Save Profile" onPress={handleSave} />
    </View>
  );
};

export default ProfileScreen;
