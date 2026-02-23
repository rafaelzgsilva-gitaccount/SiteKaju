import { Section } from '../../components/ui/Section';
import { motion } from 'framer-motion';
import { Palette, Image, PenTool } from 'lucide-react';

const aestheticServices = [
    {
        icon: Palette,
        number: "07",
        title: "Identidade Visual",
        description: "Uma marca que se posiciona antes mesmo de falar. Construção visual estratégica, alinhada ao seu público e à percepção de valor que você quer transmitir.",
    },
    {
        icon: PenTool,
        number: "08",
        title: "Designer",
        description: "Design que fortalece sua autoridade. Artes pensadas para valorizar seu conteúdo e manter um padrão visual profissional.",
    },
    {
        icon: Image,
        number: "09",
        title: "Captação de Imagens",
        description: "Imagem é posicionamento. Produção de fotos e vídeos estratégicos para elevar o nível da sua comunicação.",
    },
];

export const Aesthetics = () => {
    return (
        <Section className="bg-secondary/50" id="estetica">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
                {/* Left - Header + Photo */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:sticky lg:top-32 space-y-10"
                >
                    <div>
                        <span className="section-label block mb-4">estética</span>
                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-[0.95]">
                            Conexão com seus<br />
                            seguidores<span className="text-primary">.</span>
                        </h2>
                        <p className="text-lg text-foreground/50 font-sans leading-relaxed">
                            Criando uma narrativa envolvente que agrega valor real à sua marca.
                        </p>
                    </div>

                    {/* Editorial photo replacing the decorative circle */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="hidden lg:block"
                    >
                        <div className="relative w-fit">
                            {/* Photo — box-shadow offset simulates the accent frame with zero layout artifacts */}
                            <div
                                className="relative w-full max-w-xs rounded-3xl overflow-hidden aspect-[3/4]"
                                style={{ boxShadow: '8px 8px 0 0 rgba(196,30,42,0.18), 0 24px 64px rgba(0,0,0,0.14)' }}
                            >
                                <img
                                    src="/fotos/4.webp"
                                    alt="Kaju – Estética e Imagem"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    style={{ objectPosition: '50% 10%' }}
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                                {/* Bottom label */}
                                <div className="absolute bottom-5 left-5 right-5">
                                    <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                                        <span className="text-xs font-sans font-semibold text-foreground tracking-wide uppercase">
                                            Imagem é posicionamento
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </motion.div>

                {/* Right - Services list */}
                <div className="space-y-6">
                    {aestheticServices.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 md:p-10 group hover:-translate-y-1 transition-all duration-500 hover:shadow-lg"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-sm font-sans font-medium text-foreground/30 tracking-wider">{service.number}</span>
                                <service.icon className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4">
                                {service.title}
                            </h3>
                            <p className="text-foreground/50 leading-relaxed font-sans">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
