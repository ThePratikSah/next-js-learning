import User from "../Components/User";

export default function Home({ data }) {
  return (
    <div>
      <h1>Home page</h1>
      <p>Lorem ipsuem doler mets</p>
      {data.map((user) => (
        <User name={user.name} email={user.email} key={user.id} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const data = await res.json();

  return {
    props: { data },
  };
}
