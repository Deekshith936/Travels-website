import { MessageCircle } from 'lucide-react';

export function WhatsappFloat() {
  return (
    <a
      href="https://wa.me/919742965513?text=Hi,%20I'm%20interested%20in%20booking%20a%20vehicle%20with%20Nayana%20Tours%20and%20Travels.%20Can%20you%20help%20me?"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110 md:bottom-6 md:right-6 md:h-[60px] md:w-[60px]"
      aria-label="WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
