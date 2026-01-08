import { motion } from 'framer-motion';

const skills = [
    {
        category: "Technologies",
        items: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Redux"]
    },
    {
        category: "Backend",
        items: ["Python", "Node.js", "Express", "FastAPI", "GraphQL", "Microservices", "API Design"]
    },
    {
        category: "Database & Storage",
        items: ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "Redis", "Prisma", "Query Optimization"]
    },
    {
        category: "Cloud & DevOps",
        items: ["AWS (EC2, S3, RDS)", "Docker", "Kubernetes", "CI/CD", "Git/GitHub", "Serverless"]
    }
];

export const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 bg-surface">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Technical Proficiency</h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        Give me a problem, a tech stack, and a deadline - I'll deliver.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-8 rounded-3xl card-shadow border border-slate-100"
                        >
                            <h3 className="text-xl font-bold mb-6 text-primary">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map(item => (
                                    <span key={item} className="px-3 py-1 bg-slate-50 text-slate-700 font-medium rounded-full text-xs hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-default border border-slate-100">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
