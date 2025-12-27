import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

export default function AddLeadScreen({ navigation, leads, setLeads }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");

  function saveLead() {
    if (!name || !email || !phone || !course) {
      Alert.alert("Oops", "Please fill all the fields");
      return;
    }

    const newLead = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      course,
    };

    setLeads([...leads, newLead]);

    // Clear form after saving
    setName("");
    setEmail("");
    setPhone("");
    setCourse("");

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Student Lead</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Student Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <TextInput
          placeholder="Email Address"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Phone Number"
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="numeric"
        />

        <TextInput
          placeholder="Course Name"
          style={styles.input}
          value={course}
          onChangeText={setCourse}
        />

        <View style={styles.button}>
          <Button title="Save Lead" onPress={saveLead} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f6f8",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
  },
  form: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    elevation: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 15,
  },
  button: {
    marginTop: 10,
  },
});
