import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {HomeSheetContent} from '../components/molecules';
import {ActionSheet} from '../components/organisms';
import colors from '../utils/colors';

function HomeScreen({navigation}) {
  const [modalState, setModalState] = useState(false);

  return (
    <View style={styles.main}>
      <ActionSheet show={modalState} setModalState={setModalState} height={400}>
        <HomeSheetContent
          navigation={navigation}
          sheetClose={() => setModalState(false)}
        />
      </ActionSheet>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalState(true)}>
        <Text style={styles.text}>Open modal</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    margin: 10,
    padding: 15,
    backgroundColor: colors.LIGHT_BLACK,
    borderRadius: 10,
  },
  text: {
    color: colors.LIGHT_WHITE,
    fontSize: 16,
  },
});
