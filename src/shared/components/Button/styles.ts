import { styleUtils } from './../../utils/styleUtils';
import styled from 'styled-components/native';
import {
  brandColorPrimary3,
  fontFamilyHighlight,
  fontSizeSm,
  lineHeightTight,
  neutralColor5,
  radiusSizeNone,
  spacingSquishSizeXsH,
  spacingSquishSizeXsV,
} from '../../../assets/styles/style_variables';

export const ButtonContainer = styled.TouchableOpacity`
  padding: ${spacingSquishSizeXsV.original} ${spacingSquishSizeXsH.original};
  background-color: ${brandColorPrimary3};
  border-radius: ${radiusSizeNone.original};
  align-self: flex-start;
`;

export const ButtonLabel = styled.Text`
  font-size: ${fontSizeSm.original};
  font-family: ${fontFamilyHighlight};
  color: ${neutralColor5};
  line-height: ${styleUtils.lineHeightFixer(fontSizeSm.number, lineHeightTight)};
`;
