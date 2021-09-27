import styled from 'styled-components/native';
import { brandColorPrimary5, neutralColor5 } from './assets/styles/style_variables';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${neutralColor5};
  flex: 1;
`;

export const LogoContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  margin: 12px;
  margin-bottom: 24px;
  align-self: center;
  background-color: ${brandColorPrimary5};
`