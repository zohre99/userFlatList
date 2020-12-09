import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import UserFlatList from './app/screens/users/UserFlatList'

export default function App() {
  return (
    <View style={styles.container}>
      <UserFlatList style={styles.flatList}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
