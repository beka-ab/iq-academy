import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
export const dynamic = "force-dynamic";

function formatDate(d: Date) {
  return new Intl.DateTimeFormat("ka-GE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(d);
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  const userId = (session?.user as any)?.id;

  const links = await prisma.parentStudent.findMany({
    where: { parentId: userId },
    include: {
      student: {
        include: {
          activities: { orderBy: { date: "desc" }, take: 10 },
          evaluations: { orderBy: { weekStart: "desc" }, take: 10 },
        },
      },
    },
  });

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900">ჩემი კაბინეტი</h1>
      <p className="text-slate-500 mt-2">
        მოგესალმებით, {session?.user?.name}. ქვემოთ იხილავთ თქვენი შვილ(ებ)ის
        დღიურ აქტივობასა და კვირის შეფასებებს.
      </p>

      {links.length === 0 && (
        <div className="mt-10 p-6 rounded-2xl bg-slate-50 text-slate-500">
          თქვენ ჯერ არცერთი მოსწავლე არ არის დაკავშირებული თქვენს ანგარიშთან.
          მიმართეთ ცენტრს.
        </div>
      )}

      <div className="mt-10 space-y-12">
        {links.map(({ student }) => (
          <section
            key={student.id}
            className="border border-slate-100 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-xl font-bold text-slate-900">
                {student.fullName}
              </h2>
              <span className="text-xs font-semibold bg-brand-50 text-brand-700 px-3 py-1 rounded-full">
                {student.grade} კლასი
              </span>
            </div>

            <div className="mt-6 grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-slate-700 mb-3">
                  დღიური აქტივობა
                </h3>
                {student.activities.length === 0 && (
                  <p className="text-sm text-slate-400">
                    ჯერ არ არის ჩანაწერები.
                  </p>
                )}
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

              <div>
                <h3 className="font-semibold text-slate-700 mb-3">
                  კვირის შეფასებები
                </h3>
                {student.evaluations.length === 0 && (
                  <p className="text-sm text-slate-400">
                    ჯერ არ არის შეფასებები.
                  </p>
                )}
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
                      <span className="font-bold text-brand-600">
                        {ev.score}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
