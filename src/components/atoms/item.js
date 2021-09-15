import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import colors from '../../utils/colors';

export function Item({heading, text, img, onPress, noBorder}) {
  return (
    <TouchableOpacity
      style={[styles.main, noBorder && styles.noBorder]}
      onPress={onPress}>
      <Image style={styles.img} source={img} />
      <View style={styles.rightText}>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.WHITE,
  },
  rightText: {
    paddingRight: 60,
  },
  noBorder: {
    borderBottomWidth: 0,
  },
  img: {marginHorizontal: 9},
  heading: {fontSize: 16, color: colors.TEXT},
  text: {fontSize: 11, color: colors.LIGHT_TEXT},
});
