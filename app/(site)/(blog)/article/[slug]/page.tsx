export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="pt-20">
      <h1>Article slug {params.slug}</h1>
    </div>
  );
}
