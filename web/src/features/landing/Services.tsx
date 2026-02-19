import { Section } from '../../components/ui/Section';
import { motion } from 'framer-motion';
import { Instagram, PenTool, Calendar, Search } from 'lucide-react';

const services = [
    {
        icon: Instagram,
        number: "01",
        title: "Gestão de Redes Sociais",
        subtitle: "PREMIUM",
        description: "Não somos apenas gestores de um feed bonitinho, somos estrategistas. Construímos uma vitrine virtual que transmite clareza, autoridade e confiança.",
        color: "bg-primary",
        textColor: "text-white",
    },
    {
        icon: PenTool,
        number: "02",
        title: "Curadoria de Conteúdo",
        subtitle: "& STORYTELLING",
        description: "Vamos contar a história da sua empresa de um jeito que ninguém mais conta. Narrativas envolventes que agregam valor real à sua marca.",
        color: "bg-foreground",
        textColor: "text-white",
    },
    {
        icon: Calendar,
        number: "03",
        title: "Calendário Editorial",
        subtitle: "ESTRATÉGICO",
        description: "Organizamos sua comunicação, distribuindo temas de forma inteligente dentro de um cronograma mensal desenhado para o seu objetivo.",
        color: "bg-primary/90",
        textColor: "text-white",
    },
    {
        icon: Search,
        number: "04",
        title: "Análise de Perfil",
        subtitle: "& OTIMIZAÇÃO",
        description: "Antes de construir o teto, arrumamos a casa. Diagnóstico completo da sua presença online para garantir que o cliente certo decida ficar.",
        color: "bg-foreground/90",
        textColor: "text-white",
    },
];

export const Services = () => {
    return (
        <Section className="bg-background" id="servicos">
            <div className="mb-16 md:mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label block mb-4">//serviços//</span>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
                        O Alicerce<span className="text-primary">.</span>
                    </h2>
                    <p className="text-lg text-foreground/50 max-w-xl font-sans">
                        A base sólida que sua marca precisa para crescer de forma sustentável no digital.
                    </p>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className={`${service.color} ${service.textColor} rounded-2xl p-8 md:p-10 h-full flex flex-col justify-between min-h-[280px] group cursor-default transition-transform duration-500 hover:-translate-y-1`}>
                            <div>
                                <div className="flex items-center justify-between mb-8">
                                    <span className="text-sm font-sans font-medium opacity-60 tracking-wider">{service.number}</span>
                                    <service.icon className="w-6 h-6 opacity-60" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-heading font-bold leading-tight mb-1">
                                    {service.title}
                                </h3>
                                <span className="text-xs font-sans font-medium tracking-[0.2em] uppercase opacity-70">
                                    {service.subtitle}
                                </span>
                            </div>
                            <p className="mt-6 text-sm md:text-base leading-relaxed opacity-80 font-sans">
                                {service.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
