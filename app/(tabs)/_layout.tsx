import { Tabs } from "expo-router";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="edit-profile"
        options={{
          title: "Edit Profile",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome size={28} name="user-circle" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="facebook"
        options={{
          title: "Facebook",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome size={28} name="facebook" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
