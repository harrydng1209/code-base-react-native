import { COLORS } from '@/assets/styles/root/_variables.style';
import { useEffect, useRef } from 'react';
import {
  Animated,
  Modal,
  Pressable,
  ModalProps as RNModalProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

interface IProps extends Omit<RNModalProps, 'animationType' | 'transparent'> {
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  onClose: () => void;
  overlayStyle?: StyleProp<ViewStyle>;
  position?: 'bottom' | 'center';
}

export const BaseModal: React.FC<IProps> = ({
  children,
  containerStyle,
  contentStyle,
  onClose,
  overlayStyle,
  position = 'center',
  visible,
  ...otherProps
}) => {
  const slideAnimation = useRef(new Animated.Value(0)).current;
  const backdropAnimation = useRef(new Animated.Value(0)).current;

  const translateY = slideAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [300, 0],
  });

  const backdropOpacity = backdropAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const getContainerStyle = () => {
    const animationStyle =
      position === 'bottom'
        ? { transform: [{ translateY }] }
        : { opacity: slideAnimation };

    if (position === 'bottom')
      return [styles.containerBottom, containerStyle, animationStyle];

    return [styles.containerCenter, containerStyle, animationStyle];
  };

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(backdropAnimation, {
          duration: 300,
          toValue: 1,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnimation, {
          duration: 300,
          toValue: 1,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(backdropAnimation, {
          duration: 300,
          toValue: 0,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnimation, {
          duration: 300,
          toValue: 0,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible, backdropAnimation, slideAnimation]);

  return (
    <Modal
      animationType="none"
      onRequestClose={onClose}
      transparent
      visible={visible}
      {...otherProps}
    >
      <Animated.View
        style={[styles.overlay, overlayStyle, { opacity: backdropOpacity }]}
      >
        <Pressable onPress={onClose} style={StyleSheet.absoluteFill} />
        <Animated.View
          onStartShouldSetResponder={() => true}
          onTouchEnd={(e) => e.stopPropagation()}
          style={getContainerStyle()}
        >
          <View style={[styles.content, contentStyle]}>{children}</View>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  containerBottom: {
    backgroundColor: COLORS.NEUTRALS_1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },
  containerCenter: {
    backgroundColor: COLORS.NEUTRALS_1,
    borderRadius: 16,
    maxWidth: '90%',
    minWidth: '70%',
    overflow: 'hidden',
  },
  content: {
    padding: 16,
  },
  overlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
  },
});
