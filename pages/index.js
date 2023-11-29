import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data } = useSWR("/api/random-character", fetcher);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <h1>
      {data.lastName}, {data.firstName}
    </h1>
  );
}
