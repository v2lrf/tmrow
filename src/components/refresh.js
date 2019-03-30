import React from "react";
import PropTypes from "prop-types";
import Svg, { G, Path } from "react-native-svg";
import config from "../config";

const Refresh = ({ size }) => (
  <Svg width={size} height={size} viewBox="0 0 352 352">
    <G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <G fill={config.colors.tmrowPrimary} fill-rule="nonzero">
        <Path d="M176,308 C103.403,308 44,248.595 44,176 C44,103.399 103.403,44 176,44 C212.3,44 245.299,59.4 268.406,83.601 L198,154 L352,154 L352,0 L300.302,51.702 C268.406,19.798 224.406,0 176,0 C79.203,0 0,79.203 0,176 C0,272.797 78.094,352 176,352 C257.045,352 324.287,297.866 345.401,224 L298.85,224 C280.105,273.561 231.712,308 176,308 Z" />
      </G>
    </G>
  </Svg>
);

Refresh.propTypes = {
  size: PropTypes.number
};
Refresh.defaultProps = {
  size: 20
};

export default Refresh;
