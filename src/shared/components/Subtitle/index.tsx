import React, { ReactNode } from 'react';
import { TextProps } from 'react-native';
import { SubtitleStyled } from './styles';

export interface ISubtitleProps extends TextProps {
  children: ReactNode;
}

export const Subtitle = ({ children, ...rest }: ISubtitleProps): JSX.Element => {
  return <SubtitleStyled {...rest}>{children}</SubtitleStyled>;
};
