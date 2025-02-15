'use client'
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Career', href: '/career' }
    ],
    help: [
      { name: 'Customer Support', href: '/support' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' }
    ]
  };

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
  };

  return (
    <footer className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image 
                src="/images/designora1-02.png"
                alt="Designora360 Logo"
                width={160}
                height={40}
                className="w-auto h-10"
                priority
              />
            </Link>
            <p className="mt-6 text-base text-gray-600">
              Transforming ideas into digital excellence. Your trusted partner for innovative design solutions and creative digital experiences.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest text-gray-900 uppercase">Company</h3>
            <ul className="mt-6 space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-base text-gray-700 transition-colors duration-200 hover:text-blue-600"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest text-gray-900 uppercase">Help</h3>
            <ul className="mt-6 space-y-4">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-base text-gray-700 transition-colors duration-200 hover:text-blue-600"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold tracking-widest text-gray-900 uppercase">
              Stay Updated
            </h3>
            <form onSubmit={handleSubscribe} className="mt-6">
              <div className="flex flex-col space-y-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />
        
        <p className="text-sm text-center text-gray-600">
          © {currentYear} Designora360. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
