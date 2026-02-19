import { useState, useEffect } from 'react';
import { Button } from '../../components/ui/Button';
import { cn } from '../../lib/utils';
import { Menu, X } from 'lucide-react';
import { WHATSAPP_URL } from '../../components/ui/WhatsAppButton';

const navLinks = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Estratégia', href: '#estrategia' },
    { label: 'Estética', href: '#estetica' },
    { label: 'Tecnologia', href: '#tecnologia' },
];

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled
                    ? "bg-white/90 backdrop-blur-xl shadow-sm py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="font-heading font-bold text-2xl md:text-3xl tracking-tight text-foreground">
                    KAJU<span className="text-primary">.</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-sans font-medium text-foreground/70 hover:text-primary transition-colors duration-300 tracking-wide uppercase"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                        <Button variant="premium" size="default">
                            Falar com Especialista
                        </Button>
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Menu"
                >
                    {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-black/5 px-6 py-6 space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block pt-2">
                        <Button variant="premium" size="lg" className="w-full">
                            Falar com Especialista
                        </Button>
                    </a>
                </div>
            )}
        </header>
    );
};
