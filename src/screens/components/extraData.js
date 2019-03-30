import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text } from "react-native";
import config from "../../config";

export default class ExtraData extends PureComponent {
  constructor(props) {
    super(props);
  }

  renderItem = (item_name, item_value, pourcentage = false) => (
    <View style={styles.container}>
      <Text style={styles.info}>{item_name}</Text>
      <Text style={styles.data}>{Math.round(item_value)}</Text>
      {pourcentage ? (
        <Text style={styles.data}>{config.strings.pourcentage}</Text>
      ) : null}
      <Text style={styles.data}>{config.strings.legend}</Text>
    </View>
  );

  render() {
    const { consumption, fossil, renewable } = this.props;
    return (
      <View style={styles.mainContainer}>
        {this.renderItem(config.strings.total_consumption_message, consumption)}
        {this.renderItem(config.strings.fossil_free_message, fossil, true)}
        {this.renderItem(config.strings.renewable_message, renewable, true)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    paddingVertical: 20,
    ...config.styles.container
  },
  container: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 4
  },
  info: {
    fontSize: 16,
    fontWeight: "bold"
  },
  data: {
    fontSize: 14
  }
});

ExtraData.propTypes = {
  consumption: PropTypes.number.isRequired,
  fossil: PropTypes.number.isRequired,
  renewable: PropTypes.number.isRequired
};
