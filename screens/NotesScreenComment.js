import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
  Image,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { collection, doc, getDoc, getDocs, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase";


export default function NotesScreenComment() {
  const navigation = useNavigation();
  const route = useRoute()
  const island = route.params
  const [noteTitle, setNoteTitle] = useState("");
  const [submittedComments, setSubmittedComments] = useState([]);



   useEffect(() => {
    const fetchData = async() => {
      const q = await getDocs(collection(db, "reviews"));
      const reviews = []
      q.docs.forEach((doc) => {
      
        reviews.push({ id: doc.id,...doc.data() })

      })  
      setSubmittedComments(reviews)
      return reviews
    }
   
    fetchData() 
    console.log(island)
   
    },[]) 
  

  


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
  

<View style={styles.header}>
          <Pressable onPress={() => navigation.navigate("Home")}>
            <FontAwesome name="home" size={24} color="black" />
          </Pressable>
        </View>

        <View style={styles.iconContainer}>
        <Pressable onPress={() => navigation.push("Add", {...island})}>
          <FontAwesome name="plus" size={24} color="black" />
        </Pressable>
        </View>

      <TextInput
        style={styles.noteTitle}
        placeholder={"Note Title"}
        value={noteTitle}
        onChangeText={(text) => setNoteTitle(text)}
        selectionColor={"gray"}
      />

      {/* Display submitted comments with update and delete functionality */}
      {submittedComments.map((comment, index) => (
          comment.title === island.name ? 
          (<View key={index} style={styles.submittedComment}>
          <Text style={styles.commentText}>{comment.comment}</Text>

          <View style={styles.buttonsContainer}>
          < Pressable onPress={() => navigation.push("Update",{...comment})}>
  <FontAwesome name={"pencil"} size={24} color={"black"} />
</Pressable>
          </View>
        </View>) : null
        
       
      ))}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#00bfff",
      paddingTop: 20,
      paddingHorizontal: 10,
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
