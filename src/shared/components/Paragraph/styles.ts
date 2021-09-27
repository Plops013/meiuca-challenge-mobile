import styled from 'styled-components/native';
import {
  fontFamilyHighlight,
  fontSizeXs,
  lineHeightDistant,
  neutralColor2,
} from '../../../assets/styles/style_variables';
import { styleUtils } from '../../utils/styleUtils';

export const ParagraphStyled = styled.Text`
  font-size: ${fontSizeXs.original};
  line-height: ${styleUtils.lineHeightFixer(fontSizeXs.number, lineHeightDistant)};
  font-family: ${fontFamilyHighlight};
  color: ${neutralColor2};
`;
