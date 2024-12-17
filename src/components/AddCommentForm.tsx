import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { usePostsStore } from "../stores/postsStore";
import { Comment } from "../services/api";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};

const AddCommnentForm: React.FC = () => {
  const postId = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { addComment } = usePostsStore();

  const onFinish = (values: Comment) => {
    setLoading(true);

    const newComment: Comment = {
      reader: values.reader,
      content: values.content,
      email: values.email,
      date: new Date(),
    };
    setTimeout(() => {
      addComment(Number(postId), newComment);
      message.success("Bình luận đã được thêm thành công");
      navigate(`post/${postId}/comments`);
      setLoading(false);
    }, 1000);
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["user", "name"]}
        label="Name"
        rules={[
          { required: true, message: "Username is required!" },
          {
            validator: (_, value) => {
              if (value && (value.length < 10 || value.length > 100)) {
                return Promise.reject(
                  "Content must be between 10 and 100 characters!"
                );
              }
              return Promise.resolve();
            },
          },
        ]}
      >
        <Input />
      </Form.Item>
      {/* <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[{ type: "email" }]}
      >
        <Input />
      </Form.Item> */}
      <Form.Item
        name={["user", "content"]}
        label="Content"
        rules={[{ required: true }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddCommnentForm;
