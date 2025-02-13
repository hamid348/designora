'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "E-Commerce Website",
      category: "Web Development",
      image: "/images/portfolio/project1.jpg",
      description: "Modern e-commerce platform with seamless user experience"
    },
    {
      id: 2, 
      title: "Mobile App Design",
      category: "UI/UX Design",
      image: "/images/portfolio/project2.jpg",
      description: "Intuitive mobile application interface design"
    },
    {
      id: 3,
      title: "Brand Identity",
      category: "Branding",
      image: "/images/portfolio/project3.jpg", 
      description: "Complete brand identity design system"
    },
    {
      id: 4,
      title: "Corporate Website",
      category: "Web Development",
      image: "/images/portfolio/project4.jpg",
      description: "Professional corporate web presence"
    },
    {
      id: 5,
      title: "Social Media Campaign",
      category: "Digital Marketing",
      image: "/images/portfolio/project5.jpg",
      description: "Engaging social media marketing campaign"
    },
    {
      id: 6,
      title: "Product Design",
      category: "UI/UX Design",
      image: "/images/portfolio/project6.jpg",
      description: "User-centered product design solution"
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
