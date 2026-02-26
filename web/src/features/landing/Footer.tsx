import { Section } from '../../components/ui/Section';
import { Button } from '../../components/ui/Button';
import { AnimateInView } from '../../components/ui/AnimateInView';
import { ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '../../components/ui/WhatsAppButton';

export const Footer = () => {
    return (
        <footer className="bg-foreground text-white">
            {/* CTA Section */}
            <Section className="py-20 md:py-32">
                <AnimateInView direction="up" duration={800} className="text-center space-y-8 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
                        O digital não é mais<br />
                        uma opção<span className="text-primary">.</span><br />
                        <span className="text-primary italic">É o seu próximo passo.</span>
                    </h2>
                    <p className="text-lg text-white/40 font-sans max-w-xl mx-auto">
                        Já comecei a desenhar a sua jornada de sucesso. O melhor ainda está por vir!
                    </p>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                        <Button variant="premium" size="xl" className="text-lg px-12 gap-2 mt-4">
                            Falar com Especialista
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                    </a>
                </AnimateInView>
            </Section>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/30 font-sans">
                    <div>
                        &copy; {new Date().getFullYear()} Kaju Assessoria. Todos os direitos reservados.
                    </div>
                    <div className="flex gap-6">
                        <a href="https://www.instagram.com/kajuassessoriamarketing/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
                            Instagram
                        </a>
                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
