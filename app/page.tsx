async function getData() {
  // const res = await fetch("http://localhost:3000/api/hello");
  return { message: 'hello world'};
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      <h1>Next.js Full Stack Development (Push based deployment)</h1>
      <p>{data.message}</p>
    </div>
  );
}