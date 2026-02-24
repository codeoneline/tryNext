export default async function Page({
  params
}) {
  const { category, item } = await params
  return <h1>category {category}, item {item}</h1>
}