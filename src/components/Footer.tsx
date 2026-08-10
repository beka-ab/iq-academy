export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-24">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-extrabold text-white text-lg mb-3">
            <span className="w-9 h-9 rounded-xl bg-brand-600 text-white grid place-items-center">IQ</span>
            IQ აკადემია
          </div>
          <p className="text-sm text-slate-400 max-w-xs">
            მოსამზადებელი ცენტრი 1-დან 6 კლასამდე მოსწავლეებისთვის — ვზრდით ცოდნას, თავდაჯერებულობასა და შედეგებს.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">ნავიგაცია</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a href="/services" className="hover:text-white">სერვისები</a></li>
            <li><a href="/about" className="hover:text-white">ჩვენ შესახებ</a></li>
            <li><a href="/contact" className="hover:text-white">კონტაქტი</a></li>
            <li><a href="/register" className="hover:text-white">მშობლის რეგისტრაცია</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">კონტაქტი</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>თბილისი, საქართველო</li>
            <li>+995 5xx xx xx xx</li>
            <li>info@iqacademy.ge</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} IQ აკადემია. ყველა უფლება დაცულია.
      </div>
    </footer>
  );
}
