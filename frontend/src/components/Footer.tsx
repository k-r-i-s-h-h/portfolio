import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Col */}
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="text-2xl font-bold font-heading mb-6 block">
                            Krish<span className="text-primary">.dev</span>
                        </a>
                        <p className="text-slate-400 leading-relaxed max-w-sm">
                            Full Stack Developer passionate about building robust, scalable web applications. Open for freelance and remote opportunities.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Home</a></li>
                            <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a></li>
                            <li><a href="#projects" className="text-slate-400 hover:text-white transition-colors">Projects</a></li>
                            <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Connect</h4>
                        <div className="flex gap-4">
                            <a href="https://github.com/k-r-i-s-h-h" target="_blank" className="bg-slate-800 p-3 rounded-lg hover:bg-primary transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/girishhk" target="_blank" className="bg-slate-800 p-3 rounded-lg hover:bg-primary transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:girishkrishhh@gmail.com" className="bg-slate-800 p-3 rounded-lg hover:bg-primary transition-colors">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Girishkrishna Kurra. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
