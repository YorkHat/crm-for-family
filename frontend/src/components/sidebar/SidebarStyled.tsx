import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const YhSidebarWrapper = styled.div`
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
`;

export const YhSidebarLink = styled(Link)`
  color: white;
  font-size: 19px;
  transition: 0.1s linear;

  &:hover {
    color: orange;
  }
`;

export const YhSidebarBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

export const YhBodyLinks = styled(YhSidebarLink)`
  padding: 5px 15px;
`;

export const YhSidebarFooter = styled.div`
  position: absolute;
  bottom: 20px;
  left: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const YhFooterLinks = styled(YhSidebarLink)`
  margin: 5px 0;
`;
