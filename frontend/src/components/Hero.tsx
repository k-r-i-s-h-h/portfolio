import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
            <div className="max-w-4xl w-full z-10 text-center relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-slate-200 mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium text-muted">Available for Work</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-black mb-8 leading-[1.1]"
                >
                    Hi, I'm <span className="text-gradient">Girish Krishna.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-muted text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Full Stack Developer who turns chaos into code. I build scalable transaction systems, ETL pipelines, and features that make users' lives easier.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col gap-8 justify-center items-center"
                >
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#contact" className="flex items-center gap-2 bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:-translate-y-1 shadow-lg shadow-blue-500/20">
                            Get In Touch <ArrowRight size={20} />
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 px-8 py-4 rounded-full font-bold transition-all hover:bg-slate-50"
                        >
                            View Resume <Download size={20} />
                        </a>
                    </div>

                    <div className="flex gap-6 mt-4">
                        <a href="https://github.com/k-r-i-s-h-h" target="_blank" className="text-slate-400 hover:text-primary transition-colors"><Github size={24} /></a>
                        <a href="https://www.linkedin.com/in/girishhk" target="_blank" className="text-slate-400 hover:text-primary transition-colors"><Linkedin size={24} /></a>
                        <a href="mailto:girishkrishhh@gmail.com" className="text-slate-400 hover:text-primary transition-colors"><Mail size={24} /></a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
