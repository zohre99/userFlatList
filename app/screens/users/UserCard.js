import React, { useState, useCallback, useEffect } from "react";
import { Animated, Dimensions, StyleSheet, View } from "react-native";
import Card from "./Card";

export const MARGIN = 10;

export const useComponentSize = () => {
    const [size, setSize] = useState({
        height: 0,
        width: 0,
    });
  
    const onLayout = useCallback(event => {
      const { width, height } = event.nativeEvent.layout;
      setSize({ width, height });
    }, []);
  
    return [size, onLayout];
};


const UserCard = ({ item, y, index }) => {
  const [size, onLayout] = useComponentSize();

  const CARD_HEIGHT = size.height + MARGIN * 2;
  const { height: wHeight } = Dimensions.get("window");
  const height = wHeight - 64;

  const position = Animated.subtract(index * CARD_HEIGHT, y);
  const isDisappearing = -CARD_HEIGHT;
  const isTop = 0;
  const isBottom = height - CARD_HEIGHT;
  const isAppearing = height;
  const translateY = Animated.add(
    Animated.add(
      y,
      y.interpolate({
        inputRange: [0, 0.00001 + index * CARD_HEIGHT],
        outputRange: [0, -index * CARD_HEIGHT],
        extrapolateRight: "clamp",
      })
    ),
    position.interpolate({
      inputRange: [isBottom, isAppearing],
      outputRange: [0, -CARD_HEIGHT / 4],
      extrapolate: "clamp",
    })
  );
  const scale = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: "clamp",
  });
  const opacity = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
  });

  return (
    <Animated.View
      style={[styles.card, { opacity, transform: [{ translateY }, { scale }] }]}
      key={index}
    >
      <View onLayout={onLayout}>
        <Card {...{ item }} />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: MARGIN,
    alignSelf: "center",
  },
});

export default UserCard;