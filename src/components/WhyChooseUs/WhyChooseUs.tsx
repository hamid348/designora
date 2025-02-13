'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: "/icons/innovation.svg",
      title: "Innovative Solutions",
      description: "We leverage cutting-edge technologies and creative approaches to deliver unique digital solutions."
    },
    {
      id: 2,
      icon: "/icons/expertise.svg", 
      title: "Expert Team",
      description: "Our team of seasoned professionals brings years of industry experience and technical expertise."
    },
    {
      id: 3,
      icon: "/icons/customization.svg",
      title: "Tailored Approach",
      description: "We create custom solutions that perfectly align with your brand identity and business goals."
    },
    {
      id: 4,
      icon: "/icons/support.svg",
      title: "24/7 Support",
      description: "Round-the-clock support and maintenance to ensure your digital presence stays flawless."
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
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">Designora360</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine creativity, technology, and strategy to deliver exceptional digital experiences that drive results.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4 relative">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
