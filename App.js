import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import NotesScreenAdd from "./screens/NotesScreenAdd";
import NotesScreenHome from "./screens/NotesScreenHome";
import NotesScreenComment from "./screens/NotesScreenComment"; // Import NotesScreenUpdate
import NotesScreenUpdate from "./screens/NotesScreenUpdate";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={NotesScreenHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Add"
          component={NotesScreenAdd}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Comment" // Name for the update screen
          component={NotesScreenComment}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Update" // Name for the update screen
          component={NotesScreenUpdate}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}