import React, { ReactNode } from 'react';
import { TextProps } from 'react-native';
import { HeadingStyled } from './styles';

export interface IHeadingProps extends TextProps {
  children: ReactNode;
}

export const Heading = (props: IHeadingProps): JSX.Element => {
  return <HeadingStyled>{props.children}</HeadingStyled>;
};
