import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionsContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  border-bottom: 1px solid black;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoTitleContainer = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin-left: 15px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: large;
`;

export const OptionsLink = styled(Link)`
  ${OptionsContainerStyles}
`;

export const OptionsDiv = styled.div`
  ${OptionsContainerStyles}
`;