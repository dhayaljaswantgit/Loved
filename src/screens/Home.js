import * as React from 'react';
import {Button, View, StyleSheet} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={styles.main}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
