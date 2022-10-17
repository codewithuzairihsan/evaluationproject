import { Layout } from 'antd';
import styled  from 'styled-components';

const MainLayoutDiv = styled(Layout)`
 min-height: 100vh;
`;

const SidebarLayoutDiv = styled(Layout) `
`;
const ContentLayoutMainDiv = styled(Layout) `
margin: 0 16px;
`;
const ContentDiv = styled(Layout)`
padding: 24;
min-height: 360;
`;

export {MainLayoutDiv, SidebarLayoutDiv, ContentLayoutMainDiv,ContentDiv}