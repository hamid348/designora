'use client';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppCompo = () => {
  const whatsappNumber = '+923213420224';
  
  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50"
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <div className="relative w-16 h-16 bg-green-500 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
        <FaWhatsapp className="text-white w-10 h-10" />
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
      </div>
    </motion.a>
  );
};

export default WhatsAppCompo;
