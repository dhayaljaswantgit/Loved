import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import {Item} from '../atoms';

export function HomeSheetContent({navigation, sheetClose}) {
  return (
    <View style={styles.main}>
      <Item
        onPress={() => {
          navigation.navigate('Details');
          sheetClose();
        }}
        img={require('../../../assets/images/transferCash.png')}
        heading="Transfer Cash"
        text="Add and withdraw cash."
      />
      <Item
        onPress={() => {
          navigation.navigate('Details');
          sheetClose();
        }}
        img={require('../../../assets/images/save.png')}
        heading="Save for something new"
        text="Save & invest towards something in the future."
      />
      <Item
        onPress={() => {
          navigation.navigate('Details');
          sheetClose();
        }}
        img={require('../../../assets/images/invite.png')}
        heading="Invite Victor"
        text="Give Victor access to login to their account."
      />
      <Item
        onPress={() => {
          navigation.navigate('Details');
          sheetClose();
        }}
        img={require('../../../assets/images/share.png')}
        heading="Share profile link"
        text="Other can signup and contribute to this account."
      />
      <Item
        onPress={() => {
          navigation.navigate('Details');
          sheetClose();
        }}
        img={require('../../../assets/images/settings.png')}
        heading="Settings and Account Documents"
        text="View and change settings. Access monthly statements, trade confirms and tx docs."
        noBorder
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.LIGHT_WHITE,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flex: 1,
    paddingTop: 10,
  },
});
