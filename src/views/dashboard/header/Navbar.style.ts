
import { Layout } from 'antd';
import styled from 'styled-components';
const {Header } = Layout

const HeaderDiv = styled(Header)`
height: 80px;
line-height: 0;

> .ant-row{
height: 80px;
}
& h2.ant-typography{
    color: white;
    margin: 0;
}
`;
export {HeaderDiv}