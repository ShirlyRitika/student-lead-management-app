
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LeadDetailScreen({ route }) {
  const { lead } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lead Information</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{lead.name}</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{lead.email}</Text>

        <Text style={styles.label}>Phone</Text>
        <Text style={styles.value}>{lead.phone}</Text>

        <Text style={styles.label}>Course</Text>
        <Text style={styles.value}>{lead.course}</Text>
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
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    elevation: 2,
  },
  label: {
    fontSize: 13,
    color: "#777",
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    fontWeight: "500",
  },
});
