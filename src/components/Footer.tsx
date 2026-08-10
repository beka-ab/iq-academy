import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink-800 text-ink-200 mt-24">
      <div className="mx-auto max-w-6xl px-4 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-11 h-11 rounded-full bg-paper grid place-items-center p-1.5 shrink-0">
              <Image
                src="/logo-icon.png"
                alt="IQ აკადემია"
                width={32}
                height={32}
                className="object-contain"
              />
            </span>
            <span className="font-display font-semibold text-white text-lg">IQ აკადემია</span>
          </div>
          <p className="text-sm text-ink-300 max-w-xs leading-relaxed">
            მოსამზადებელი ცენტრი 1-დან 6 კლასამდე მოსწავლეებისთვის — ვზრდით ცოდნას, თავდაჯერებულობასა და შედეგებს.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">ნავიგაცია</h4>
          <ul className="space-y-2.5 text-sm text-ink-300">
            <li><a href="/services" className="hover:text-white transition-colors">სერვისები</a></li>
            <li><a href="/about" className="hover:text-white transition-colors">ჩვენ შესახებ</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors">კონტაქტი</a></li>
            <li><a href="/register" className="hover:text-white transition-colors">მშობლის რეგისტრაცია</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">კონტაქტი</h4>
          <ul className="space-y-2.5 text-sm text-ink-300">
            <li>თბილისი, საქართველო</li>
            <li>+995 5xx xx xx xx</li>
            <li>info@iqacademy.ge</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-700 py-5 text-center text-xs text-ink-400">
        © {new Date().getFullYear()} IQ აკადემია. ყველა უფლება დაცულია.
      </div>
    </footer>
  );
}
