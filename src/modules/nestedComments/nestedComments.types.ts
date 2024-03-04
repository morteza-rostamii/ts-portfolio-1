
export type TComment = {
  id: string,
  text: string,
  likes: number,
  parentId: string,
  createdAt: Date,
  user: {
    id: string,
    username: string,
    avatar: string,
  },
};