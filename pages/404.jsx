import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  });

  return (
    <div>
      <h1>Oops, Lost in space {":("}</h1>
      <p>
        Go back to <Link href="/">Home</Link>
      </p>
    </div>
  );
}
