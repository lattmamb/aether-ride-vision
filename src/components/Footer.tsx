import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import Logo from '@/components/navigation/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
      </svg>
    )},
    { name: 'Facebook', href: '#', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
      </svg>
    )},
    { name: 'Instagram', href: '#', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )},
    { name: 'LinkedIn', href: '#', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
      </svg>
    )},
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Fleet', href: '/vehicles' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Locations', href: '/locations' },
  ];

  const services = [
    { name: 'Electric Vehicles', href: '/vehicles?type=ev' },
    { name: 'Subscription Plans', href: '/pricing' },
    { name: 'Charging Hubs', href: '/locations' },
    { name: 'Fleet Management', href: '/dashboard' },
    { name: 'Community Impact', href: '/about' },
  ];

  return (
    <footer className="relative border-t border-silver-700/30 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-silver-400/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative container mx-auto px-4 py-16">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Logo size="lg" />
            <p className="text-silver-400/80 mt-6 mb-8 font-inter leading-relaxed max-w-xs">
              Premium electric vehicle rental and subscription service for the modern driver. 
              Sustainable mobility powered by community.
            </p>
            
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl glass-metallic text-silver-400 hover:text-primary transition-colors duration-300"
                  style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)' }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-space font-semibold mb-6 flex items-center gap-2">
              <div className="w-1 h-4 bg-primary rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="group flex items-center gap-2 text-silver-400 hover:text-white transition-colors duration-300 font-inter"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-space font-semibold mb-6 flex items-center gap-2">
              <div className="w-1 h-4 bg-primary rounded-full" />
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="group flex items-center gap-2 text-silver-400 hover:text-white transition-colors duration-300 font-inter"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-space font-semibold mb-6 flex items-center gap-2">
              <div className="w-1 h-4 bg-primary rounded-full" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-silver-400 font-inter">
                  123 Unity Drive, Chicago, IL 60601
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-silver-400 font-inter">+1 (312) 555-0123</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-4 w-4" />
                </div>
                <a 
                  href="mailto:hello@unityfleet.com" 
                  className="text-silver-400 hover:text-primary transition-colors font-inter"
                >
                  hello@unityfleet.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="glass-metallic rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-space font-semibold text-white mb-2">
                Stay in the loop
              </h3>
              <p className="text-silver-400 font-inter">
                Get the latest updates on new vehicles, features, and community events.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-4 py-3 rounded-xl bg-white/5 border border-silver-600/30 text-white placeholder:text-silver-500 font-inter focus:outline-none focus:border-primary/50 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-xl font-inter font-medium"
                style={{
                  background: 'linear-gradient(135deg, #00E0FF 0%, #00B8D4 100%)',
                  color: 'hsl(220, 15%, 4%)',
                }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-silver-700/30">
          <p className="text-silver-500 text-sm font-inter">
            © {currentYear} Unity Fleet. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/terms" className="text-silver-500 text-sm hover:text-white transition-colors font-inter">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-silver-500 text-sm hover:text-white transition-colors font-inter">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="text-silver-500 text-sm hover:text-white transition-colors font-inter">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
