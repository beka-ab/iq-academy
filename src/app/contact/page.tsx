export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-extrabold text-slate-900">კონტაქტი</h1>
      <p className="text-slate-500 mt-3">
        დაგვიკავშირდით ნებისმიერი შეკითხვისთვის — გიპასუხებთ სწრაფად.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-900">მისამართი</h3>
            <p className="text-slate-500 mt-1">თბილისი, საქართველო</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">ტელეფონი</h3>
            <p className="text-slate-500 mt-1">+995 5xx xx xx xx</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">ემაილი</h3>
            <p className="text-slate-500 mt-1">info@iqacademy.ge</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">სამუშაო საათები</h3>
            <p className="text-slate-500 mt-1">ორშ-პარ: 10:00 - 19:00</p>
          </div>
        </div>

        <form
          className="space-y-4 bg-slate-50 p-6 rounded-2xl"
          action="mailto:info@iqacademy.ge"
          method="POST"
          encType="text/plain"
        >
          <div>
            <label className="text-sm font-medium text-slate-700">სახელი</label>
            <input
              required
              name="სახელი"
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">ტელეფონი ან ემაილი</label>
            <input
              required
              name="კონტაქტი"
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">შეტყობინება</label>
            <textarea
              required
              name="შეტყობინება"
              rows={4}
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-brand-600 text-white font-semibold py-3 rounded-xl hover:bg-brand-700 transition"
          >
            გაგზავნა
          </button>
          <p className="text-xs text-slate-400">
            შენიშვნა: სასურველია მომავალში ეს ფორმა დაუკავშირდეს რეალურ სერვერულ ენდპოინტს
            (მაგ. ემაილის გაგზავნის სერვისს), რომ პირდაპირ ბაზაში ან CRM-ში მოხვდეს.
          </p>
        </form>
      </div>
    </div>
  );
}
