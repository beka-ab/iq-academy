"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    inviteCode: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function update(key: string, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.email && !form.phone) {
      setError("მიუთითეთ ემაილი ან ტელეფონი.");
      return;
    }

    setLoading(true);
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "დაფიქსირდა შეცდომა.");
      setLoading(false);
      return;
    }

    const loginRes = await signIn("credentials", {
      identifier: form.email || form.phone,
      password: form.password,
      redirect: false,
    });

    setLoading(false);

    if (loginRes?.error) {
      router.push("/login");
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <h1 className="text-3xl font-extrabold text-slate-900 text-center">მშობლის რეგისტრაცია</h1>
      <p className="text-center text-slate-500 mt-2 text-sm">
        "მოსწავლის კოდს" მიიღებთ ცენტრისგან, როცა თქვენი შვილი დარეგისტრირდება.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4 bg-slate-50 p-6 rounded-2xl">
        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
            {error}
          </p>
        )}

        <div>
          <label className="text-sm font-medium text-slate-700">სახელი და გვარი</label>
          <input
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm font-medium text-slate-700">ტელეფონი</label>
            <input
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
              placeholder="+995..."
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">ემაილი</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">პაროლი</label>
          <input
            required
            type="password"
            minLength={6}
            value={form.password}
            onChange={(e) => update("password", e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">მოსწავლის კოდი</label>
          <input
            required
            value={form.inviteCode}
            onChange={(e) => update("inviteCode", e.target.value.toUpperCase())}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm uppercase tracking-widest"
            placeholder="მაგ. A1B2C3"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brand-600 text-white font-semibold py-3 rounded-xl hover:bg-brand-700 transition disabled:opacity-60"
        >
          {loading ? "იტვირთება..." : "რეგისტრაცია"}
        </button>
      </form>
    </div>
  );
}
