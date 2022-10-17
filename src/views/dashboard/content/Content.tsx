import { Table, Modal, Input, Button } from "antd";
import React, { useState, useEffect } from "react";
import { EditOutlined, DeleteFilled } from "@ant-design/icons";
import {
  ContentCard,
  ContentMainDiv,
  ContentSpace,
  ContentHeader,
} from "./Content.style";

interface UserData {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: any;
}
const ContentLayout: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [userdata, setUserData] = useState<UserData | null>(null);
  const [dataSource, setDataSource] = useState([]);
  const [apiData, setApiData] = useState(false);

  // fetching APi and pass the function in useEffect
  const fetchData = async () => {
    let url = "https://reqres.in/api/users";
    let data = await fetch(url);
    let parsedData = await data.json();
    setDataSource(parsedData.data);
  };

  // fetching api Data
  useEffect(() => {
    if (apiData) {
      fetchData();
    }
  }, [apiData]);

  const columns = [
    {
      id: "id",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "first_name",
      title: "First Name",
      dataIndex: "first_name",
    },
    {
      key: "last_name",
      title: "Last Name",
      dataIndex: "last_name",
    },
    {
      key: "Email",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "Avatar",
      title: "Avatar",
      render: (record: any) => {
        return <img src={record.avatar} width="45px" alt={record.avatar} />;
      },
    },
    {
      key: "actions",
      title: "Actions",
      render: (record: any) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditUser(record);
              }}
            />

            <DeleteFilled
              onClick={() => {
                onDeleteUser(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const onDeleteUser = (record: any) => {
    const newData = dataSource.filter((user: any) => user.id !== record.id);
    Modal.confirm({
      title: "Are you sure, you want to delete this User record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource(newData);
      },
    });
  };

  const onEditUser = (record: any) => {
    setShowModal(true);
    setUserData({ ...record });
  };
  const resetEditing = () => {
    setShowModal(false);
    setUserData(null);
  };
  return (
    <ContentMainDiv>
      <ContentHeader>
        <ContentSpace>
          <Button
            onClick={() => {
              setApiData(true);
            }}
            shape="round"
            disabled={dataSource.length !== 0}
          >
            Fetch Data
          </Button>
        </ContentSpace>
        <ContentCard
          title={
            dataSource.length === 0 ? "Click to Fetch User Data" : "User Data"
          }
        >
          {apiData ? (
            <Table
              bordered={false}
              dataSource={dataSource}
              columns={columns}
              loading={dataSource.length === 0}
              pagination={false}
            />
          ) : (
            ""
          )}
        </ContentCard>
        <Modal
          title="Edit User"
          open={showModal}
          okText="Save Record"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((previous: any) => {
              return previous.map((user: { id: number | undefined }) => {
                if (user.id === userdata?.id) {
                  return userdata;
                } else {
                  return user;
                }
              });
            });
            resetEditing();
          }}
        >
          <Input
            value={userdata?.first_name}
            onChange={(e) => {
              setUserData((previous: UserData | any) => {
                return { ...previous, first_name: e.target.value };
              });
            }}
          />
          <Input
            value={userdata?.last_name}
            onChange={(e) => {
              setUserData((previous: UserData | any) => {
                return { ...previous, last_name: e.target.value };
              });
            }}
          />
          <Input
            value={userdata?.email}
            onChange={(e) => {
              setUserData((previous: UserData | any) => {
                return { ...previous, email: e.target.value };
              });
            }}
          />
          <Input
            value={userdata?.avatar}
            onChange={(e) => {
              setUserData((previous: UserData | any) => {
                return { ...previous, avatar: e.target.value };
              });
            }}
          />
        </Modal>
      </ContentHeader>
    </ContentMainDiv>
  );
};

export default ContentLayout;
