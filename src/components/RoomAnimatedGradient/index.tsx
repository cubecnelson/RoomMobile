import React, { Component } from "react";
import { StyleSheet, Animated, ViewStyle } from "react-native";
import { GradientHelper } from "./GradientHelper";

const styles = StyleSheet.create({
  component: {
    flex: 1
  }
});

const AnimatedGradientHelper = Animated.createAnimatedComponent(GradientHelper);

interface Props {
    colors: any;
    orientation: any;
    style: ViewStyle;
    children: any;
}

interface State {

    prevColors: any;
    prevOrientation: any;
    colors: any;
    orientation: any;
    tweener: any;
}

export class AnimatedGradient extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const { colors, orientation } = props;
    this.state = {
      prevColors: colors,
      prevOrientation: orientation,
      colors,
      orientation,
      tweener: new Animated.Value(0)
    };
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    const { colors: prevColors, orientation: prevOrientation } = state;
    const { colors, orientation } = props;
    const tweener = new Animated.Value(0);
    return {
      prevColors,
      prevOrientation,
      colors,
      orientation,
      tweener
    };
  }

  componentDidUpdate() {
    const { tweener } = this.state;
    Animated.loop(
        Animated.sequence([
          Animated.timing(tweener, {
            toValue: 1,
            duration: 500,
            delay: 1000
          }),
          Animated.timing(tweener, {
            toValue: 0,
            duration: 500
          })
        ]),
        {
          iterations: 4
        }
      ).start()
  }

  render() {
    const {
      tweener,
      prevColors,
      prevOrientation,
      colors,
      orientation
    } = this.state;

    const { style } = this.props;

    const color1Interp = tweener.interpolate({
      inputRange: [0, 1],
      outputRange: [prevColors[0], colors[0]]
    });

    const color2Interp = tweener.interpolate({
      inputRange: [0, 1],
      outputRange: [prevColors[1], colors[1]]
    });

    // orientation interpolations
    const startXinterp = tweener.interpolate({
      inputRange: [0, 1],
      outputRange: [prevOrientation.start.x, orientation.start.x]
    });

    const startYinterp = tweener.interpolate({
      inputRange: [0, 1],
      outputRange: [prevOrientation.start.y, orientation.start.y]
    });

    const endXinterp = tweener.interpolate({
      inputRange: [0, 1],
      outputRange: [prevOrientation.end.x, orientation.end.x]
    });

    const endYinterp = tweener.interpolate({
      inputRange: [0, 1],
      outputRange: [prevOrientation.end.y, orientation.end.y]
    });

    return (
      <AnimatedGradientHelper
        style={style || styles.component}
        color1={color1Interp}
        color2={color2Interp}
        startX={startXinterp}
        startY={startYinterp}
        endX={endXinterp}
        endY={endYinterp}
      >
        {this.props.children}
      </AnimatedGradientHelper>
    );
  }
}