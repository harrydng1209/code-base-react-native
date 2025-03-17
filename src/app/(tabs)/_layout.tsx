import IconHomeTab from '@/assets/icons/shared/IconHomeTab.svg';
import IconProfileTab from '@/assets/icons/shared/IconProfileTab.svg';
import { COLORS } from '@/assets/styles/root/_variables.style';
import BaseText from '@/components/shared/BaseText';
import constants from '@/constants';
import useColorScheme from '@/hooks/shared/use-color-scheme';
import { Tabs } from 'expo-router';
import { Platform, StyleSheet } from 'react-native';

const { themeColors } = constants;

const TabsLayout: React.FC = () => {
  const theme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: themeColors[theme].TINT,
        tabBarStyle: Platform.select({
          default: {
            borderTopWidth: 0,
          },
          ios: {
            borderTopWidth: 0,
            elevation: 0,
            position: 'absolute',
          },
        }),
      }}
    >
      <Tabs.Screen
        name="home-tab"
        options={{
          tabBarIcon: ({ focused }) => (
            <IconHomeTab color={focused ? COLORS.BRANCH_2 : COLORS.TEXT_3} />
          ),
          tabBarLabel: ({ focused }) => (
            <BaseText
              style={[
                styles.title,
                { color: focused ? COLORS.BRANCH_2 : COLORS.TEXT_3 },
              ]}
            >
              Home
            </BaseText>
          ),
        }}
      />

      <Tabs.Screen
        name="profile-tab"
        options={{
          tabBarIcon: ({ focused }) => (
            <IconProfileTab color={focused ? COLORS.BRANCH_2 : COLORS.TEXT_3} />
          ),
          tabBarLabel: ({ focused }) => (
            <BaseText
              style={[
                styles.title,
                { color: focused ? COLORS.BRANCH_2 : COLORS.TEXT_3 },
              ]}
            >
              Profile
            </BaseText>
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    fontWeight: 600,
  },
});

export default TabsLayout;
