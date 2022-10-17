import styled  from 'styled-components';
import {Card,Space} from 'antd';

const ContentMainDiv = styled.div`

`;

const ContentHeader = styled.div`
  margin-top: 20px;

  & .ant-btn{
    background: #f0ad4e;

    &:hover{
      border: 1px solid #f0ad4e;
      color: white;
    }
  }
`;

const ContentCard = styled(Card)`
  border-radius: 20px;
  > .ant-card-head{
    color: white;
    background: #5cb85c;
  }
`;

const ContentSpace = styled(Space)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export {ContentCard,ContentSpace,ContentMainDiv,ContentHeader}