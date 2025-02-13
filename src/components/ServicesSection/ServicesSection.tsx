'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: "/icons/web-design.svg",
      title: "Web Design",
      description: "Creative and responsive web designs that captivate your audience and deliver exceptional user experiences across all devices."
    },
    {
      id: 2,
      icon: "/icons/development.svg",
      title: "Full Stack Development",
      description: "End-to-end web development solutions using cutting-edge technologies to build scalable and robust applications."
    },
    {
      id: 3,
      icon: "/icons/graphic-design.svg",
      title: "Graphic Design",
      description: "Eye-catching visual designs including logos, branding materials, and marketing collateral that tell your brand's story."
    },
    {
      id: 4,
      icon: "/icons/video-editing.svg",
      title: "Video Editing",
      description: "Professional video editing services to create engaging content for your marketing, social media, and promotional needs."
    },
    {
      id: 5,
      icon: "/icons/seo.svg",
      title: "SEO Optimization",
      description: "Strategic SEO services to improve your website's visibility and drive organic traffic to your business."
    },
    {
      id: 6,
      icon: "/icons/digital-marketing.svg",
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence and reach your target audience."
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
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of digital solutions to help your business thrive in the digital landscape.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6 relative">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
