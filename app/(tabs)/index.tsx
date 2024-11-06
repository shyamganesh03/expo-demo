import React from "react";
import { router } from "expo-router";
import { Image, StyleSheet, View, Button } from "react-native";
import IconImage from "@/assets/images/react-logo.png";
import { useSelector } from "react-redux";
import { ThemedText } from "@/components/ThemedText";
import Container from "@/components/Container";

export default function HomeScreen() {
  const userDetails: any = useSelector(
    (state: any) => state.userDetails?.userDetails
  );

  return (
    <Container>
      <View style={styles.heroContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={userDetails?.userImage || IconImage}
            style={styles.image}
          />
        </View>
        <View style={styles.heroSubContainer}>
          <ThemedText type="defaultSemiBold">
            {userDetails?.firstName} {userDetails?.lastName}
          </ThemedText>
          <ThemedText type="default">{userDetails?.emailAddress}</ThemedText>
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <ThemedText type="defaultSemiBold">Phone No:</ThemedText>
        <ThemedText type="default">
          {userDetails?.phoneNumber || "-"}
        </ThemedText>
      </View>

      <View style={styles.detailsContainer}>
        <ThemedText type="defaultSemiBold">Birth Date:</ThemedText>
        <ThemedText type="default">{userDetails?.birthDate || "-"}</ThemedText>
      </View>

      <Button
        title="Rating"
        onPress={() => {
          router.push({
            pathname: "/rating",
          });
        }}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 48,
    width: 48,
    borderRadius: 50,
  },
  imageContainer: {
    borderRadius: 50,
    backgroundColor: "grey",
    padding: 4,
  },
  heroContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  detailsContainer: {
    flexDirection: "row",
    gap: 12,
  },
  heroSubContainer: {
    gap: 2,
  },
});
