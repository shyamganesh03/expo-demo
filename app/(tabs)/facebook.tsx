import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import Container from "@/components/Container";
import { ThemedText } from "@/components/ThemedText";
import faveIconImage from "@/assets/images/favicon.png";
import { router } from "expo-router";

const Facebook = () => {
  return (
    <Container>
      <ThemedText>Facebook Post</ThemedText>
      <Pressable
        onPress={() => {
          router.push({
            pathname: "/web-view",
            params: {
              url: "https://www.facebook.com/militarycomics/videos/555424007442386/?rdid=i8LiJ6mD4f1m33mY#",
            },
          });
        }}
      >
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Image source={faveIconImage} style={styles.image} />
            <Text style={styles.text}>
              This is a sample Facebook post layout.
            </Text>
          </View>
        </View>
      </Pressable>
    </Container>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "lightgrey",
    padding: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    marginVertical: 8,
  },
  cardContent: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    gap: 12,
  },
  image: {
    width: 40,
    height: 40,
  },
  text: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
});

export default Facebook;
