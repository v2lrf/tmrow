import PropTypes from "prop-types";
import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import config from "../config";

const Button = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
    <Text style={styles.btnText}>{config.strings.welcome.button}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btnText: {
    paddingHorizontal: 40,
    fontSize: 16,
    fontWeight: "bold"
  },
  btnContainer: {
    borderColor: config.colors.tmrowPrimary,
    borderWidth: 2.5,
    marginVertical: 20,
    paddingVertical: 10,
    paddingHorizontal: 10
  }
});

Button.propTypes = {
  onPress: PropTypes.func
};
Button.defaultProps = {
  onPress: () => {}
};

export default Button;
