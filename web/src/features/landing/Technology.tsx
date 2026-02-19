import { Section } from '../../components/ui/Section';
import { motion } from 'framer-motion';
import { Layout, ShoppingBag, MessageSquare, Bot } from 'lucide-react';

const techServices = [
    {
        icon: Layout,
        title: "Landing Page",
        description: "Landing Pages de alta conversão. Um ambiente desenhado com um único objetivo: transformar cliques em leads qualificados.",
    },
    {
        icon: ShoppingBag,
        title: "Site E-commerce",
        description: "Lojas virtuais premium, otimizadas para a melhor experiência e estruturadas para maximizar faturamento 24/7.",
    },
    {
        icon: MessageSquare,
        title: "Chatbot",
        description: "Fluxos inteligentes para WhatsApp e Instagram. Qualificamos leads e agendamos reuniões automaticamente.",
    },
    {
        icon: Bot,
        title: "Agente IA",
        description: "Agentes de IA customizados que entendem o contexto, negociam e fecham vendas de forma humanizada.",
    },
];

export const Technology = () => {
    return (
        <section className="bg-foreground text-white py-20 md:py-32 relative overflow-hidden" id="tecnologia">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

            <Section className="py-0 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-20 text-center"
                >
                    <span className="section-label block mb-4">//inovação//</span>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        Tecnologia e IA<span className="text-primary">.</span>
                    </h2>
                    <p className="text-lg text-white/40 max-w-2xl mx-auto font-sans">
                        Soluções avançadas para automatizar, escalar e dominar o digital.
                    </p>
                </motion.div>

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
