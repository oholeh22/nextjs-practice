import Post from '@/app/components/Post';

export async function generateMetadata({ params }) {
  const post = await fetchData(params.id);
  return {
    title: `${post.title} - Page on site`,
    description: post.body,
  };
}

export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return posts.map(post => ({
    id: post.id.toString(),
  }));
}

async function fetchData(id) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
  });
  return res.json();
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
