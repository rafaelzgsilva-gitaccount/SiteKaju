import { Button } from '../../components/ui/Button';
import { motion } from 'framer-motion';
import { WHATSAPP_URL } from '../../components/ui/WhatsAppButton';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 pb-16 md:pb-24">
            {/* Background decorative elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
                {/* Oversized Brand Name - Editorial Style */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-12 md:mb-16"
                >
                    <h1 className="text-display font-heading font-bold text-foreground leading-[0.9] tracking-[-0.04em]">
                        Kaju
                        <span className="text-primary">.</span>
                        <br />
                        <span className="text-primary italic">Assessoria</span>
                    </h1>
                </motion.div>

                {/* Content Area */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-end">
                    {/* Left - Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-6"
                    >
                        <div className="section-label">Estratégia · Branding · Tecnologia</div>
                        <h2 className="text-hero font-heading font-bold text-foreground text-balance">
                            Se você não está no digital,{' '}
                            <span className="text-primary italic">você não existe.</span>
                        </h2>
                    </motion.div>

                    {/* Right - Description + CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-8"
                    >
                        <p className="text-lg md:text-xl text-foreground/60 leading-relaxed font-sans">
                            Há quase uma década transformando seguidores em clientes fiéis.
                            Da estratégia orgânica às automações mais avançadas com Inteligência Artificial.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                                <Button variant="premium" size="xl" className="w-full sm:w-auto gap-2">
                                    Elevar Minha Marca
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            </a>
                            <a href="#servicos">
                                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                                    Conhecer Serviços
                                </Button>
                            </a>
                        </div>

                        {/* Social Proof Badge */}
                        <div className="flex items-center gap-3 pt-2">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-secondary border-2 border-white flex items-center justify-center text-xs font-bold text-primary">
                                        {String.fromCharCode(64 + i)}
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-foreground/50 font-sans">
                                <span className="font-bold text-foreground">+500</span> empresas já transformaram seus resultados
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-16 md:mt-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent origin-left"
                />
            </div>
        </section>
    );
};
