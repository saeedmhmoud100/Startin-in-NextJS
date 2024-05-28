"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";


const nabLinks = [
    { href: '/login', name: 'Login' },
    { href: '/register', name: 'Register' },
    { href: '/forgot-password', name: 'Forgot Password' },
];

export default function Layout({ children }) {
    const pathname = usePathname();
    const [user, setUser] = useState("");
  return (
    <div>
            {nabLinks.map((link, index) => (
                <Link key={index} href={link.href}>
                    <p>{link.name}</p>
                </Link>
            ))}
        <label>User from layout:</label>
        <input onChange={e => setUser(e.target.value)} value={user}/>
      {children}
    </div>
  );
}