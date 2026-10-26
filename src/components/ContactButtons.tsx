const WHATSAPP_URL = "https://wa.me/995599576533";
const MESSENGER_URL = "https://m.me/61592172562154";

function ChatIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.2A8.4 8.4 0 1 1 21 11.5Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export default function ContactButtons() {
  const base =
    "group flex items-center gap-2.5 rounded-full text-white font-semibold text-sm shadow-lg shadow-black/20 transition-transform hover:scale-105 h-12 pl-3.5 pr-3.5 sm:pr-5";

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-50 flex flex-col gap-3 items-end">
      <a
        href={MESSENGER_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="დაგვიწერეთ Messenger-ზე"
        className={`${base} bg-[#0A7CFF]`}
      >
        <ChatIcon />
        <span className="hidden sm:inline">Messenger</span>
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="დაგვიწერეთ WhatsApp-ზე"
        className={`${base} bg-[#25D366]`}
      >
        <PhoneIcon />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
