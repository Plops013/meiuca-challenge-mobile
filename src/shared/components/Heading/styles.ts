import { styleUtils } from './../../utils/styleUtils';
import styled from 'styled-components/native';
import {
  fontFamilyBold,
  fontSizeLg,
  fontWeightBold,
  lineHeightDistant,
  neutralColor1,
} from '../../../assets/styles/style_variables';

export const HeadingStyled = styled.Text`
  font-size: ${fontSizeLg.original};
  line-height: ${styleUtils.lineHeightFixer(fontSizeLg.number, lineHeightDistant)};
  font-family: ${fontFamilyBold};
  font-weight: ${fontWeightBold};
  color: ${neutralColor1};
`;
