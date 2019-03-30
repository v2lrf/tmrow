import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text } from "react-native";
import config from "../config";

import RNSpeedometer from "react-native-speedometer";

const Speed = ({ value }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{config.strings.speed_title}</Text>
    <Text style={styles.legend}>{config.strings.speed_legend}</Text>
    <RNSpeedometer labels={labels} value={value} size={200} maxValue={800} />
  </View>
);

export default Speed;

Speed.propTypes = {
  value: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: config.colors.white,
    paddingTop: 20,
    paddingBottom: 60,
    flex: 1,
    alignItems: "center"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  },
  legend: {
    fontSize: 16,
    paddingBottom: 8
  }
});

const labels = [
  {
    name: "Very clean!",
    labelColor: "#00ff6b",
    activeBarColor: "#00ff6b"
  },
  {
    name: "Clean :)",
    labelColor: "#14eb6e",
    activeBarColor: "#14eb6e"
  },
  {
    name: "Average",
    labelColor: "#f2cf1f",
    activeBarColor: "#f2cf1f"
  },
  {
    name: "Polluted",
    labelColor: "#f4ab44",
    activeBarColor: "#f4ab44"
  },
  {
    name: "Heavy emissions",
    labelColor: "#ff5400",
    activeBarColor: "#ff5400"
  },
  {
    name: "Run away!",
    labelColor: "#ff2900",
    activeBarColor: "#ff2900"
  }
];
