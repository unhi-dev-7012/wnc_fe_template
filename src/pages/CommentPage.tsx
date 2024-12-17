import React, { useEffect } from "react";
import { usePostsStore } from "../stores/postsStore";
import { Button } from "antd";
import TableComponent from "../components/TableComponent";
import { useNavigate, useParams } from "react-router-dom";

const CommentPage: React.FC = () => {
  const { postId } = useParams();
  const { comments, fetchComments } = usePostsStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (postId) fetchComments(Number(postId));
  }, [postId, fetchComments]);

  const handleAddComment = (postId: number) => {
    navigate(`/post/${postId}/comments/new`);
  };

  const columns = [
    {
      title: "Số thứ tự",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên đọc giả",
      dataIndex: "reader",
      key: "reader",
    },
    {
      title: "Nội dung bình luận",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "Ngày đăng",
      dataIndex: "date",
      key: "date",
    },
  ];

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Danh sách bài viết</h2>
        <Button onClick={() => handleAddComment(Number(postId))}>
          Tạo bình luận mới
        </Button>
      </div>
      <TableComponent data={comments} columns={columns} rowKey="id" />
    </div>
  );
};

export default CommentPage;
