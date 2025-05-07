import { COLORS } from '@/assets/styles/root/_variables.style';
import { TOptions } from '@/models/types/shared.type';
import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

import { BaseText } from './BaseText';

interface IProps extends TouchableOpacityProps {
  tabs: TOptions[];
}

export const BaseTabs: React.FC<IProps> = ({
  children,
  tabs,
  ...otherProps
}) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <>
      <View style={styles.tabContainer}>
        {tabs.map((item, index) => {
          const isSelected = selectedTab === index;

          return (
            <TouchableOpacity
              key={item.key || index}
              onPress={() => setSelectedTab(index)}
              style={[
                styles.tab,
                {
                  backgroundColor: isSelected
                    ? COLORS.NEUTRALS_WHITE
                    : COLORS.NEUTRALS_6,
                },
              ]}
              {...otherProps}
            >
              <BaseText
                className="nw-text-[13]"
                style={{
                  color: isSelected ? COLORS.TEXT_1 : COLORS.TEXT_3,
                  fontWeight: isSelected ? 600 : 400,
                }}
              >
                {item.label}
              </BaseText>
            </TouchableOpacity>
          );
        })}
      </View>

      <View className="nw-mt-4">
        {React.Children.toArray(children)[selectedTab]}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  tab: {
    alignItems: 'center',
    borderRadius: 16,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  tabContainer: {
    backgroundColor: COLORS.NEUTRALS_6,
    borderRadius: 40,
    flexDirection: 'row',
    padding: 4,
  },
});
