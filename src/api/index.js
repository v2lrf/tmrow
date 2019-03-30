import { pathOr } from "ramda";
import request from "./request";
import config from "../config";

export default (getData = async (lat, lon) => {
  let url_carbon_intensity = config.urls.carbon_intensity;
  let url_power_consumption = config.urls.power_consumption;

  try {
    const [carbon_intensity, power_consumption] = await Promise.all([
      request(lat, lon, url_carbon_intensity),
      request(lat, lon, url_power_consumption)
    ]);

    return (data = {
      carbonIntensity: pathOr(
        "",
        ["data", "carbonIntensity"],
        carbon_intensity
      ),
      fossilFreePercentage: pathOr(
        "",
        ["data", "fossilFreePercentage"],
        power_consumption
      ),
      powerConsumptionTotal: pathOr(
        "",
        ["data", "powerConsumptionTotal"],
        power_consumption
      ),
      renewablePercentage: pathOr(
        "",
        ["data", "renewablePercentage"],
        power_consumption
      ),
      powerConsumptionBreakdown: pathOr(
        "",
        ["data", "powerConsumptionBreakdown"],
        power_consumption
      )
    });
  } catch (error) {
    return null;
  }
});
