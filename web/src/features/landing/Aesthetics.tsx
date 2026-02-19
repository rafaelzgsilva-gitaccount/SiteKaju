import { Section } from '../../components/ui/Section';
import { motion } from 'framer-motion';
import { Palette, Image, PenTool } from 'lucide-react';

const aestheticServices = [
    {
        icon: Palette,
        number: "07",
        title: "Identidade Visual",
        description: "Marca boa não grita, ela conquista. Desenvolvemos a alma visual do seu negócio. Desde a paleta de cores até a tipografia e o logotipo, criamos um padrão comunicacional forte, marcante e autêntico.",
    },
    {
        icon: PenTool,
        number: "08",
        title: "Design Profissional",
        description: "Porque a rede social é visual, é conexão, é sedução. Criamos artes estáticas, carrosséis e materiais gráficos com acabamento impecável. Cada detalhe visual é pensado para atrair olhares.",
    },
    {
        icon: Image,
        number: "09",
        title: "Captação de Imagens",
        description: "Esqueça fotos amadoras. Nós cuidamos do cenário, iluminação, enquadramento e direção. Um banco de imagens exclusivo que transmite a verdadeira qualidade do seu produto.",
    },
];

export const Aesthetics = () => {
    return (
        <Section className="bg-secondary/50" id="estetica">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
                {/* Left - Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:sticky lg:top-32"
                >
                    <span className="section-label block mb-4">//estética//</span>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-[0.95]">
                        Estética<br />
                        e Imagem<span className="text-primary">.</span>
                    </h2>
                    <p className="text-lg text-foreground/50 font-sans leading-relaxed">
                        Sua audiência reconhecerá sua empresa de longe e se identificará de imediato.
                    </p>

                    {/* Decorative element */}
                    <div className="mt-12 hidden lg:block">
                        <div className="w-24 h-24 rounded-full border-2 border-primary/20 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10" />
                        </div>
                    </div>
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
