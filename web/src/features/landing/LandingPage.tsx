import { Header } from './Header';
import { Hero } from './Hero';
import { Services } from './Services';
import { Strategy } from './Strategy';
import { Aesthetics } from './Aesthetics';
import { Technology } from './Technology';
import { SocialProof } from './SocialProof';
import { Footer } from './Footer';
import { WhatsAppButton } from '../../components/ui/WhatsAppButton';

const LandingPage = () => {
    return (
        <div className="relative w-full overflow-hidden">
            <Header />
            <main>
                <Hero />
                <Services />
                <Strategy />
                <Aesthetics />
                <Technology />
                <SocialProof />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default LandingPage;
