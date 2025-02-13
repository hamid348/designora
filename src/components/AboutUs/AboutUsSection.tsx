'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const AboutUsSection = () => {
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
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Designora360</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are a creative digital agency passionate about transforming ideas into impactful digital experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/images/about-us.jpg"
              alt="About Designora360"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Crafting Digital Excellence Since 2020
            </h3>
            <p className="text-gray-600">
              At Designora360, we believe in the power of creative innovation and technical excellence. 
              Our team of passionate professionals works tirelessly to deliver cutting-edge digital solutions 
              that help businesses thrive in the modern digital landscape.
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Expert team of designers and developers
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Innovative solutions for modern businesses
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Client-focused approach with dedicated support
              </li>
            </ul>
            <Link 
              href="/about"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <motion.div variants={itemVariants} className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-4xl font-bold text-blue-600 mb-2">100+</h4>
            <p className="text-gray-600">Projects Completed</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-4xl font-bold text-blue-600 mb-2">50+</h4>
            <p className="text-gray-600">Happy Clients</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-4xl font-bold text-blue-600 mb-2">3+</h4>
            <p className="text-gray-600">Years Experience</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
