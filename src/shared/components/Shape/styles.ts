import styled from 'styled-components/native';
import {
  borderSizeThin,
  neutralColor4,
  neutralColor5,
  radiusSizeNone,
  spacingSizeLg,
} from '../../../assets/styles/style_variables';

export const ShapeContainer = styled.View`
  border-radius: ${radiusSizeNone.original};
  padding: ${spacingSizeLg.original};
  border-width: ${borderSizeThin.original};
  border-color: ${neutralColor4};
  background-color: ${neutralColor5};
`;
