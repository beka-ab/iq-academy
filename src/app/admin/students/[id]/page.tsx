import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import AddActivityForm from "@/components/AddActivityForm";
import AddEvaluationForm from "@/components/AddEvaluationForm";
export const dynamic = "force-dynamic";

function formatDate(d: Date) {
  return new Intl.DateTimeFormat("ka-GE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(d);
}

export default async function StudentDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const student = await prisma.student.findUnique({
    where: { id: params.id },
    include: {
      parents: { include: { parent: true } },
      activities: { orderBy: { date: "desc" }, take: 20 },
      evaluations: { orderBy: { weekStart: "desc" }, take: 20 },
    },
  });

  if (!student) notFound();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">
            {student.fullName}
          </h1>
          <p className="text-slate-500 mt-1">
            {student.grade} კლასი · მოსწავლის კოდი:{" "}
            <span className="font-mono font-semibold">
              {student.inviteCode}
            </span>
          </p>
        </div>
        <div className="text-sm text-slate-500">
          დაკავშირებული მშობლები:{" "}
          {student.parents.length === 0
            ? "არცერთი"
            : student.parents.map((p) => p.parent.name).join(", ")}
        </div>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-8">
        <div>
          <AddActivityForm studentId={student.id} />
          <div className="mt-6">
            <h3 className="font-semibold text-slate-700 mb-3 text-sm">
              ისტორია
            </h3>
            <ul className="space-y-3">
              {student.activities.map((a) => (
                <li
                  key={a.id}
                  className="text-sm border-l-2 border-brand-200 pl-3"
                >
                  <div className="font-medium text-slate-800">
                    {a.subject}{" "}
                    <span className="text-slate-400 font-normal">
                      · {formatDate(a.date)}
                    </span>
                  </div>
                  <p className="text-slate-500">{a.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <AddEvaluationForm studentId={student.id} />
          <div className="mt-6">
            <h3 className="font-semibold text-slate-700 mb-3 text-sm">
              ისტორია
            </h3>
            <ul className="space-y-3">
              {student.evaluations.map((ev) => (
                <li
                  key={ev.id}
                  className="text-sm flex items-center justify-between border-b border-slate-100 pb-2"
                >
                  <div>
                    <div className="font-medium text-slate-800">
                      {ev.subject}
                    </div>
                    <div className="text-slate-400 text-xs">
                      კვირა: {formatDate(ev.weekStart)}
                      {ev.comment ? ` · ${ev.comment}` : ""}
                    </div>
                  </div>
                  <span className="font-bold text-brand-600">{ev.score}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
