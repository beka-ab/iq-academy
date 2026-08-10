"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

export default function Navbar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const role = (session?.user as any)?.role;

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-ink-100">
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo-icon.png"
            alt="IQ აკადემია"
            width={44}
            height={44}
            className="h-11 w-11 object-contain transition-transform group-hover:scale-105"
            priority
          />
          <span className="font-display font-semibold text-ink-800 text-xl tracking-tight">
            IQ აკადემია
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-500">
          <Link href="/services" className="hover:text-ink-800 transition-colors">სერვისები</Link>
          <Link href="/about" className="hover:text-ink-800 transition-colors">ჩვენ შესახებ</Link>
          <Link href="/contact" className="hover:text-ink-800 transition-colors">კონტაქტი</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {!session && (
            <>
              <Link href="/login" className="text-sm font-medium text-ink-500 hover:text-ink-800 transition-colors">
                შესვლა
              </Link>
              <Link
                href="/register"
                className="text-sm font-semibold text-white px-5 py-2.5 rounded-lg bg-ink-800 hover:bg-ink-700 transition-colors"
              >
                მშობლის რეგისტრაცია
              </Link>
            </>
          )}
          {session && (
            <>
              <Link
                href={role === "ADMIN" ? "/admin" : "/dashboard"}
                className="text-sm font-medium text-ink-500 hover:text-ink-800 transition-colors"
              >
                {role === "ADMIN" ? "ადმინის პანელი" : "ჩემი კაბინეტი"}
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="text-sm font-semibold border border-ink-200 text-ink-700 px-5 py-2.5 rounded-lg hover:bg-ink-50 transition-colors"
              >
                გასვლა
              </button>
            </>
          )}
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="მენიუ">
          <span className="block w-6 h-0.5 bg-ink-800 mb-1.5" />
          <span className="block w-6 h-0.5 bg-ink-800 mb-1.5" />
          <span className="block w-6 h-0.5 bg-ink-800" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink-100 px-4 py-4 flex flex-col gap-3 text-sm font-medium text-ink-600">
          <Link href="/services" onClick={() => setOpen(false)}>სერვისები</Link>
          <Link href="/about" onClick={() => setOpen(false)}>ჩვენ შესახებ</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>კონტაქტი</Link>
          {!session ? (
            <>
              <Link href="/login" onClick={() => setOpen(false)}>შესვლა</Link>
              <Link href="/register" onClick={() => setOpen(false)}>მშობლის რეგისტრაცია</Link>
            </>
          ) : (
            <>
              <Link href={role === "ADMIN" ? "/admin" : "/dashboard"} onClick={() => setOpen(false)}>
                {role === "ADMIN" ? "ადმინის პანელი" : "ჩემი კაბინეტი"}
              </Link>
              <button className="text-left" onClick={() => signOut({ callbackUrl: "/" })}>
                გასვლა
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
}
