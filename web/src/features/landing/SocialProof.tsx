import { Section } from '../../components/ui/Section';
import { AnimateInView } from '../../components/ui/AnimateInView';
import { useInView } from '../../hooks/useInView';

const stats = [
    { label: "Visualizações", display: "+1M" },
    { label: "Leads Qualificados", display: "+80K" },
];

const AnimatedCounter = ({ target, label }: { target: string; label: string }) => {
    const [ref, inView] = useInView();

    return (
        <div ref={ref} className="text-center">
            <div
                className={`text-5xl md:text-6xl font-heading font-bold text-foreground mb-2 transition-all duration-700 ${
                    inView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`}
            >
                {target}
            </div>
            <div className="text-sm font-sans font-medium text-foreground/40 uppercase tracking-wider">{label}</div>
        </div>
    );
};

export const SocialProof = () => {
    return (
        <Section className="bg-background" id="prova-social">
            {/* Header with photo accent */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-end mb-16 md:mb-20">
                <AnimateInView direction="up" duration={600}>
                    <span className="section-label block mb-4">resultados</span>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground">
                        Resultados que Falam<span className="text-primary">.</span>
                    </h2>
                </AnimateInView>

                {/* Photo accent */}
                <AnimateInView direction="up" duration={800} delay={200} className="block mx-auto lg:mx-0">
                    <div className="relative w-44 h-56 rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src="/fotos/6.webp"
                            alt="Kaju – Resultados"
                            className="w-full h-full object-cover"
                            loading="lazy"
                            style={{ objectPosition: '50% 15%' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-3 right-3">
                            <div className="bg-primary rounded-lg px-3 py-1.5 text-center">
                                <span className="text-white text-xs font-sans font-bold tracking-wide">+500 clientes</span>
                            </div>
                        </div>
                    </div>
                </AnimateInView>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mb-20 md:mb-28 max-w-2xl mx-auto">
                {stats.map((stat, index) => (
                    <AnimatedCounter key={index} target={stat.display} label={stat.label} />
                ))}
            </div>
        </Section>
    );
};
