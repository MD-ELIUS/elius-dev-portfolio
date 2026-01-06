import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, Globe, Facebook } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    type: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all required fields.',
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);

      setTimeout(() => {
        setFormStatus({ type: '', message: '' });
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email Me',
      value: 'mdelius.nfs@gmail.com',
      href: 'mailto:mdelius.nfs@gmail.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: '+880 1798303106',
      href: 'https://wa.me/8801798303106',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mirpur, Dhaka, Bangladesh',
      href: '#',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/MD-ELIUS', label: 'GitHub', color: 'hover:!bg-blue-600 dark:hover:!bg-blue-500 hover:!text-white' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mdelius/', label: 'LinkedIn', color: 'hover:!bg-blue-600 dark:hover:!bg-blue-500 hover:!text-white' },
    { icon: Facebook, href: 'https://www.facebook.com/elius320', label: 'Facebook', color: 'hover:!bg-blue-600 dark:hover:!bg-blue-500 hover:!text-white' },
    { icon: Globe, href: 'https://mdelius.dev', label: 'Portfolio', color: 'hover:!bg-blue-600 dark:hover:!bg-blue-500 hover:!text-white' },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Let's"
          highlight="Connect"
          subtitle="Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas."
        />

        <div className="max-w-4xl mx-auto space-y-16">
          {/* Top Section - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/50 dark:bg-slate-800/30 backdrop-blur-xl rounded-3xl p-8 border border-slate-200 dark:border-slate-700/50 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-5 py-3 rounded-xl bg-white/80 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 dark:text-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-5 py-3 rounded-xl bg-white/80 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 dark:text-white"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="w-full px-5 py-3 rounded-xl bg-white/80 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 dark:text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="5"
                  className="w-full px-5 py-3 rounded-xl bg-white/80 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 dark:text-white resize-none"
                  required
                ></textarea>
              </div>

              {formStatus.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl text-sm font-medium ${formStatus.type === 'error'
                    ? 'bg-red-500/10 text-red-500 border border-red-500/20'
                    : 'bg-green-500/10 text-green-500 border border-green-500/20'
                    }`}
                >
                  {formStatus.message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary via-purple-500 to-blue-500 text-white font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Bottom Section - Contact Info Cards Array */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center p-6 rounded-3xl bg-white/50 dark:bg-slate-800/30 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-md hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg mb-4 transition-transform duration-300`}>
                    <item.icon size={28} />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-slate-900 dark:text-slate-200 font-medium break-all">{item.value}</p>
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col items-center">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-6">Connect with me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center text-slate-600 dark:text-slate-400 ${social.color} transition-all duration-300`}
                    aria-label={social.label}
                  >
                    <social.icon size={22} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
