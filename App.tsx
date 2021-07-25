import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

export default function App() {

  return (
    <SafeAreaView>
      <View style={{
        backgroundColor: 'red',
        width: '100%',
        height: 300,
      }}>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  )
}
