import React, { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonContainer, ButtonLabel } from './styles';

export interface IButtonProps extends TouchableOpacityProps {
  children: ReactNode;
}

export const Button = ({ children, ...rest }: IButtonProps): JSX.Element => {
  return (
    <ButtonContainer {...rest}>
      <ButtonLabel>{children}</ButtonLabel>
    </ButtonContainer>
  );
};
