import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Image, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome } from "@expo/vector-icons";
import { collection, onSnapshot, query, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";


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



export default function NotesScreenUpdate() {
  const navigation = useNavigation(); // Initialize useNavigation hook
  const route = useRoute()
  const island = route.params
  const [noteTitle, setNoteTitle] = useState("");
  const [submittedComments, setSubmittedComments] = useState([]);
  const params = route.params

   const [comment, setComment] = useState(params.comment);

  
    


    const updatePost = async () => {
      console.log(params)
      await updateDoc(doc(db, "reviews", params.id), {comment});
    
      navigation.goBack();
    }

    
    const deletePost = async () => {
      console.log(params)
      await deleteDoc(doc(db, "reviews", params.id), {comment});
    
      navigation.goBack();
    }






  return (
    <ScrollView>
   <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.title}>Update A Review</Text>
      <TextInput
              style={styles.commentBox}
              placeholder={"Write your comment here..."}
              multiline
              numberOfLines={4}
              value={comment}
              onChangeText={(comment) => setComment(comment)}
            />
               <View style={styles.buttonsContainer}>
          < Pressable onPress={() => updatePost()}>
  <FontAwesome name={"pencil"} size={24} color={"black"} />
</Pressable>
</View>
<View style={styles.buttonsContainer}>
          < Pressable onPress={() => deletePost()}>
  <FontAwesome name={"trash"} size={24} color={"black"} />
</Pressable>
</View>
    </KeyboardAvoidingView>
    </ScrollView>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
});






