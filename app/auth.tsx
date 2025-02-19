import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { registerUser, loginUser } from "../lib/authService";

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
    <View className="flex-1">
      <Text>{isRegister ? "Register" : "Login"}</Text>
      {isRegister && (
        <TextInput placeholder="Name" value={name} onChangeText={setName} />
      )}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleAuth} />
    </View>
  );
};

export default Register;
