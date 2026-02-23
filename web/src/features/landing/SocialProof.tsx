import { Section } from '../../components/ui/Section';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';

const stats = [
    { label: "Visualizações", value: 1000000, display: "+1M", suffix: "" },
    { label: "Leads Qualificados", value: 80000, display: "+80K", suffix: "" },
];

const testimonials = [
    {
        name: "Ana Silva",
        role: "CEO, E-commerce de Moda",
        content: "A Kaju transformou nossa presença digital. Saímos de vendas esporádicas para um faturamento consistente. A estratégia de tráfego é impecável.",
        rating: 5,
    },
    {
        name: "Dr. Roberto Costa",
        role: "Clínica de Estética",
        content: "Impressionante como eles entenderam a sofisticação que minha marca precisava. A identidade visual e o posicionamento atraíram exatamente o público que eu queria.",
        rating: 5,
    },
    {
        name: "Mariana Oliveira",
        role: "Infoprodutora",
        content: "O lançamento foi um sucesso absoluto. A equipe cuidou de tudo, do copy à automação. Profissionalismo raro de encontrar.",
        rating: 5,
    },
];

const AnimatedCounter = ({ target, label }: { target: string; label: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-2"
            >
                {isInView ? target : "0"}
            </motion.div>
            <div className="text-sm font-sans font-medium text-foreground/40 uppercase tracking-wider">{label}</div>
        </div>
    );
};

export const SocialProof = () => {
    return (
        <Section className="bg-background" id="prova-social">
            {/* Header with photo accent */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-end mb-16 md:mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label block mb-4">resultados</span>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground">
                        Resultados que Falam<span className="text-primary">.</span>
                    </h2>
                </motion.div>

                {/* Photo accent */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="hidden lg:block"
                >
                    <div className="relative w-44 h-56 rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src="/fotos/6.webp"
                            alt="Kaju – Resultados"
                            className="w-full h-full object-cover"
                            loading="lazy"
                            style={{ objectPosition: '50% 15%' }}
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
                        {/* Stat badge */}
                        <div className="absolute bottom-4 left-3 right-3">
                            <div className="bg-primary rounded-lg px-3 py-1.5 text-center">
                                <span className="text-white text-xs font-sans font-bold tracking-wide">+500 clientes</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-20 md:mb-28 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                    <AnimatedCounter key={index} target={stat.display} label={stat.label} />
                ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent mb-16 md:mb-20" />

            {/* Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 border border-black/5 flex flex-col relative group hover:-translate-y-1 transition-all duration-500"
                    >
                        {/* Quote mark */}
                        <span className="text-7xl font-heading text-primary/10 absolute top-4 right-6 leading-none select-none">"</span>

                        {/* Stars */}
                        <div className="flex gap-1 mb-6">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                            ))}
                        </div>

                        <p className="text-foreground/60 leading-relaxed font-sans mb-8 flex-grow">
                            "{testimonial.content}"
                        </p>

                        <div className="border-t border-black/5 pt-6">
                            <div className="font-heading font-bold text-foreground">{testimonial.name}</div>
                            <div className="text-sm text-primary font-sans">{testimonial.role}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
