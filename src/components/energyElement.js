import PropTypes from "prop-types";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EnergyElement = ({ value, energyName }) => (
  <View style={styles.container}>
    <Text style={styles.header}>{energyName}</Text>
    <Text style={styles.text}>{`${value} MW`}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10
  },
  header: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize"
  },
  text: {
    textAlign: "center",
    fontSize: 16
  }
});

EnergyElement.propTypes = {
  value: PropTypes.number.isRequired,
  energyName: PropTypes.string.isRequired
};

export default EnergyElement;
