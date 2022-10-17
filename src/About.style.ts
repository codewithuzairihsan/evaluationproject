import  styled  from 'styled-components';
import {Card, Space} from 'antd'
const AboutCard = styled(Card)`
  border-radius: 20px;
  > .ant-card-head{
    color: white;
    background: #5cb85c;
    font-size: 24px;
  }
`;

const AboutSpace = styled(Space)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export {AboutCard,AboutSpace}