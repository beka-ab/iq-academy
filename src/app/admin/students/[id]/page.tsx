import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import AddActivityForm from "@/components/AddActivityForm";

export const dynamic = "force-dynamic";

function formatDate(d: Date) {
  return new Intl.DateTimeFormat("ka-GE", { day: "2-digit", month: "2-digit", year: "numeric" }).format(d);
}

export default async function StudentDetailPage({ params }: { params: { id: string } }) {
  const student = await prisma.student.findUnique({
    where: { id: params.id },
    include: {
      parents: { include: { parent: true } },
      activities: { orderBy: { date: "desc" }, take: 50 },
    },
  });

  if (!student) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">{student.fullName}</h1>
          <p className="text-slate-500 mt-1">
            {student.grade} კლასი · მოსწავლის კოდი:{" "}
            <span className="font-mono font-semibold">{student.inviteCode}</span>
          </p>
        </div>
        <div className="text-sm text-slate-500 text-right">
          დაკავშირებული მშობლები:{" "}
          {student.parents.length === 0
            ? "არცერთი"
            : student.parents.map((p) => p.parent.name).join(", ")}
        </div>
      </div>

      <div className="mt-10">
        <AddActivityForm studentId={student.id} />

        <div className="mt-8">
          <h3 className="font-semibold text-slate-700 mb-4 text-sm uppercase tracking-wide">
            ისტორია
          </h3>
          {student.activities.length === 0 && (
            <p className="text-sm text-slate-400">ჯერ არ არის ჩანაწერები.</p>
          )}
          <ul className="space-y-4">
            {student.activities.map((a) => (
              <li key={a.id} className="border-l-2 border-brand-200 pl-4 py-1">
                <div className="flex items-baseline justify-between gap-3 flex-wrap">
                  <span className="font-semibold text-slate-800">{a.subject}</span>
                  <span className="text-xs text-slate-400">{formatDate(a.date)}</span>
                </div>
                <p className="text-sm text-slate-500 mt-1">{a.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
