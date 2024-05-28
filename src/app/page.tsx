import Link from "next/link";

export default function Home() {
  return (
    <main>
        <h1>Welcome to Create Next App!</h1>

        <ul>
            <li>
                <Link href="/products/">Products</Link>
            </li>
            <li>
                <Link href="/order-product/">order-product</Link>
            </li>
            <li>
                <Link href="/login/">login</Link>
            </li>
        </ul>

    </main>
  );
}
