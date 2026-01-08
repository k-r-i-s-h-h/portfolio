import { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactForm = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-lg mx-auto"
        >
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Name</label>
                    <input
                        type="text"
                        required
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-slate-900 placeholder:text-slate-400"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email</label>
                    <input
                        type="email"
                        required
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-slate-900 placeholder:text-slate-400"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Message</label>
                    <textarea
                        required
                        rows={5}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-slate-900 placeholder:text-slate-400 resize-none"
                        placeholder="How can I help you?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 shadow-lg shadow-blue-500/20"
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
        </motion.div>
    );
};
