import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { registerUser, loginUser } from "../lib/authService";

const AuthScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const handleAuth = async () => {
    try {
      if (isRegister) {
        await registerUser(email, password, name);
        alert("Registration successful!");
      } else {
        await loginUser(email, password);
        alert("Login successful!");
      }
    } catch (error) {
      alert("Authentication failed");
    }
  };

  return (
    <View style={{ padding: 20 }}>
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
      <Button title={isRegister ? "Register" : "Login"} onPress={handleAuth} />
      <Button
        title={isRegister ? "Switch to Login" : "Switch to Register"}
        onPress={() => setIsRegister(!isRegister)}
      />
    </View>
  );
};

export default AuthScreen;
