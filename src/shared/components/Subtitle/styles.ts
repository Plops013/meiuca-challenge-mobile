import styled from 'styled-components/native';
import {
  fontFamilySemibold,
  fontSizeMd,
  lineHeightMedium,
  neutralColor2,
} from '../../../assets/styles/style_variables';
import { styleUtils } from '../../utils/styleUtils';

export const SubtitleStyled = styled.Text`
  font-size: ${fontSizeMd.original};
  line-height: ${styleUtils.lineHeightFixer(fontSizeMd.number, lineHeightMedium)};
  font-family: ${fontFamilySemibold};
  color: ${neutralColor2};
`;
