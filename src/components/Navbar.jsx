import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ theme, toggleTheme, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Services', path: '/#services' },
    { name: 'Contact', path: '/#contact' },
  ];

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setIsOpen(false);

    // Wait for menu animation to complete before scrolling
    setTimeout(() => {
      if (path === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (path.startsWith('/#')) {
        const id = path.substring(2);
        const element = document.getElementById(id);
        if (element) {
          const navbarHeight = 80; // Navbar height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }, 300); // Match Framer Motion animation duration
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-base-100/80 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <Link
            to="/"
            className="text-lg sm:text-xl lg:text-2xl font-bold text-gradient whitespace-nowrap"
          >
            PORTFOLIO
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0.5 lg:gap-4">
            {navLinks.map((link) => {
              const sectionId =
                link.path === '/' ? 'home' : link.path.substring(2);
              const isActive = activeSection === sectionId;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className={`flex items-center justify-center px-2 lg:px-4 py-1 rounded-full font-heading text-[10px] sm:text-xs lg:text-sm leading-6 select-none transition-all duration-200 ${isActive
                    ? 'text-white gradient-premium shadow-md shadow-blue-500/20'
                    : 'text-black dark:text-slate-300 hover:text-blue-600 dark:hover:text-white'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 sm:p-2.5 backdrop-blur-xl border rounded-lg shadow-lg touch-manipulation ${theme === 'dark'
                ? 'bg-slate-800/80 border-slate-700'
                : 'bg-white/80 border-slate-200'
                }`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-500" />
              ) : (
                <Moon className="w-4 h-4 text-amber-500" />
              )}
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 backdrop-blur-xl border rounded-lg shadow-lg ${theme === 'dark'
                ? 'bg-slate-800/80 border-slate-700'
                : 'bg-white/80 border-slate-200'
                }`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-500" />
              ) : (
                <Moon className="w-4 h-4 text-amber-500" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg border ${theme === 'dark'
                ? 'border-slate-700 text-slate-300'
                : 'border-slate-200 text-slate-700'
                }`}
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center">
                <span
                  className={`block w-4 h-0.5 bg-current transition ${isOpen ? 'rotate-45 absolute' : '-translate-y-1'
                    }`}
                />
                <span
                  className={`block w-4 h-0.5 bg-current transition ${isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                />
                <span
                  className={`block w-4 h-0.5 bg-current transition ${isOpen ? '-rotate-45 absolute' : 'translate-y-1'
                    }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-100 dark:border-slate-800"
          >
            <div className={theme === 'dark' ? 'bg-slate-900' : 'bg-white'}>
              <div className="container mx-auto px-4 pt-8 pb-6 space-y-2">
                {navLinks.map((link) => {
                  const sectionId =
                    link.path === '/' ? 'home' : link.path.substring(2);
                  const isActive = activeSection === sectionId;

                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={(e) => handleNavClick(e, link.path)}
                      className={`block w-full text-left px-4 py-2 rounded-full transition-all duration-200 ${isActive
                        ? 'text-white gradient-premium shadow-md'
                        : theme === 'dark'
                          ? 'text-slate-300 hover:bg-slate-800'
                          : 'text-slate-700 hover:bg-slate-100'
                        }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
};

export default Navbar;

// Accessibility documentation enhanced
