import React, {useState, useEffect, memo, useCallback} from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  Animated,
  PanResponder,
} from 'react-native';
import styles from '../../styles/ActionSheet.styles';

const AREA_PER = 0.33;
const DURATION = 300;

const ActionSheet = ({
  show = false,
  height,
  children,
  onRequestClose,
  setModalState,
}) => {
  const [animatedHeight] = useState(new Animated.Value(0));
  const [pan] = useState(new Animated.ValueXY());

  useEffect(() => {
    setModalVisible(show);
  }, [setModalVisible, show]);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gestureState) => {
      if (gestureState.dy > 0) {
        Animated.event([null, {dy: pan.y}], {
          useNativeDriver: false,
        })(e, gestureState);
      }
    },
    onPanResponderRelease: (e, gestureState) => {
      const gestureLimitArea = height * AREA_PER;
      const gestureDistance = gestureState.dy;
      if (gestureDistance > gestureLimitArea) {
        setModalVisible(false);
      } else {
        Animated.spring(pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: false,
        }).start();
      }
    },
  });

  const setModalVisible = useCallback(
    visible => {
      if (visible) {
        setModalState(visible);
        Animated.timing(animatedHeight, {
          toValue: height,
          duration: DURATION,
          useNativeDriver: false,
        }).start();
      } else {
        Animated.timing(animatedHeight, {
          toValue: 0,
          duration: DURATION,
          useNativeDriver: false,
        }).start(() => {
          pan.setValue({x: 0, y: 0});
          setModalState(visible);
        });
      }
    },
    [animatedHeight, height, pan, setModalState],
  );

  const close = () => {
    setModalVisible(false);
  };

  const panStyle = {
    transform: pan.getTranslateTransform(),
  };

  return (
    <Modal transparent visible={show} onRequestClose={onRequestClose}>
      <View style={[styles.wrapper]}>
        <TouchableOpacity
          style={styles.background}
          activeOpacity={1}
          onPress={close}
        />
        <Animated.View
          {...panResponder.panHandlers}
          style={[
            panStyle,
            styles.container,
            {
              height: animatedHeight,
            },
          ]}>
          <View style={styles.draggableContainer}>
            <View style={styles.draggableIcon} />
          </View>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

export default memo(ActionSheet);
