import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '5517981928343';
const WHATSAPP_MESSAGE = 'Olá! Vim pelo site da Kaju e gostaria de saber mais sobre os serviços.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const WhatsAppButton = () => {
    return (
        <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale conosco pelo WhatsApp"
            className="fixed bottom-6 right-6 z-50 group"
        >
            <div className="relative">
                {/* Pulse ring */}
                <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />

                {/* Button */}
                <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 group-hover:-translate-y-1">
                    <MessageCircle className="w-6 h-6 text-white fill-white" />
                </div>

                {/* Tooltip */}
                <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    Fale conosco!
                    <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-foreground" />
                </div>
            </div>
        </a>
    );
};

export { WHATSAPP_URL };
