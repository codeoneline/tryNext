// app/feed/(.)[id]/page.tsx
export default async function InterceptedPostPage({
  params,
}) {
  const { id } = await params
  
  return (
    // 这是一个模态框，覆盖在当前页面上
    <div className="modal-overlay" onClick={() => {}}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Post {id} 的详情（模态框）</h2>
        <p>这是在当前页面弹出的模态框</p>
        <button onClick={() => {}}>关闭</button>
      </div>
    </div>
  );
}