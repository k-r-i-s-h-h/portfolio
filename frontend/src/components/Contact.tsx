import { useState } from 'react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

export const Contact = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('http://localhost:8000/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 px-6 bg-surface">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm bg-blue-50 px-3 py-1 rounded-full">Contact</span>
                    <h2 className="text-4xl font-bold mt-4 mb-4">Get In Touch</h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Have a project in mind or want to discuss opportunities? I'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left: Form (Takes up 2 cols) */}
                    <div className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100">
                        <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Subject</label>
                                <input
                                    type="text"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                                    placeholder="What's this about?"
                                    value={formData.subject}
                                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Message</label>
                                <textarea
                                    rows={5}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                    value={formData.message}
                                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
                            >
                                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                            </button>
                            {status === 'success' && (
                                <p className="text-green-600 font-medium text-center animate-pulse">Message sent successfully!</p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-500 font-medium text-center">Something went wrong. Please try again.</p>
                            )}
                        </form>
                    </div>

                    {/* Right: Info Cards */}
                    <div className="space-y-6">
                        {/* Email Card */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
                            <div className="bg-blue-50 p-3 rounded-xl text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                                <a href="mailto:girishkrishhh@gmail.com" className="text-slate-600 hover:text-primary transition-colors text-sm break-all">
                                    girishkrishhh@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
                            <div className="bg-blue-50 p-3 rounded-xl text-primary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-1">Location</h4>
                                <p className="text-slate-600 text-sm">Memphis, Tennessee</p>
                            </div>
                        </div>

                        {/* Socials Card */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-4">Follow Me</h4>
                            <div className="flex gap-4">
                                <a href="https://github.com/k-r-i-s-h-h" target="_blank" className="bg-slate-50 p-3 rounded-xl text-slate-600 hover:bg-primary hover:text-white transition-all">
                                    <Github size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/girishhk" target="_blank" className="bg-slate-50 p-3 rounded-xl text-slate-600 hover:bg-primary hover:text-white transition-all">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
