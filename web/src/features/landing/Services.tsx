import { Section } from '../../components/ui/Section';
import { AnimateInView } from '../../components/ui/AnimateInView';
import { Instagram, PenTool, Calendar, Search } from 'lucide-react';

const services = [
    {
        icon: Instagram,
        number: "01",
        title: "Gestão de Redes Sociais",
        subtitle: "PREMIUM",
        description: "Presença digital com direção, estratégia e constância. Seu perfil passa a ter posicionamento claro, conteúdo intencional e acompanhamento contínuo para atrair, conectar e vender.",
        color: "bg-primary",
        textColor: "text-white",
    },
    {
        icon: PenTool,
        number: "02",
        title: "Curadoria de Conteúdo",
        subtitle: "& STORYTELLING",
        description: "Conteúdo com lógica. Defino os pilares, as linhas editoriais e os temas certos para que tudo o que você poste tenha propósito e coerência.",
        color: "bg-foreground",
        textColor: "text-white",
    },
    {
        icon: Calendar,
        number: "03",
        title: "Calendário de Conteúdo",
        subtitle: "ESTRATÉGICO",
        description: "Organização que gera consistência e crescimento. Um planejamento mensal estratégico para que você saiba exatamente o que comunicar, com clareza e foco em performance.",
        color: "bg-primary/90",
        textColor: "text-white",
    },
    {
        icon: Search,
        number: "04",
        title: "Análise de Perfil",
        subtitle: "& OTIMIZAÇÃO",
        description: "Um raio-X completo do seu Instagram. Identifico ajustes, oportunidades e pontos de melhoria para transformar seu perfil em um ambiente preparado para vender.",
        color: "bg-foreground/90",
        textColor: "text-white",
    },
];

export const Services = () => {
    return (
        <Section className="bg-background" id="servicos">
            {/* Header row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-16 md:mb-20">
                <AnimateInView direction="up" duration={600}>
                    <span className="section-label block mb-4">serviços</span>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
                        O Alicerce<span className="text-primary">.</span>
                    </h2>
                    <p className="text-lg text-foreground/50 max-w-xl font-sans">
                        A base sólida que sua marca precisa para crescer de forma sustentável no digital.
                    </p>
                </AnimateInView>

                {/* Editorial photo pill */}
                <AnimateInView direction="right" duration={800} className="relative flex justify-end items-end">
                    <div className="relative w-56 h-72 md:w-64 md:h-80 rounded-[2rem] overflow-hidden shadow-2xl">
                        <img
                            src="/fotos/2.webp"
                            alt="Kaju – Curadoria de Conteúdo"
                            className="w-full h-full object-cover"
                            loading="lazy"
                            style={{ objectPosition: '50% 10%' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                            <span className="text-xs font-sans font-medium text-white/80 tracking-widest uppercase">
                                Conteúdo com intenção
                            </span>
                        </div>
                    </div>
                    {/* Decorative dot grid */}
                    <div
                        className="absolute -bottom-4 -left-4 w-20 h-20 opacity-20"
                        style={{
                            backgroundImage: 'radial-gradient(circle, var(--color-primary) 1px, transparent 1px)',
                            backgroundSize: '8px 8px',
                        }}
                    />
                </AnimateInView>
            </div>

            {/* Service cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {services.map((service, index) => (
                    <AnimateInView key={index} direction="up" duration={500} delay={index * 100}>
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
                    </AnimateInView>
                ))}
            </div>
        </Section>
    );
};
