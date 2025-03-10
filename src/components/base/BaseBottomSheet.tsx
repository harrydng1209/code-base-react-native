import IconClose from '@/assets/icons/shared/IconClose';
import styles from '@/assets/styles/components/base-bottom-sheet.style';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';
import { TouchableOpacity, View } from 'react-native';

import BaseText from './BaseText';

export type TRef = {
  dismiss: () => void;
  present: () => void;
};

interface IProps extends React.PropsWithChildren {
  snapPoints?: string[];
  title: string;
}

const BaseBottomSheet = forwardRef<TRef, IProps>((props, ref) => {
  const { children, snapPoints, title, ...otherProps } = props;

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
      snapPoints={snapPoints || ['79%']}
      style={styles.container}
      {...otherProps}
    >
      <BottomSheetView style={styles.contentContainer}>
        <View>
          <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
            <View style={styles.iconClose}>
              <IconClose />
            </View>
          </TouchableOpacity>

          <BaseText style={styles.modalTitle}>{title}</BaseText>
        </View>

        <View>{children}</View>
      </BottomSheetView>
    </BottomSheetModal>
  );
});

BaseBottomSheet.displayName = 'BaseBottomSheet';

export default BaseBottomSheet;
