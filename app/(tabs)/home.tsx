import { Feed } from '@/components/feed/feed';
import { mockPosts } from '@/mockData';

export default function HomeScreen() {
  return <Feed posts={mockPosts} />;
}