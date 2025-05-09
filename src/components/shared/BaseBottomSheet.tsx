import IconClose from '@/assets/icons/shared/IconClose.svg';
import { styles } from '@/assets/styles/components/base-bottom-sheet.style';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetProps,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';
import { TouchableOpacity, View } from 'react-native';

import { BaseText } from './BaseText';

export interface IBottomSheetRef {
  dismiss: () => void;
  present: () => void;
}

interface IProps extends BottomSheetProps {
  hideCloseButton?: boolean;
  snapPoints?: string[];
  title?: string;
}

export const BaseBottomSheet = forwardRef<IBottomSheetRef, IProps>(
  (props, ref) => {
    const { children, hideCloseButton, snapPoints, title, ...otherProps } =
      props;

    const bottomSheetRef = useRef<BottomSheetModal>(null);

    const handleClose = useCallback(() => {
      bottomSheetRef.current?.dismiss();
    }, []);

    useImperativeHandle(ref, () => ({
      dismiss: () => bottomSheetRef.current?.dismiss(),
      present: () => bottomSheetRef.current?.present(),
    }));

    return (
      <BottomSheetModal
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            opacity={0.5}
            {...props}
          />
        )}
        handleComponent={null}
        ref={bottomSheetRef}
        snapPoints={snapPoints || ['80%']}
        style={styles.container}
        {...otherProps}
      >
        <BottomSheetView style={styles.contentContainer}>
          <>
            {!hideCloseButton && (
              <TouchableOpacity
                onPress={handleClose}
                style={styles.closeButton}
              >
                <View style={styles.iconClose}>
                  <IconClose />
                </View>
              </TouchableOpacity>
            )}

            {title && <BaseText style={styles.modalTitle}>{title}</BaseText>}
          </>

          <>{children}</>
        </BottomSheetView>
      </BottomSheetModal>
    );
  },
);

BaseBottomSheet.displayName = 'BaseBottomSheet';
