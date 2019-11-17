
import React, { Component } from "react";
import LinearGradient from "react-native-linear-gradient";
import { ViewStyle } from "react-native";

interface Props {
    style: ViewStyle;
    color1: string;
    color2: string;
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    children?: any;
}

export class GradientHelper extends Component<Props> {
  render() {
    const { style, color1, color2, startX, startY, endX, endY } = this.props;
    return (
      <LinearGradient
        colors={[color1, color2]}
        start={{
          x: startX,
          y: startY
        }}
        end={{
          x: endX,
          y: endY
        }}
        style={style}
      >
        {this.props.children}
      </LinearGradient>
    );
  }
}