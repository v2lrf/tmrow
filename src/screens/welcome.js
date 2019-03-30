import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet } from "react-native";
import { DotIndicator } from "react-native-indicators";
import { Button, Logo } from "../components";
import config from "../config";

export default class Welcome extends PureComponent {
  renderLoading = () => {
    return (
      <View style={styles.loadingView}>
        <DotIndicator color={config.colors.tmrowPrimary} />
      </View>
    );
  };

  renderWelcome = () => {
    return (
      <View style={[config.styles.container, styles.welcomeContainer]}>
        <Logo size={100} />
        <Text style={styles.header}>{config.strings.tmrow}</Text>
        <Text style={styles.messageTxt}>{config.strings.welcome.message}</Text>
        <Button onPress={this.props.onPress} />
      </View>
    );
  };

  render() {
    return this.props.loading ? this.renderLoading() : this.renderWelcome();
  }
}

const center = {
  justifyContent: "center",
  alignItems: "center"
};

const styles = StyleSheet.create({
  welcomeContainer: {
    ...center
  },
  loadingView: {
    backgroundColor: config.colors.backgroundColor,
    flex: 1,
    ...center
  },
  header: {
    fontWeight: "bold",
    fontSize: 30,
    paddingBottom: 20
  },
  messageTxt: {
    paddingVertical: 20,
    fontSize: 16
  }
});

Welcome.propTypes = {
  loading: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

Welcome.defaultProps = {
  onPress: () => {}
};
