import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../src/theme/index";

import GalioTheme, { withGalio } from "./theme";

const Divider = ({ style, theme, ...props }) => (
  <View
    style={StyleSheet.flatten([styles.container(theme), style])}
    {...props}
  />
);

Divider.defaultProps = {
  styles: {},
  theme: GalioTheme,
};

// Divider.propTypes = {
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
//   theme: PropTypes.object,
// };

const styles = (theme) => {
  StyleSheet.create({
    // height: 1,
    color: theme.COLORS.BLACK,
  });
};

export default withGalio(Divider, styles);
