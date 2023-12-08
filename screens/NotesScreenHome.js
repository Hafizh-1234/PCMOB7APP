import React from "react";
import { View, Text, Pressable, Image, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome } from "@expo/vector-icons";

const islands = [
  {
    name: "Bali Lombok Island",
    description:
      "Lombok Island is a volcanic island surrounded by coral reefs and dotted islets within the Indonesian archipelago. It's often referred to as Bali's sister island, but We like to call it Indonesia's adventure island.",
    image: 'https://media.cntraveler.com/photos/5ace264528064f5504f54726/16:9/w_2240,c_limit/GettyImages-154246242.jpg',
  },
  {
    name: "Bora Bora Tahiti",
    description:
      "Bora Bora is located on a dormant volcano island, set on one of the world's most beautiful and crystal-clear lagoons, coloured in a million shades of blue.",
    image: 'https://www.tahititourisme.fr/app/uploads/2023/07/p2-08-bora-bora-divers-tnh-87-a-gregoire-le-bacon-tahiti-nui-helicopters-1-scaled.jpg',
  },
  {
    name: "Maldives",
    description:
      "The Maldive Islands are a series of coral atolls built up from the crowns of a submerged ancient volcanic mountain range. All the islands are low-lying, none rising to more than 6 feet (1.8 metres) above sea level.",
    image: 'https://www.remotelands.com/travelogues/app/uploads/2020/02/7-Luxury-Resorts-Maldives-1.jpg',
  },
  {
    name: "Santorini, Greece",
    description:
      "Santorini is a fantastic Cycladic island in the southern Aegean Sea with astonishing volcanic scenery and world-famous sunset vistas. It comprises a luxury-oriented destination that is perfect for couples, with rich viticulture and history to dive into.",
    image: 'https://ychef.files.bbci.co.uk/1280x720/p05w6r6t.jpg',
  },// Islands data...
];

const Stack = createNativeStackNavigator();

export default function NotesScreenHome() {
  const navigation = useNavigation(); // Initialize useNavigation hook

  return (
    <ScrollView style={styles.container}>
      {/* Title and Description */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Rate That Island!</Text>
        <Text style={styles.descriptionText}>
          Experience the world, one rating at a time.
        </Text>
      </View>

    

      {/* Islands */}
      <View style={styles.navigationBar}>
        {islands.map((island, index) => (
          <Pressable
            key={index}
            style={styles.islandButton}
            onPress={() => navigation.navigate("Comment", island)} // Adjusted screen name
          >
            <Image source={{ uri: island.image }} style={styles.islandImage} />
            <Text style={styles.islandName}>{island.name}</Text>
            <Text style={styles.islandDescription}>{island.description}</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00bfff",
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  navigationBar: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  islandButton: {
    alignItems: "center",
    marginBottom: 20,
  },
  islandImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  islandName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  islandDescription: {
    fontSize: 12,
    textAlign: "center",
  },
});











