const services = [
  {
    title: "მათემატიკის მომზადება",
    desc: "ლოგიკური აზროვნებისა და საბაზისო მათემატიკური უნარების განვითარება, I-VI კლასის პროგრამის მიხედვით.",
  },
  {
    title: "ქართული ენა და კითხვის უნარები",
    desc: "წერა-კითხვის გაუმჯობესება, ტექსტის გააზრება და მეტყველების განვითარება.",
  },
  {
    title: "ლოგიკა და IQ განვითარება",
    desc: "თამაშზე დაფუძნებული სავარჯიშოები კრიტიკული და ანალიტიკური აზროვნებისთვის.",
  },
  {
    title: "დამატებითი მეცადინეობები",
    desc: "ინდივიდუალური მიდგომა მოსწავლის საჭიროებების მიხედვით, მცირე ჯგუფებში.",
  },
  {
    title: "საშინაო დავალებების მხარდაჭერა",
    desc: "დახმარება სასკოლო დავალებების შესრულებაში ცენტრის ფარგლებში.",
  },
  {
    title: "საგამოცდო მომზადება",
    desc: "მომზადება შიდა და გარე შეფასებებისთვის, ტესტირების ფორმატის დაუფლება.",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-extrabold text-slate-900">სერვისები</h1>
      <p className="text-slate-500 mt-3 max-w-2xl">
        IQ აკადემია გთავაზობთ სრულფასოვან პროგრამას I-დან VI კლასამდე მოსწავლეებისთვის.
        ქვემოთ იხილავთ ჩვენს ძირითად მიმართულებებს.
      </p>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-bold text-lg text-slate-900">{s.title}</h3>
            <p className="text-slate-500 mt-2 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl bg-brand-50 p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900">დაინტერესდით?</h2>
        <p className="text-slate-600 mt-2">დაგვიკავშირდით და შევარჩევთ თქვენი შვილისთვის საუკეთესო პროგრამას.</p>
        <a
          href="/contact"
          className="inline-block mt-6 bg-brand-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-brand-700 transition"
        >
          კონტაქტი
        </a>
      </div>
    </div>
  );
}
