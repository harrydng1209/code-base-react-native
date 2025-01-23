import React from 'react';
import { View, ViewProps } from 'react-native';

interface IProps extends ViewProps {}

const BaseView: React.FC<IProps> = (props) => {
  const { children, style, ...otherProps } = props;

  return (
    <View style={style} {...otherProps}>
      {children}
    </View>
  );
};
export default BaseView;
