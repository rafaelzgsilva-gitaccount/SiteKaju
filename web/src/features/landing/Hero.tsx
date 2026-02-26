import { Button } from '../../components/ui/Button';
import { WHATSAPP_URL } from '../../components/ui/WhatsAppButton';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 pb-0">
            {/* Background decorative elements */}
            <div className="absolute inset-0 -z-10">
                <div className="hidden md:block absolute top-20 right-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl" />
                <div className="hidden md:block absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch lg:min-h-[80vh]">

                    {/* Left - Text Content */}
                    <div className="flex flex-col justify-center py-10 md:py-16 pr-0 lg:pr-16">
                        {/* Oversized Brand Name */}
                        <div
                            className="mb-8 md:mb-12 hero-fade-up"
                            style={{ animationDelay: '0s' }}
                        >
                            <h1 className="text-display font-heading font-bold text-foreground leading-[0.9] tracking-[-0.04em]">
                                Kaju
                                <span className="text-primary">.</span>
                                <br />
                                <span className="text-primary italic">Assessoria</span>
                            </h1>
                        </div>

                        <div
                            className="space-y-5 mb-8 hero-fade-up"
                            style={{ animationDelay: '0.2s' }}
                        >
                            <div className="section-label">Estratégia · Branding · Tecnologia</div>
                            <h2 className="text-hero font-heading font-bold text-foreground text-balance">
                                Se você não está no digital,{' '}
                                <span className="text-primary italic">você não existe</span>
                            </h2>
                        </div>

                        <div
                            className="space-y-6 hero-fade-up"
                            style={{ animationDelay: '0.4s' }}
                        >
                            <p className="text-lg md:text-xl text-foreground/60 leading-relaxed font-sans max-w-lg">
                                Há quase uma década transformando seguidores em clientes fiéis — da estratégia orgânica ao tráfego pago inteligente, passando pelas automações mais avançadas com Inteligência Artificial.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                                    <Button variant="premium" size="xl" className="w-full sm:w-auto gap-2">
                                        Elevar Minha Marca
                                        <ArrowRight className="w-5 h-5" />
                                    </Button>
                                </a>
                                <a href="#servicos">
                                    <Button variant="outline" size="xl" className="w-full sm:w-auto">
                                        Conhecer Serviços
                                    </Button>
                                </a>
                            </div>

                            <p className="text-sm text-foreground/50 font-sans leading-relaxed pt-2">
                                Negócios que confiaram no processo transformaram presença digital em faturamento.
                            </p>
                        </div>
                    </div>

                    {/* Editorial Photo — stacks below text on mobile, side-by-side on desktop */}
                    <div
                        className="relative flex items-end justify-end mt-8 pb-10 lg:mt-0 lg:pb-0 hero-fade-up"
                        style={{ animationDelay: '0.3s' }}
                    >
                        <div className="relative w-full h-72 sm:h-96 lg:h-full lg:min-h-[600px] lg:max-h-[90vh]">
                            <div
                                className="relative w-full h-full rounded-2xl overflow-hidden"
                                style={{ boxShadow: '8px 8px 0 0 rgba(196,30,42,0.15), 0 32px 80px rgba(0,0,0,0.12)' }}
                            >
                                <img
                                    src="/fotos/1.webp"
                                    alt="Kaju Assessoria"
                                    className="w-full h-full object-cover"
                                    fetchPriority="high"
                                    style={{ objectPosition: '50% 15%' }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                                <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-transparent" />
                            </div>

                            {/* Floating badge */}
                            <div
                                className="absolute bottom-4 left-4 z-20 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-lg border border-black/5 hero-fade-up"
                                style={{ animationDelay: '0.9s' }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    <span className="text-sm font-sans font-medium text-foreground/70">
                                        Especialista em Marketing Digital
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative line */}
                <div
                    className="mt-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hero-scale-x"
                    style={{ animationDelay: '0.8s' }}
                />
            </div>
        </section>
    );
};
