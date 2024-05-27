"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";


const nabLinks = [
    { href: '/login', name: 'Login' },
    { href: '/register', name: 'Register' },
    { href: '/forgot-password', name: 'Forgot Password' },
];

export default function Layout({ children }) {
    const pathname = usePathname();

  return (
    <div>
            {nabLinks.map((link, index) => (
                <Link key={index} href={link.href}>
                    <p>{link.name}</p>
                </Link>
            ))}

      {children}
    </div>
  );
}