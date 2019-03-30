import React from "react";
import { StyleSheet, View } from "react-native";
import config from "../config";

const Separator = () => (
  <View style={styles.background}>
    <View style={styles.separator} />
  </View>
);

const styles = StyleSheet.create({
  background: {
    backgroundColor: config.colors.backgroundColor
  },
  separator: {
    height: 8
  }
});

export default Separator;
