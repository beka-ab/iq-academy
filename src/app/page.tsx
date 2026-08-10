import Link from "next/link";

const grades = ["I", "II", "III", "IV", "V", "VI"];

const features = [
  {
    title: "დღიური აქტივობის ჩანაწერები",
    desc: "ნახეთ რა ისწავლა შვილმა დღეს — თითოეული გაკვეთილის შემდეგ.",
  },
  {
    title: "კვირის შეფასებები",
    desc: "ყოველ კვირას მიიღებთ დეტალურ შეფასებას საგნების მიხედვით.",
  },
  {
    title: "პირადი კაბინეტი",
    desc: "მშობლის ანგარიშით შვილის პროგრესს ნებისმიერ დროს ნახავთ.",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-accent-500/15 text-accent-500 text-xs font-bold px-3 py-1 rounded-full mb-5">
              I–VI კლასი
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
              ვაძლევთ ბავშვებს ცოდნას,
              <br /> ვაძლევთ მშობლებს <span className="text-brand-600">გამჭვირვალობას</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-lg">
              IQ აკადემია არის მოსამზადებელი ცენტრი დაწყებითი კლასების მოსწავლეებისთვის.
              მშობლის პორტალით ყოველდღიურად ხედავთ, რას სწავლობს თქვენი შვილი და როგორია მისი კვირის შედეგები.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/register"
                className="bg-brand-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-brand-700 transition"
              >
                მშობლის რეგისტრაცია
              </Link>
              <Link
                href="/services"
                className="border border-slate-300 font-semibold px-6 py-3 rounded-xl hover:bg-slate-50 transition"
              >
                სერვისების ნახვა
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-3 gap-3">
              {grades.map((g) => (
                <div
                  key={g}
                  className="aspect-square rounded-2xl bg-white shadow-sm border border-slate-100 grid place-items-center text-2xl font-extrabold text-brand-600"
                >
                  {g} კლასი
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-extrabold text-center text-slate-900">
          მშობლის პორტალი — ყოველთვის ინფორმირებული
        </h2>
        <p className="text-center text-slate-500 mt-3 max-w-2xl mx-auto">
          რეგისტრაციის შემდეგ, მოსწავლის კოდის დახმარებით, დაუკავშირდით შვილის პროფილს და მიიღეთ წვდომა შემდეგზე:
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center font-bold mb-4">
                ✓
              </div>
              <h3 className="font-bold text-lg text-slate-900">{f.title}</h3>
              <p className="text-slate-500 mt-2 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-600">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h2 className="text-3xl font-extrabold text-white">მზად ხართ დაიწყოთ?</h2>
          <p className="text-brand-100 mt-3">
            დაუკავშირდით ცენტრს ან შექმენით მშობლის ანგარიში დღესვე.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-brand-700 font-semibold px-6 py-3 rounded-xl hover:bg-brand-50 transition"
            >
              დაგვიკავშირდით
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
