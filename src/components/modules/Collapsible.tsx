import { ThemedText } from '@/components/modules/ThemedText';
import { ThemedView } from '@/components/modules/ThemedView';
import { IconSymbol } from '@/components/shared/IconSymbol';
import { Colors } from '@/constants/colors.const';
import { useColorScheme } from '@/hooks/shared/use-color-scheme';
import { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export function Collapsible({
  children,
  title,
}: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';

  return (
    <ThemedView>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setIsOpen((value) => !value)}
        style={styles.heading}
      >
        <IconSymbol
          color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
          name="chevron.right"
          size={18}
          style={{ transform: [{ rotate: isOpen ? '90deg' : '0deg' }] }}
          weight="medium"
        />

        <ThemedText type="defaultSemiBold">{title}</ThemedText>
      </TouchableOpacity>
      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  content: {
    marginLeft: 24,
    marginTop: 6,
  },
  heading: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
  },
});
