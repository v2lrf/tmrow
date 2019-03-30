import React, { PureComponent } from "react";
import { StyleSheet, SectionList } from "react-native";
import { prop, pathOr } from "ramda";
import Welcome from "./welcome";
import getCurrentLocation from "../helpers/geolocation";
import getData from "../api";
import { Header, Speed, Separator } from "../components";
import { ElectricityOrigin, ExtraData } from "./components";
import config from "../config";

const renderSectionHeader = ({ section }) => section.header();
const renderItem = ({ item }) => item.view();
const keyExtractor = prop("key");

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      init: true,
      loading: false,
      lon: 0,
      lat: 0,
      data: null
    };
  }

  getGeoLocation = () => {
    getCurrentLocation({ timeout: 15000 })
      .then(geoCurrentLocation => {
        this.setState(
          {
            lon: pathOr(0, ["coords", "longitude"], geoCurrentLocation),
            lat: pathOr(0, ["coords", "latitude"], geoCurrentLocation),
            loading: true
          },
          this.loadData
        );
      })
      .catch(error => {});
  };

  loadData = async () => {
    try {
      const { lat, lon } = this.state;
      if (lat && lon) {
        const data = await getData(lat, lon);
        this.setState({
          loading: false,
          init: false,
          data: data
        });
      }
    } catch (error) {
      // TODO
    }
  };

  topSection = () => ({
    data: [
      {
        view: () => <Speed value={this.state.data.carbonIntensity} />,
        key: "topSection"
      }
    ],
    header: () => <Header onPress={this.loadData} />
  });

  middleSection = () => ({
    data: [
      {
        view: () => (
          <ElectricityOrigin data={this.state.data.powerConsumptionBreakdown} />
        ),
        key: "middleSection"
      }
    ],
    header: () => <Separator />
  });

  endSection = () => ({
    data: [
      {
        view: () => (
          <ExtraData
            consumption={this.state.data.powerConsumptionTotal}
            fossil={this.state.data.fossilFreePercentage}
            renewable={this.state.data.renewablePercentage}
          />
        ),
        key: "endSection"
      }
    ],
    header: () => <Separator />
  });

  sections = () => [this.topSection(), this.middleSection(), this.endSection()];

  render() {
    const { init, loading } = this.state;

    if (init) {
      return <Welcome loading={loading} onPress={this.getGeoLocation} />;
    } else {
      return (
        <SectionList
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          keyExtractor={keyExtractor}
          sections={this.sections()}
          stickySectionHeadersEnabled={false}
          style={styles.container}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.colors.backgroundColor
  }
});
