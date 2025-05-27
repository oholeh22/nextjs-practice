import Post from '@/app/components/Post';

export async function generateMetadata({ params }) {
  const post = await fetchData(params.id);
  return {
    title: post.title + ' - Page on site ',
    description: post.body,
  };
}

async function fetchData(id) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
    cache: 'no-store',
  });
  const result = await res.json();
  return result;
}

const PagePost = async ({ params: { id } }) => {
  const post = await fetchData(id);

  return (
    <div className="post">
      <Post post={post} />
    </div>
  );
};

export default PagePost;
