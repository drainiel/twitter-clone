// types.ts - Post data types
export interface Post {
  id: string;
  name: string;
  username: string;
  timestamp: string;
  text: string;
  likes: number;
  isLiked: boolean;
}