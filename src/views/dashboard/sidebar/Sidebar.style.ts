import { Layout } from 'antd';
import  styled  from 'styled-components';
const {Sider} = Layout

const SiderDiv = styled(Sider)`
color: white;
background: #252525;
display: flex;
flex-direction: column;
align-items: center;
max-width: 200px;
max-height: 100vh;
`;

export {SiderDiv}