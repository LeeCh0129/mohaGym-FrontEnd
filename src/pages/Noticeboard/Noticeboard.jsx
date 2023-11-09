import React, { useState } from "react";
import { Button, Input, List, Modal } from "antd";
import "./noticeboard.css";

export default function Noticeboard() {
  const [notices, setNotices] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (title && content) {
      setNotices([...notices, { title, content }]);
      setTitle("");
      setContent("");
      setIsModalVisible(false);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDeleteNotice = (index) => {
    const updatedNotices = [...notices];
    updatedNotices.splice(index, 1);
    setNotices(updatedNotices);
  };

  return (
    <div className="Noticeboard">
      <h2>Noticeboard</h2>
      <Button type="primary" onClick={showModal}>
        Add Notice
      </Button>
      <Modal
        title="Add Notice"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          className="inputField"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input.TextArea
          className="inputField"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Modal>
      <List
        className="noticeList"
        header={<div>Notices</div>}
        bordered
        dataSource={notices}
        renderItem={(item, index) => (
          <List.Item
            actions={[
              <Button onClick={() => handleDeleteNotice(index)}>Delete</Button>,
            ]}
          >
            <List.Item.Meta title={item.title} description={item.content} />
          </List.Item>
        )}
      />
    </div>
  );
}
