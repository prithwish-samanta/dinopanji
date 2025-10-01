import BrandIcon from "../icons/BrandIcon";
import {Link} from "react-router";
import {navLinks} from "../../navigation/navLinks";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {name: 'Facebook', href: '#'},
        {name: 'Twitter', href: '#'},
        {name: 'Instagram', href: '#'},
    ];

    return (
        <footer className="w-full border-t border-border bg-card">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="flex flex-col gap-4">
                        <Link to="/" className="flex items-center gap-2">
                            <BrandIcon/>
                            <div className="flex flex-col">
                                <span className="font-bold text-lg text-foreground">দিনপঞ্জী</span>
                                <span className="text-xs text-muted-foreground -mt-1">DinoPanji</span>
                            </div>
                        </Link>
                        <p className="text-muted-foreground text-sm">
                            A modern take on the traditional Bengali calendar, designed for the global Bengali
                            community.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {navLinks.map(link => (
                                <li key={link.label}>
                                    <Link to={link.to}
                                          className="text-muted-foreground transition-colors hover:text-primary text-sm">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                        <ul className="space-y-3">
                            {socialLinks.map(link => (
                                <li key={link.name}>
                                    <a href={link.href}
                                       className="text-muted-foreground transition-colors hover:text-primary text-sm">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">শুভ নববর্ষ</h3>
                        <p className="text-muted-foreground text-sm">
                            Wishing everyone a prosperous and joyous Pohela Boishakh and a Happy Bengali New Year!
                        </p>
                    </div>
                </div>
                <div
                    className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between">
                    <p className="text-muted-foreground text-sm">
                        &copy; {currentYear} DinoPanji. All Rights Reserved.
                    </p>
                    <div className="flex gap-4 mt-4 sm:mt-0">
                        <Link to="/" className="text-muted-foreground hover:text-primary text-sm">Privacy Policy</Link>
                        <Link to="/" className="text-muted-foreground hover:text-primary text-sm">Terms of
                            Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}