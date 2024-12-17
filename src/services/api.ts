import apiClient from "../config/axiosConfig";

export interface Comment {
  reader: string;
  email: string;
  content: string;
  date: Date;
}

export interface Post {
  id: number;
  title: string;
  category: string;
  tags: string[];
  date: Date;
}

export const api = {
  fetchPosts: async (): Promise<Post[]> => {
    const response = await apiClient.get("/posts");
    return response.data.data;
  },

  fetchComments: async (postId: number): Promise<Comment[]> => {
    const response = await apiClient.get(`/posts/${postId}/comments`);
    return response.data.data;
  },

  addComment: async (postId: number, comment: Comment): Promise<void> => {
    await apiClient.post(`/posts/${postId}/comments`, comment);
  },
};
