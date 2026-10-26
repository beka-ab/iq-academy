import Link from "next/link";

const features = [
  {
    label: "აქტივობა",
    title: "აქტივობის ჩანაწერები",
    desc: "ნახეთ რა ისწავლა შვილმა — თითოეული გაკვეთილის შემდეგ, ადმინის მიერ დამატებული.",
  },
  {
    label: "ისტორია",
    title: "სრული ისტორია",
    desc: "ყველა წინა ჩანაწერი ერთ ადგილას — თარიღების მიხედვით დალაგებული.",
  },
  {
    label: "ანგარიში",
    title: "პირადი კაბინეტი",
    desc: "მშობლის ანგარიშით ხედავთ მხოლოდ თქვენი შვილის აქტივობას — არავის სხვისას.",
  },
];

const activityRows = [
  {
    subject: "მათემატიკა",
    date: "8 აგვისტო",
    note: "ტოლობები, ლოგიკური ამოცანები",
  },
  {
    subject: "ქართული ენა",
    date: "6 აგვისტო",
    note: "კითხვის გააზრება, თხზულება",
  },
  { subject: "ლოგიკა", date: "4 აგვისტო", note: "თანმიმდევრობის ამოცანები" },
];

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden paper-texture">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-8">
              <span className="inline-block font-display text-xl sm:text-2xl md:text-3xl font-semibold text-white bg-ink-800 px-6 py-3 rounded-xl">
                მოსამზადებელი ცენტრი 1-6 კლასი
              </span>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span className="text-lg sm:text-xl md:text-2xl font-semibold text-ink-800 bg-white border-2 border-ink-800 px-5 py-2.5 rounded-xl">
                  ტრანსპორტირება
                </span>
                <span className="text-2xl md:text-3xl font-bold text-flame-orange">
                  +
                </span>
                <span className="text-lg sm:text-xl md:text-2xl font-semibold text-ink-800 bg-white border-2 border-ink-800 px-5 py-2.5 rounded-xl">
                  კვება
                </span>
              </div>
            </div>
            <h1 className="font-display text-4xl md:text-[3.25rem] leading-[1.12] font-semibold text-ink-800">
              ხედავთ ზუსტად,
              <br />
              რას სწავლობს{" "}
              <span className="relative inline-block">
                თქვენი შვილი
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0,5 Q50,0 100,5 T200,5"
                    stroke="url(#flameLine)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="flameLine" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#6B3FA0" />
                      <stop offset="100%" stopColor="#F0812E" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            <p className="mt-7 text-lg text-ink-500 max-w-lg leading-relaxed">
              IQ აკადემია არის მოსამზადებელი ცენტრი დაწყებითი კლასების
              მოსწავლეებისთვის. მშობლის პორტალით ყოველდღიურად ხედავთ პროგრესს —
              ისე ცხადად, როგორც ამ ბარათზე.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/register"
                className="bg-ink-800 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-ink-700 transition-colors"
              >
                მშობლის რეგისტრაცია
              </Link>
              <Link
                href="/services"
                className="border border-ink-300 text-ink-700 font-semibold px-7 py-3.5 rounded-lg hover:bg-ink-50 transition-colors"
              >
                სერვისების ნახვა
              </Link>
            </div>
          </div>

          {/* Signature visual: a sample weekly report card, echoing the shield's angular corners */}
          <div className="relative">
            <div
              className="absolute -inset-4 bg-flame-gradient opacity-10 blur-2xl rounded-[2rem]"
              aria-hidden="true"
            />
            <div className="relative bg-white rounded-2xl shadow-xl shadow-ink-900/10 border border-ink-100 overflow-hidden">
              {/* corner marks, echoing the shield motif */}
              <span
                className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-ink-300 rounded-tl-sm"
                aria-hidden="true"
              />
              <span
                className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-ink-300 rounded-tr-sm"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-ink-300 rounded-bl-sm"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-ink-300 rounded-br-sm"
                aria-hidden="true"
              />

              <div className="h-1.5 bg-flame-gradient" />
              <span className="absolute top-6 right-6 text-[10px] font-semibold tracking-wide uppercase bg-ink-50 text-ink-400 px-2.5 py-1 rounded-full border border-ink-100">
                ნიმუში
              </span>
              <div className="px-8 pt-8 pb-6 text-center border-b border-ink-100">
                <p className="text-[11px] tracking-widest uppercase text-ink-400 font-semibold">
                  აქტივობის ისტორია
                </p>
                <p className="font-display text-xl text-ink-800 font-semibold mt-2">
                  მარიამ კვარაცხელია
                </p>
                <p className="text-sm text-ink-400 mt-0.5">IV კლასი</p>
              </div>
              <div className="px-8 py-6 space-y-5">
                {activityRows.map((row) => (
                  <div
                    key={row.subject + row.date}
                    className="flex items-start justify-between gap-4"
                  >
                    <div>
                      <p className="text-sm font-semibold text-ink-700">
                        {row.subject}
                      </p>
                      <p className="text-xs text-ink-400 mt-0.5">{row.note}</p>
                    </div>
                    <span className="text-xs text-ink-400 shrink-0 mt-0.5">
                      {row.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="font-display text-3xl font-semibold text-center text-ink-800">
          მშობლის პორტალი — ყოველთვის ინფორმირებული
        </h2>
        <p className="text-center text-ink-500 mt-4 max-w-2xl mx-auto">
          რეგისტრაციის შემდეგ, მოსწავლის კოდის დახმარებით, დაუკავშირდით შვილის
          პროფილს და მიიღეთ წვდომა შემდეგზე:
        </p>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-7 rounded-2xl border border-ink-100 bg-white hover:shadow-lg hover:shadow-ink-900/5 transition-shadow"
            >
              <span className="text-[11px] tracking-widest uppercase text-flame-orange font-bold">
                {f.label}
              </span>
              <h3 className="font-display font-semibold text-lg text-ink-800 mt-3">
                {f.title}
              </h3>
              <p className="text-ink-500 mt-2 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-800">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h2 className="font-display text-3xl font-semibold text-white">
            მზად ხართ დაიწყოთ?
          </h2>
          <p className="text-ink-300 mt-3">
            დაუკავშირდით ცენტრს ან შექმენით მშობლის ანგარიში დღესვე.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-flame-gradient text-white font-semibold px-7 py-3.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              დაგვიკავშირდით
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
