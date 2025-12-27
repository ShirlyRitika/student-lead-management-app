import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { saveLeads, loadLeads } from "./storage/storage";

// Screens
import LeadListScreen from "./screens/LeadListScreen";
import AddLeadScreen from "./screens/AddLeadScreen";
import LeadDetailScreen from "./screens/LeadDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [leads, setLeads] = useState([]);

  // Load saved leads when app starts
  useEffect(() => {
    loadLeads().then((data) => setLeads(data));
  }, []);

  // Save leads whenever leads change
  useEffect(() => {
    saveLeads(leads);
  }, [leads]);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        
        <Stack.Screen name="Leads">
          {(props) => (
            <LeadListScreen {...props} leads={leads} setLeads={setLeads} />
          )}
        </Stack.Screen>

        <Stack.Screen name="Add Lead">
          {(props) => (
            <AddLeadScreen {...props} leads={leads} setLeads={setLeads} />
          )}
        </Stack.Screen>

        <Stack.Screen name="Lead Details" component={LeadDetailScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
