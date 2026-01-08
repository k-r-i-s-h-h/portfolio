import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-2xl font-bold font-heading text-slate-900">
                    Krish<span className="text-primary">.dev</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Nav */}
                {mobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-lg md:hidden">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-base font-medium text-slate-600 hover:text-primary transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};
