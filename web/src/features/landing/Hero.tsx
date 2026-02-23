import { Button } from '../../components/ui/Button';
import { motion } from 'framer-motion';
import { WHATSAPP_URL } from '../../components/ui/WhatsAppButton';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 pb-0">
            {/* Background decorative elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[80vh]">

                    {/* Left - Text Content */}
                    <div className="flex flex-col justify-center py-12 md:py-16 pr-0 lg:pr-16">
                        {/* Oversized Brand Name */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="mb-10 md:mb-12"
                        >
                            <h1 className="text-display font-heading font-bold text-foreground leading-[0.9] tracking-[-0.04em]">
                                Kaju
                                <span className="text-primary">.</span>
                                <br />
                                <span className="text-primary italic">Assessoria</span>
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="space-y-6 mb-10"
                        >
                            <div className="section-label">Estratégia · Branding · Tecnologia</div>
                            <h2 className="text-hero font-heading font-bold text-foreground text-balance">
                                Se você não está no digital,{' '}
                                <span className="text-primary italic">você não existe.</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="space-y-8"
                        >
                            <p className="text-lg md:text-xl text-foreground/60 leading-relaxed font-sans max-w-lg">
                                Há quase uma década transformando seguidores em clientes fiéis — da estratégia orgânica ao tráfego pago inteligente, passando pelas automações mais avançadas com Inteligência Artificial.
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
                            <p className="text-sm text-foreground/50 font-sans leading-relaxed pt-2">
                                Negócios que confiaram no processo transformaram presença digital em faturamento.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right - Editorial Photo */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="relative hidden lg:flex items-end justify-end"
                    >
                        {/* Photo container */}
                        <div className="relative w-full h-full min-h-[600px] max-h-[90vh]">
                            {/* Main photo — box-shadow offset replaces the external border frame */}
                            <div
                                className="relative w-full h-full rounded-2xl overflow-hidden"
                                style={{ boxShadow: '8px 8px 0 0 rgba(196,30,42,0.15), 0 32px 80px rgba(0,0,0,0.12)' }}
                            >
                                <img
                                    src="/fotos/1.webp"
                                    alt="Kaju Assessoria"
                                    className="w-full h-full object-cover object-top"
                                    fetchPriority="high"
                                    style={{ objectPosition: '50% 15%' }}
                                />
                                {/* Gradient overlay - bottom fade */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                                {/* Subtle left vignette */}
                                <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-transparent" />
                            </div>

                            {/* Floating badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.9 }}
                                className="absolute bottom-8 left-6 z-20 bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg border border-black/5"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    <span className="text-sm font-sans font-medium text-foreground/70">
                                        Especialista em Marketing Digital
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent origin-left"
                />
            </div>
        </section>
    );
};
