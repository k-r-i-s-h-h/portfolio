import { motion } from 'framer-motion';

export const About = () => {
    return (
        <section id="about" className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Left Column: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold mb-6">About Me</h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                        I'm Girishkrishna Kurra, a remote-based <strong>Senior Full Stack Developer</strong> passionate about building robust, scalable web applications.
                    </p>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                        I've built amazing transaction systems handling billions in payments, designed complex ETL pipelines processing financial data at scale, and shipped critical features that made users' lives easier.
                    </p>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        My approach is simple: Give me a problem, a tech stack, and a deadline, and I'll deliver results that matter.
                    </p>

                    <div className="flex gap-12">
                        <div>
                            <h3 className="text-4xl font-bold text-primary mb-2">4+</h3>
                            <p className="text-slate-600 font-medium">Years Experience</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
                            <p className="text-slate-600 font-medium">Projects Completed</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Image with Blobs */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative flex justify-center"
                >
                    {/* Decorative Squares */}
                    <div className="absolute top-0 left-10 w-24 h-24 bg-purple-100 rounded-2xl -z-10 rotate-12" />
                    <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-100 rounded-full -z-10" />

                    {/* Main Image Container */}
                    <div className="relative w-[400px] h-[500px] bg-slate-200 rounded-2xl overflow-hidden shadow-2xl skew-y-0">
                        <img
                            src="/profile.jpg"
                            alt="Girishkrishna Kurra"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute bottom-8 -left-8 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-float">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 font-bold uppercase">Status</p>
                            <p className="font-bold text-slate-800">Open to Work</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
