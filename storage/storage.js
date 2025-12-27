import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveLeads(leads) {
  try {
    await AsyncStorage.setItem("leads", JSON.stringify(leads));
  } catch (error) {
    console.log("Saving error", error);
  }
}

export async function loadLeads() {
  try {
    const data = await AsyncStorage.getItem("leads");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log("Loading error", error);
    return [];
  }
}
