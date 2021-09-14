import * as React from 'react';
import {Button, View, StyleSheet} from 'react-native';

function DetailsScreen({navigation}) {
  return (
    <View style={styles.main}>
      <Button title="Take Me Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default DetailsScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
