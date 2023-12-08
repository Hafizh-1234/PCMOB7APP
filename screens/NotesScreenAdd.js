import React , { useState} from "react";
import { View, Text, Pressable, Image, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";


const islandsData = [
  {
    id: '4gUePNN4znHYxQTT0zFf',
    data: {
      comment: 'beautiful place',
      title: 'Bora Bora',
    },
  },
  {
    id: 'XTY6qeL1fpTL99lElkvz',
    data: {
      comment: 'great place',
      title: 'Bali Lombok',
    },
  },
  {
    id: 'h5Yd1FbpfbZkhYACKrWT',
    data: {
      comment: 'its heaven',
      title: 'Santorini',
    },
  },
  {
    id: 'kiAWSe0fhGoabzNEqt3M',
    data: {
      comment: 'awesome place',
      title: 'Maldives',
    },
  },
];

const islands = [
  {
    name: "Bali Lombok Island",
    image: 'https://media.cntraveler.com/photos/5ace264528064f5504f54726/16:9/w_2240,c_limit/GettyImages-154246242.jpg',
  },
  {
    name: "Bora Bora Tahiti",
    image: 'https://www.tahititourisme.fr/app/uploads/2023/07/p2-08-bora-bora-divers-tnh-87-a-gregoire-le-bacon-tahiti-nui-helicopters-1-scaled.jpg',
  },
  {
    name: "Maldives",
    image: 'https://www.remotelands.com/travelogues/app/uploads/2020/02/7-Luxury-Resorts-Maldives-1.jpg',
  },
  {
    name: "Santorini, Greece",
    image: 'https://ychef.files.bbci.co.uk/1280x720/p05w6r6t.jpg',
  },
];



export default function NotesScreenAdd() {
  const navigation = useNavigation();
 const route = useRoute()
 const island = route.params
  const [comment, setComment] = useState("");
  console.log(island)

  const savePost = async () => {
    await addDoc(collection(db, "reviews"), { title: island.name, comment });
    navigation.goBack();
  }

     
      
      
 

  



return (
    <ScrollView>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.header}>
          <Pressable onPress={() => navigation.navigate("Home")}>
            <FontAwesome name="home" size={24} color="black" />
          </Pressable>
        </View>
        <Text style={styles.title}>Submit A Review</Text>
        {islandsData.map((islandData, index) => (
          <View key={index} style={styles.islandContainer}>
            <Text style={styles.islandName}>{islands[index].name}</Text>
            <Image source={{ uri: islands[index].image }} style={styles.islandImage} />
            <TextInput
              style={styles.commentBox}
              placeholder={"Write your comment here..."}
              multiline
              numberOfLines={4}
              value={comment}
              onChangeText={(comment) => setComment(comment)}
            />
            <Pressable
              style={styles.reviewButton}
              onPress={async () => await savePost()}
            >
              <Text style={styles.buttonText}>Send Review</Text>
            </Pressable>
          </View>
        ))}
      </KeyboardAvoidingView>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  islandContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  islandName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  islandImage: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  commentBox: {
    width: 300,
    height: 100,
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  reviewButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20,
  },
});
