'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Web Development Projects",
      category: "Web Development",
      image: "/images/webdev.jpg",
      description: "Full-stack web applications with modern technologies"
    },
    {
      id: 2, 
      title: "Video Production",
      category: "Video Editing",
      image: "/images/videoeditting.jpg",
      description: "Professional video editing and production"
    },
    {
      id: 3,
      title: "Graphic Design Portfolio",
      category: "Design",
      image: "/images/graphic.jpg",
      description: "Creative graphic design solutions for brands"
    },
    {
      id: 4,
      title: "Frontend Development",
      category: "Web Development",
      image: "/images/webdev.jpg",
      description: "Responsive and interactive web interfaces"
    },
    {
      id: 5,
      title: "Content Creation",
      category: "Video & Graphics",
      image: "/images/videoeditting.jpg",
      description: "Engaging multimedia content creation"
    },
    {
      id: 6,
      title: "Brand Identity",
      category: "Graphic Design",
      image: "/images/graphic.jpg",
      description: "Complete brand identity design systems"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Latest <span className="text-blue-600">Work</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our recent projects and see how we help businesses achieve their digital goals.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={item.id <= 3}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6 text-white">
                    <p className="text-sm font-medium mb-1">{item.category}</p>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
