import {
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import { ThemedView } from "./ThemedView";

const Container = ({
  children,
  hasPadding = true,
}: {
  children: any;
  hasPadding?: boolean;
}) => {
  const { height, width } = useWindowDimensions();
  return (
    <SafeAreaView>
      <ScrollView>
        <ThemedView
          style={[
            hasPadding
              ? Platform.OS === "android"
                ? {
                    paddingTop: StatusBar.currentHeight
                      ? StatusBar.currentHeight + 30
                      : 30,
                    paddingBottom: 30,
                    paddingHorizontal: 16,
                  }
                : {
                    paddingVertical: 30,
                    paddingHorizontal: 16,
                  }
              : {
                  width,
                },
            { height, flex: 1, gap: 12 },
          ]}
        >
          {children}
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Container;
