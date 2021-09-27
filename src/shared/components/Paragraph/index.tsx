import React, { ReactNode } from 'react';
import { TextProps } from 'react-native';
import { ParagraphStyled } from './styles';

export interface IParagraphProps extends TextProps {
  children: ReactNode;
}

export const Paragraph = ({ children, ...rest }: IParagraphProps): JSX.Element => {
  return <ParagraphStyled {...rest}>{children}</ParagraphStyled>;
};
