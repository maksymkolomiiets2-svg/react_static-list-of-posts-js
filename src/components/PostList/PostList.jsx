import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => (
  <div className="Postlist">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
