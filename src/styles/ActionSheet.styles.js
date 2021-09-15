import {StyleSheet} from 'react-native';
import colors from '../utils/colors';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: colors.LIGHT_BLACK,
  },
  background: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    width: '100%',
    height: 0,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  draggableContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  draggableIcon: {
    width: 100,
    height: 6,
    borderRadius: 3,
    marginBottom: 5,
    backgroundColor: colors.GRAY,
  },
});

export default styles;
