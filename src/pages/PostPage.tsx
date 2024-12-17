import React, { useEffect } from "react";
import { usePostsStore } from "../stores/postsStore";
import { Button, Tag } from "antd";
import TableComponent from "../components/TableComponent";
import { useNavigate } from "react-router-dom";

const PostPage: React.FC = () => {
  const { posts, fetchPosts } = usePostsStore();
  const navigate = useNavigate();
  useEffect(() => {
    fetchPosts();
  }, []);

  const handleViewComment = (postId: number) => {
    navigate(`/post/${postId}/comments`);
  };

  const columns = [
    {
      title: "Số thứ tự",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Chuyên mục",
      dataIndex: "topic",
      key: "topic",
    },
    {
      title: "Nhãn",
      dataIndex: "labels",
      render: (labels: string) => (
        <>
          <Tag color="blue" key={labels}>
            {labels}
          </Tag>
        </>
      ),
    },
    {
      title: "Ngày đăng",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt: string) => {
        const date = new Date(createdAt);
        return date.toLocaleString(); // You can customize the format here
      },
    },
    {
      title: "Hành động",
      render: (_: any, record: any) => (
        <Button onClick={() => handleViewComment(record.id)}>
          Xem bình luận
        </Button>
      ),
    },
  ];

  return (
    <div>
      <h2>Danh sách bài viết</h2>
      <TableComponent data={posts} columns={columns} rowKey="id" />
    </div>
  );
};

export default PostPage;
