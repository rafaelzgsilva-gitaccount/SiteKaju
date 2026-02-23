import { Section } from '../../components/ui/Section';
import { motion } from 'framer-motion';
import { Layout, ShoppingBag, MessageSquare, Bot } from 'lucide-react';

const techServices = [
    {
        icon: Layout,
        title: "Landing Page",
        description: "Uma página pensada para transformar visitas em oportunidades. Estrutura estratégica, layout funcional e comunicação alinhada ao seu objetivo.",
    },
    {
        icon: ShoppingBag,
        title: "Site E-commerce",
        description: "Sua loja aberta 24 horas por dia. Criação de e-commerce com experiência de compra otimizada, organização de produtos e estrutura pronta para escalar vendas.",
    },
    {
        icon: MessageSquare,
        title: "Chatbot",
        description: "Atendimento ágil, automático e estratégico. Mais velocidade nas respostas, melhor experiência para o cliente e mais oportunidades de conversão.",
    },
    {
        icon: Bot,
        title: "Agente IA",
        description: "Automação inteligente para ganhar tempo e produtividade. Processos otimizados, respostas rápidas e suporte ao crescimento do seu negócio.",
    },
];

export const Technology = () => {
    return (
        <section className="bg-foreground text-white py-20 md:py-32 relative overflow-hidden" id="tecnologia">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

            <Section className="py-0 relative z-10">
                {/* Header row: centered title + photo accent */}
                <div className="relative mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <span className="section-label block mb-4">inovação</span>
                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                            Tecnologia e IA<span className="text-primary">.</span>
                        </h2>
                        <p className="text-lg text-white/40 max-w-2xl mx-auto font-sans">
                            Soluções avançadas para automatizar, escalar e dominar o digital.
                        </p>
                    </motion.div>

                    {/* Floating photo – right aligned, overlapping */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2"
                    >
                        <div className="relative w-36 h-48 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="/fotos/5.webp"
                                alt="Kaju – Tecnologia"
                                className="w-full h-full object-cover"
                                loading="lazy"
                                style={{ objectPosition: '50% 15%' }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {techServices.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-7 flex flex-col gap-5 hover:bg-white/10 hover:border-primary/30 transition-all duration-500 group"
                        >
                            <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                <service.icon className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-heading font-bold">{service.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed font-sans">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </section>
    );
};
