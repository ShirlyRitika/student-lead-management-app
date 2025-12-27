import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import LeadItem from "../components/LeadItem";

export default function LeadListScreen({ navigation, leads, setLeads }) {

  function deleteLead(id) {
    const updatedList = leads.filter((item) => item.id !== id);
    setLeads(updatedList);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Leads</Text>

      <Text style={styles.count}>Total Leads: {leads.length}</Text>

      <Button
        title="Add New Lead"
        onPress={() => navigation.navigate("Add Lead")}
      />

      {leads.length === 0 ? (
        <Text style={styles.empty}>No leads added yet</Text>
      ) : (
        <FlatList
          data={leads}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <LeadItem
              lead={item}
              onDelete={deleteLead}
              onView={() =>
                navigation.navigate("Lead Details", { lead: item })
              }
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 22,
    marginBottom: 5,
    fontWeight: "600",
    textAlign: "center",
  },
  count: {
    textAlign: "center",
    marginBottom: 10,
    color: "#555",
  },
  empty: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 16,
    color: "#666",
  },
});
