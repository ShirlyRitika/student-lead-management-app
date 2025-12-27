import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function LeadItem({ lead, onDelete, onView }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{lead.name}</Text>
      <Text>{lead.course}</Text>

      <View style={styles.buttons}>
        <Button title="View" onPress={onView} />
        <Button title="Delete" color="red" onPress={() => onDelete(lead.id)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
