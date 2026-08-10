"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddStudentForm() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [grade, setGrade] = useState("1");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName, grade }),
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "დაფიქსირდა შეცდომა.");
      return;
    }

    setFullName("");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="bg-slate-50 rounded-2xl p-6 space-y-4">
      <h3 className="font-semibold text-slate-800">მოსწავლის დამატება</h3>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <div>
        <label className="text-sm font-medium text-slate-700">სახელი და გვარი</label>
        <input
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-slate-700">კლასი</label>
        <select
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
        >
          {[1, 2, 3, 4, 5, 6].map((g) => (
            <option key={g} value={g}>
              {g} კლასი
            </option>
          ))}
        </select>
      </div>
      <button
        disabled={loading}
        className="w-full bg-brand-600 text-white font-semibold py-2.5 rounded-xl hover:bg-brand-700 transition disabled:opacity-60"
      >
        {loading ? "იტვირთება..." : "დამატება"}
      </button>
    </form>
  );
}
