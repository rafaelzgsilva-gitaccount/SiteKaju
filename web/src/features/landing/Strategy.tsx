import { Section } from '../../components/ui/Section';
import { Button } from '../../components/ui/Button';
import { motion } from 'framer-motion';
import { TrendingUp, Users, ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '../../components/ui/WhatsAppButton';

export const Strategy = () => {
    return (
        <section className="bg-foreground text-white py-20 md:py-32 relative overflow-hidden" id="estrategia">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />

            <Section className="py-0 relative z-10">
                {/* Header + Photo row */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-end mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-label block mb-4">estratégia</span>
                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                            Estratégia e Escala<span className="text-primary">.</span>
                        </h2>
                        <p className="text-lg text-white/50 max-w-xl font-sans">
                            Não entregamos teoria. Entregamos estratégia testada e validada ao longo de 10 anos.
                        </p>
                    </motion.div>

                    {/* Editorial portrait – vertical strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="hidden lg:block"
                    >
                        <div className="relative w-40 h-56 rounded-2xl overflow-hidden border border-white/10">
                            <img
                                src="/fotos/3.webp"
                                alt="Kaju – Estratégia"
                                className="w-full h-full object-cover"
                                loading="lazy"
                                style={{ objectPosition: '50% 15%' }}
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                            {/* Red accent line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Consultoria */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col gap-6 hover:bg-white/10 transition-colors duration-500"
                    >
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                            <Users className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-heading font-bold">Consultoria</h3>
                        <p className="text-white/60 text-base leading-relaxed font-sans">
                            Direção estratégica para quem quer acelerar. Um plano de ação, aplicável e alinhado com o momento do seu negócio.
                        </p>
                        <ul className="space-y-3 mt-2">
                            {['Diagnóstico de gargalos', 'Planejamento estratégico', 'Plano de ação personalizado'].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-white/70 text-sm font-sans">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-auto pt-4">
                            <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-foreground gap-2">
                                quero saber mais!
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </a>
                    </motion.div>

                    {/* Tráfego Pago */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-primary rounded-2xl p-8 md:p-10 flex flex-col gap-6 hover:bg-primary-dark transition-colors duration-500"
                    >
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                            <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-heading font-bold">Tráfego Pago</h3>
                        <ul className="space-y-4 mt-2">
                            {[
                                'O tráfego pago coloca seu conteúdo na frente das pessoas certas.',
                                'Você para de depender só do orgânico e começa a atrair leads todos os dias.',
                                'Crescimento previsível, segmentado e com resultado mensurável.',
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3 text-white/80 text-sm font-sans leading-relaxed">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-1.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-auto pt-4">
                            <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-primary gap-2">
                                quero saber mais!
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </a>
                    </motion.div>
                </div>
            </Section>
        </section>
    );
};
