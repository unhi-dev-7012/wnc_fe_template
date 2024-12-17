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
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Nhãn",
      dataIndex: "tags",
      render: (tags: string[]) => (
        <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: "Ngày đăng",
      dataIndex: "date",
      key: "date",
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
