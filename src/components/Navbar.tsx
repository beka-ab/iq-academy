"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

export default function Navbar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const role = (session?.user as any)?.role;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-extrabold text-brand-700 text-lg">
          <span className="w-9 h-9 rounded-xl bg-brand-600 text-white grid place-items-center">IQ</span>
          IQ აკადემია
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <Link href="/services" className="hover:text-brand-700">სერვისები</Link>
          <Link href="/about" className="hover:text-brand-700">ჩვენ შესახებ</Link>
          <Link href="/contact" className="hover:text-brand-700">კონტაქტი</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {!session && (
            <>
              <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-brand-700">
                შესვლა
              </Link>
              <Link
                href="/register"
                className="text-sm font-semibold bg-brand-600 text-white px-4 py-2 rounded-lg hover:bg-brand-700 transition"
              >
                მშობლის რეგისტრაცია
              </Link>
            </>
          )}
          {session && (
            <>
              <Link
                href={role === "ADMIN" ? "/admin" : "/dashboard"}
                className="text-sm font-medium text-slate-600 hover:text-brand-700"
              >
                {role === "ADMIN" ? "ადმინის პანელი" : "ჩემი კაბინეტი"}
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="text-sm font-semibold border border-slate-200 px-4 py-2 rounded-lg hover:bg-slate-50 transition"
              >
                გასვლა
              </button>
            </>
          )}
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="მენიუ">
          <span className="block w-6 h-0.5 bg-slate-800 mb-1.5" />
          <span className="block w-6 h-0.5 bg-slate-800 mb-1.5" />
          <span className="block w-6 h-0.5 bg-slate-800" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-100 px-4 py-4 flex flex-col gap-3 text-sm font-medium text-slate-600">
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
