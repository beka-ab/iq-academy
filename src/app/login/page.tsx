"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await signIn("credentials", {
      identifier,
      password,
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      setError("ელ.ფოსტა/ტელეფონი ან პაროლი არასწორია.");
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-md px-4 py-20">
      <h1 className="text-3xl font-extrabold text-slate-900 text-center">შესვლა</h1>
      <p className="text-center text-slate-500 mt-2 text-sm">
        შედით მშობლის ან ადმინის ანგარიშით
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4 bg-slate-50 p-6 rounded-2xl">
        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
            {error}
          </p>
        )}
        <div>
          <label className="text-sm font-medium text-slate-700">ემაილი ან ტელეფონი</label>
          <input
            required
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700">პაროლი</label>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brand-600 text-white font-semibold py-3 rounded-xl hover:bg-brand-700 transition disabled:opacity-60"
        >
          {loading ? "იტვირთება..." : "შესვლა"}
        </button>
        <p className="text-center text-sm text-slate-500">
          არ გაქვთ ანგარიში?{" "}
          <Link href="/register" className="text-brand-600 font-medium">
            დარეგისტრირდით
          </Link>
        </p>
      </form>
    </div>
  );
}
