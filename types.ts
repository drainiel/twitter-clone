// types.ts - data types
export interface Post {
  id: string;
  name: string;
  username: string;
  timestamp: string;
  text: string;
  likes: number;
  isLiked: boolean;
  comments: Comment[];  
  commentCount: number; 
}
export interface Comment {
  id: string;
  name: string;
  username: string;
  text: string;
  timestamp: string;
}