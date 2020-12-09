import React, { useEffect, useState } from "react";
import { Animated, FlatList, StyleSheet } from "react-native";

import UserCard from "./UserCard";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export default function Users() {
  const [users, setUsers] = useState([]);

  const y = new Animated.Value(0);
  
  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
    useNativeDriver: true,
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      body: null,
      headers: {
        'content-type': 'application/json'
      }
    }) .then((response) => response.json()) 
      .then((responseJson) => {
        setUsers(responseJson);
      })
  }, [])
  
  return (
    <AnimatedFlatList
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      bounces={false}
      data={users}
      renderItem={({ index, item }) => (
        <UserCard {...{ index, y, item }} />
      )}
      keyExtractor={(item) => item.index}
      {...{ onScroll }}
      style={styles.flatList}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    marginTop: 50,
  },
})