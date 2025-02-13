'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaBehance } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="mb-6">
              <Image
                src="/images/designora1-02.png"
                alt="Designora360 Logo"
                width={180}
                height={45}
                className="brightness-0 invert"
              />
            </div>
            <p className="text-gray-400">
              Transforming visions into digital masterpieces. Your one-stop destination for innovative design solutions and digital excellence.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/web-design" className="text-gray-400 hover:text-blue-400 transition-colors">Web Design</Link></li>
              <li><Link href="/services/graphic-design" className="text-gray-400 hover:text-blue-400 transition-colors">Graphic Design</Link></li>
              <li><Link href="/services/branding" className="text-gray-400 hover:text-blue-400 transition-colors">Branding</Link></li>
              <li><Link href="/services/digital-marketing" className="text-gray-400 hover:text-blue-400 transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services/ui-ux" className="text-gray-400 hover:text-blue-400 transition-colors">UI/UX Design</Link></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="text-gray-400 space-y-2">
              <p>Lahore, Pakistan</p>
              <p>Phone: +92 321 3420224</p>
              <p>Email: info@designora360.com</p>
              <p>Working Hours: Mon - Fri, 9AM - 6PM</p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com/designora360" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com/designora360" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com/designora360" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com/company/designora360" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://behance.net/designora360" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaBehance size={24} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} Designora360. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
