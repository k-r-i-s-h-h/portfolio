import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
    project: {
        id: number;
        title: string;
        description: string;
        tags: string[];
        imageUrl: string;
        link: string;
    };
    index: number;
}

export const ProjectCard = ({ project, index }: ProjectProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white rounded-3xl overflow-hidden card-shadow border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
        >
            <div className="relative aspect-video overflow-hidden bg-slate-100">
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
            <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-600 uppercase tracking-wide">
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted leading-relaxed mb-6">
                    {project.description}
                </p>

                <div className="flex gap-4 pt-4 border-t border-slate-100">
                    <a href={project.link} className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-primary transition-colors">
                        <ExternalLink size={18} /> Live Demo
                    </a>
                    <a href="#" className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-primary transition-colors">
                        <Github size={18} /> Source Code
                    </a>
                </div>
            </div>
        </motion.div>
    );
};
