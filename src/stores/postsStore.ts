import { create } from "zustand";
import { Post, Comment, api } from "../services/api";

interface PostsState {
  posts: Post[];
  comments: Comment[];
  fetchPosts: () => Promise<void>;
  fetchComments: (postId: number) => Promise<void>;
  addComment: (postId: number, comment: Comment) => Promise<void>;
}

export const usePostsStore = create<PostsState>((set) => ({
  posts: [],
  comments: [],
  fetchPosts: async () => {
    const data = await api.fetchPosts();
    set({ posts: data });
  },
  fetchComments: async (postId) => {
    const data = await api.fetchComments(postId);
    set({ comments: data });
  },
  addComment: async (postId, comment) => {
    await api.addComment(postId, comment);
    const updatedComments = await api.fetchComments(postId);
    set({ comments: updatedComments });
    //    set((state) => ({
    //   comments: [...state.comments, comment],
    // }));
  },
}));
