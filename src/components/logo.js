import PropTypes from "prop-types";
import React from "react";
import Svg, { G, Path } from "react-native-svg";
import config from "../config";

const Logo = ({ size }) => (
  <Svg width={size} height={size} viewBox="0 0 61 61">
    <G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <G
        transform="translate(-112.000000, 0.000000)"
        fill={config.colors.tmrowPrimary}
        fill-rule="nonzero"
      >
        <G id="Logo-with-Symbol" transform="translate(111.750000, 0.500000)">
          <Path d="M30.8328215,60.2297044 C14.2104736,60.2297044 0.735398187,46.754629 0.735398187,30.1322811 C0.735398187,13.5099332 14.2104736,0.0348577315 30.8328215,0.0348577315 C47.4551695,0.0348577315 60.9302449,13.5099332 60.9302449,30.1322811 C60.9302449,46.754629 47.4551695,60.2297044 30.8328215,60.2297044 Z M30.8328215,39.1999352 C42.1552416,39.1999352 48.9098861,46.0614522 48.9133243,46.0632407 C52.6582352,41.8163162 54.9302449,36.2396268 54.9302449,30.1322811 C54.9302449,16.8236417 44.141461,6.03485773 30.8328215,6.03485773 C17.5241821,6.03485773 6.73539819,16.8236417 6.73539819,30.1322811 C6.73539819,36.2550179 9.01887372,41.8444204 12.7806595,46.0953234 C12.8031775,46.1207692 12.8257484,46.1461671 12.8483722,46.1715168 C12.8530421,46.1767494 19.5104014,39.1999352 30.8328215,39.1999352 Z" />
        </G>
      </G>
    </G>
  </Svg>
);

Logo.propTypes = {
  size: PropTypes.number
};
Logo.defaultProps = {
  size: 20
};

export default Logo;
