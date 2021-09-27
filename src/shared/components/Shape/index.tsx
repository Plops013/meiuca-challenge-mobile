import React, { ReactNode } from 'react';
import { ViewProps } from 'react-native';
import { ShapeContainer } from './styles';

export interface IShapeProps extends ViewProps {
  children: ReactNode;
}

export const Shape = ({ children, ...rest }: IShapeProps): JSX.Element => {
  return <ShapeContainer {...rest}>{children}</ShapeContainer>;
};
