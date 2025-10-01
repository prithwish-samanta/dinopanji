import {Code, Github, Heart, Users} from 'lucide-react';

const FeatureCard = ({icon, title, children}) => (
    <div className="bg-card p-6 rounded-xl border border-border shadow-sm transition-transform hover:-translate-y-1">
        <div className="flex items-center gap-4 mb-3">
            <div className="bg-primary/10 p-2 rounded-lg text-primary">{icon}</div>
            <h3 className="text-xl font-bold text-foreground">{title}</h3>
        </div>
        <p className="text-muted-foreground">{children}</p>
    </div>
);

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
            <div className="text-center">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                    Connecting with Our Roots
                </h1>
                <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                    DinoPanji is a modern, digital Bengali calendar crafted with love. It's more than just dates; it's
                    an effort to keep our rich culture and traditions alive and accessible for the new generation.
                </p>

            </div>

            <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                <FeatureCard icon={<Heart size={24}/>} title="Our Mission">
                    To create a beautiful, accurate, and easy-to-use digital Panjika that seamlessly blends Bengali
                    traditions with modern technology, making it accessible to Bengalis all over the world.
                </FeatureCard>
                <FeatureCard icon={<Code size={24}/>} title="Our Technology">
                    This website is built with the latest web technologies like Next.js, React, and Tailwind CSS to
                    ensure a fast, responsive, and delightful user experience on any device.
                </FeatureCard>
            </div>

            <div className="mt-12 sm:mt-16 bg-card border border-border rounded-xl p-8 text-center">
                <Users className="mx-auto text-primary mb-4" size={40}/>
                <h2 className="text-3xl font-bold text-foreground">A Solo Project & An Open Invitation</h2>
                <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                    As of now, I am the solo developer behind this passion project, pouring my heart into building and
                    maintaining it. However, the vision for DinoPanji is much bigger.
                    <br/><br/>
                    If you are a developer, designer, or simply someone passionate about Bengali culture and want to
                    contribute, please feel free to join! This is an open-source initiative, and every contribution, big
                    or small, is deeply valued.
                </p>
                <a
                    href="https://github.com/prithwish-samanta/dinopanji"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg shadow-sm hover:bg-primary/90 transition-colors"
                >
                    <Github size={20}/>
                    Contribute on GitHub
                </a>
            </div>
        </div>
    );
}