import React from 'react';
import { Text, TouchableOpacityProps, ViewProps } from 'react-native';
import { Button, Heading, Shape, Subtitle } from '..';
import {
  spacingSizeSm,
  spacingSizeXxs,
  spacingSizeXxxs,
} from '../../../assets/styles/style_variables';

export interface ICard extends ViewProps {
  title: string;
  subtitle?: string;
  text?: string;
  buttonLabel?: string;
  buttonProps?: TouchableOpacityProps;
}

export const Card = ({
  title,
  subtitle,
  text,
  buttonLabel,
  buttonProps,
  ...rest
}: ICard): JSX.Element => {
  return (
    <Shape {...rest}>
      <Heading style={{ marginBottom: spacingSizeXxxs.number }}>{title}</Heading>
      {!!subtitle && (
        <Subtitle style={{ marginBottom: spacingSizeXxs.number }}>{subtitle}</Subtitle>
      )}
      {!!text && <Text style={{ marginBottom: spacingSizeSm.number }}>{text}</Text>}
      {!!buttonLabel && <Button {...buttonProps}>{buttonLabel}</Button>}
    </Shape>
  );
};
