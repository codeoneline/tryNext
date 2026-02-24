import Link from 'next/link';

export default function FeedPage() {
  const posts = [
    { id: '1', title: 'Post 1' },
    { id: '2', title: 'Post 2' },
  ];

  return (
    <div>
      <h1>动态列表</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {/* 点击会触发拦截路由！ */}
            <Link href={`/feed/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}