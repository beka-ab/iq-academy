export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-extrabold text-slate-900">ჩვენ შესახებ</h1>
      <p className="mt-6 text-slate-600 leading-relaxed">
        IQ აკადემია არის მოსამზადებელი ცენტრი, რომელიც სპეციალიზირებულია I-დან VI კლასამდე
        მოსწავლეების განვითარებაზე. ჩვენი მიზანია, თითოეულ ბავშვს მივცეთ საფუძველი
        წარმატებული სასკოლო მომავლისთვის — ლოგიკური აზროვნების, კითხვის, წერისა და
        მათემატიკური უნარების გაძლიერების გზით.
      </p>
      <p className="mt-4 text-slate-600 leading-relaxed">
        გვჯერა, რომ მშობლის ჩართულობა მოსწავლის წარმატების ერთ-ერთი მთავარი ფაქტორია. სწორედ
        ამიტომ შევქმენით მშობლის პორტალი, სადაც ნებისმიერ დროს შეგიძლიათ ნახოთ, რას სწავლობს
        თქვენი შვილი და როგორია მისი კვირის შედეგები — გამჭვირვალედ და მარტივად.
      </p>

      <div className="mt-12 grid sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-slate-50 text-center">
          <div className="text-3xl font-extrabold text-brand-600">6</div>
          <div className="text-sm text-slate-500 mt-1">კლასი (I-VI)</div>
        </div>
        <div className="p-6 rounded-2xl bg-slate-50 text-center">
          <div className="text-3xl font-extrabold text-brand-600">100%</div>
          <div className="text-sm text-slate-500 mt-1">გამჭვირვალობა მშობლებისთვის</div>
        </div>
        <div className="p-6 rounded-2xl bg-slate-50 text-center">
          <div className="text-3xl font-extrabold text-brand-600">1:1</div>
          <div className="text-sm text-slate-500 mt-1">ინდივიდუალური მიდგომა</div>
        </div>
      </div>
    </div>
  );
}
