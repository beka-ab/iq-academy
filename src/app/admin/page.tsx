import { prisma } from "@/lib/prisma";
import Link from "next/link";
import AddStudentForm from "@/components/AddStudentForm";
export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const students = await prisma.student.findMany({
    orderBy: { createdAt: "desc" },
    include: { parents: { include: { parent: true } } },
  });

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900">ადმინის პანელი</h1>
      <p className="text-slate-500 mt-2">
        მართეთ მოსწავლეები, დღიური აქტივობები და კვირის შეფასებები.
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <AddStudentForm />
        </div>

        <div className="md:col-span-2">
          <h3 className="font-semibold text-slate-800 mb-4">
            მოსწავლეები ({students.length})
          </h3>
          <div className="space-y-3">
            {students.length === 0 && (
              <p className="text-sm text-slate-400">
                ჯერ არცერთი მოსწავლე არ დამატებულა.
              </p>
            )}
            {students.map((s) => (
              <Link
                key={s.id}
                href={`/admin/students/${s.id}`}
                className="block border border-slate-100 rounded-xl p-4 hover:border-brand-300 hover:bg-brand-50/40 transition"
              >
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <div className="font-semibold text-slate-900">
                      {s.fullName}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {s.grade} კლასი · {s.parents.length} დაკავშირებული მშობელი
                    </div>
                  </div>
                  <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded-md">
                    კოდი: {s.inviteCode}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
