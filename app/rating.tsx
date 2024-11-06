import { Button, Platform, Linking } from "react-native";
import * as StoreReview from "expo-store-review";
import { Toast } from "expo-react-native-toastify";
import React from "react";
import Container from "@/components/Container";

const Rating = () => {
  const handleRating = async () => {
    const isAVailable = await StoreReview.hasAction();
    if (isAVailable) {
      await StoreReview.requestReview()
        .then((c) => console.log({ c }))
        .catch((error) => console.log({ error }));
      console.log("first");
    } else {
      Toast.info("In App Review is Not supported", "bottom");
      const appLink = Platform.select({
        android:
          "https://play.google.com/store/apps/details?id=com.instagram.android&hl=en_IN&pli=1",
        ios: "https://apps.apple.com/in/app/instagram/id389801252",
        default: "https://www.google.com",
      });
      Linking.openURL(appLink);
    }
  };
  return (
    <Container>
      <Button title="Rate This App" onPress={() => handleRating()} />
    </Container>
  );
};

export default Rating;
