"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddEvaluationForm({ studentId }: { studentId: string }) {
  const router = useRouter();
  const [subject, setSubject] = useState("");
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");
  const [weekStart, setWeekStart] = useState(() => new Date().toISOString().slice(0, 10));
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch(`/api/students/${studentId}/evaluations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subject, score, comment, weekStart }),
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "დაფიქსირდა შეცდომა.");
      return;
    }

    setSubject("");
    setComment("");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="bg-slate-50 rounded-2xl p-5 space-y-3">
      <h4 className="font-semibold text-slate-800 text-sm">კვირის შეფასების დამატება</h4>
      {error && <p className="text-xs text-red-600">{error}</p>}
      <div className="grid grid-cols-3 gap-3">
        <input
          required
          placeholder="საგანი"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="col-span-2 rounded-lg border border-slate-200 px-3 py-2 text-sm"
        />
        <input
          required
          type="number"
          min={1}
          max={10}
          value={score}
          onChange={(e) => setScore(e.target.value)}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
        />
      </div>
      <input
        type="date"
        required
        value={weekStart}
        onChange={(e) => setWeekStart(e.target.value)}
        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
      />
      <textarea
        placeholder="კომენტარი (არასავალდებულო)"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        rows={2}
        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
      />
      <button
        disabled={loading}
        className="bg-brand-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-brand-700 transition disabled:opacity-60"
      >
        {loading ? "ემატება..." : "დამატება"}
      </button>
    </form>
  );
}
