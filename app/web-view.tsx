import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Container from "@/components/Container";
import { WebView } from "react-native-webview";
import { useRouteInfo } from "expo-router/build/hooks";
import { ThemedText } from "@/components/ThemedText";

const WebViewScreen = () => {
  const router = useRouteInfo();

  if (!router?.params.url) {
    return (
      <Container>
        <ThemedText>Loading ...</ThemedText>
      </Container>
    );
  }
  return (
    <Container hasPadding={false}>
      <WebView style={styles.container} source={{ uri: router?.params.url }} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WebViewScreen;
