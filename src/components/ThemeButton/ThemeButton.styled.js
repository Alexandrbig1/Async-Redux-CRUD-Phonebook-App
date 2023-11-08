import styled from "styled-components";
import { GiPowerButton } from "react-icons/gi";

export const SwitcherTheme = styled.button`
  border: none;
  outline: none;
  background-color: ${(p) => p.theme.colors.mainBgColor};
  background: none;
  color: ${(p) => p.theme.colors.bgWrapperLight};
  border-radius: 1.2rem;
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 24px;
  transition: 0.3s;
`;

export const IconClick = styled(GiPowerButton)`
  color: ${(p) => p.theme.colors.textColor};
  font-size: 24px;
  transition: 0.3s;

  &:hover {
    color: ${(p) => p.theme.colors.deleteBtn};
  }
`;
