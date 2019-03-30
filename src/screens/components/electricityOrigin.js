import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text, FlatList, Dimensions } from "react-native";
import {
  pipe,
  ifElse,
  filter,
  toPairs,
  map,
  of,
  fromPairs,
  identity,
  isEmpty,
  not
} from "ramda";
import { EnergyElement } from "../../components";
import config from "../../config";

const removeUnusedValues = filter(ifElse(isEmpty, not, identity));
const toIndividualKeys = pipe(
  toPairs,
  map(
    pipe(
      of,
      fromPairs
    )
  )
);
const cleanData = pipe(
  removeUnusedValues,
  toIndividualKeys
);

const numColumns = 3;

export default class ElectricityOrigin extends PureComponent {
  constructor(props) {
    super(props);
  }

  renderItem = ({ item }) => (
    <EnergyElement
      energyName={Object.keys(item)[0]}
      value={Object.values(item)[0]}
    />
  );

  renderList = () => (
    <FlatList
      style={config.styles.container}
      data={cleanData(this.props.data)}
      renderItem={this.renderItem}
      numColumns={numColumns}
      keyExtractor={item => Object.keys(item)[0]}
    />
  );

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.containerHeader}>
          <Text style={styles.info}>{config.strings.origin_message}</Text>
        </View>
        {isEmpty(this.props.data) ? null : this.renderList()}
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
  containerHeader: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 4,
    paddingBottom: 10,
    justifyContent: "center"
  },
  info: {
    fontSize: 22,
    fontWeight: "bold"
  },
  data: {
    fontSize: 14
  },
  item: {
    backgroundColor: "#4D243D",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: Dimensions.get("window").width / numColumns,
    height: Dimensions.get("window").width / numColumns
  }
});

ElectricityOrigin.propTypes = {
  data: PropTypes.object
};

ElectricityOrigin.defaultProps = {
  data: {}
};
