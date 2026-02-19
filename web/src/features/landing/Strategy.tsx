import { Section } from '../../components/ui/Section';
import { Button } from '../../components/ui/Button';
import { motion } from 'framer-motion';
import { TrendingUp, Users, ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '../../components/ui/WhatsAppButton';

export const Strategy = () => {
    return (
        <section className="bg-foreground text-white py-20 md:py-32" id="estrategia">
            <Section className="py-0">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-20"
                >
                    <span className="section-label block mb-4">//estratégia//</span>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        Estratégia e Escala<span className="text-primary">.</span>
                    </h2>
                    <p className="text-lg text-white/50 max-w-xl font-sans">
                        Não entregamos teoria. Entregamos experiência da vida real, com 10 anos testando no campo de batalha.
                    </p>
                </motion.div>

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
                            Com 10 anos testando, errando e validando estratégias na minha própria empresa, eu encurto o seu caminho para o sucesso. Uma hora de consultoria para alinhar sua visão, identificar gargalos e traçar um plano de ação livre de desperdícios.
                        </p>
                        <ul className="space-y-3 mt-2">
                            {['Diagnóstico de gargalos', 'Planejamento estratégico', 'Plano de ação personalizado', 'Acompanhamento de resultados'].map((item) => (
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
                        <p className="text-white/80 text-base leading-relaxed font-sans">
                            O tráfego pago não faz milagres, ele potencializa o que já funciona. Criamos campanhas com segmentação cirúrgica, colocando a sua mensagem na frente de quem realmente tem interesse e poder de compra.
                        </p>
                        <ul className="space-y-3 mt-2">
                            {['Crescimento previsível', 'Segmentação qualificada', 'Resultados mensuráveis', 'A partir de R$ 3.000/mês'].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-white/80 text-sm font-sans">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
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
