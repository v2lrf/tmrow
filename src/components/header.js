import React from "react";
import PropTypes from "prop-types";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Logo, Refresh } from "./";
import config from "../config";

const Header = ({ onPress }) => (
  <SafeAreaView style={{ backgroundColor: config.colors.white }}>
    <View style={[config.styles.container, styles.header]}>
      <View style={styles.containerLeft}>
        <Logo size={30} style={styles.logo} />
      </View>
      <TouchableOpacity onPress={onPress} style={styles.containerRight}>
        <Refresh size={26} />
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  containerLeft: {
    flex: 1
  },
  containerRight: {
    flex: 1,
    alignItems: "flex-end"
  },
  header: {
    height: 30,
    flexDirection: "row",
    backgroundColor: config.colors.white
  }
});

Header.propTypes = {
  onPress: PropTypes.func
};
Header.defaultProps = {
  onPress: () => {}
};

export default Header;
