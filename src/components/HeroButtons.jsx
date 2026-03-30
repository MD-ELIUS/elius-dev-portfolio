/** component: HeroButtons.jsx documentation added **/
import { Eye, Send, Download, CheckCircle } from "lucide-react";
import toast, { Toaster } from 'react-hot-toast';

const HeroButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 px-4 lg:px-0">

      <a
        href="#projects"
        className="btn btn-primary rounded-full group touch-manipulation flex items-center justify-center gap-3 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-blue-600/50"
      >
        <Eye className="group-hover:animate-pulse" />
        <span>View My Work</span>
      </a>

      <a
        href="#contact"
        className="btn btn-primary rounded-full group touch-manipulation flex items-center justify-center gap-3 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-blue-600/50"
      >
        <Send className="group-hover:animate-pulse" />
        <span>Get In Touch</span>
      </a>

      <a
        href="https://drive.google.com/uc?export=download&id=1R2TP8rl5Ty7WsTVa2UhuuOogW0IIBlNv"
        onClick={() => toast.success('Resume Download Started', {
          style: {
            background: '#1e293b',
            color: '#fff',
            border: '1px solid #3b82f6',
          },
          icon: <CheckCircle className="text-blue-500" />,
        })}
        className="btn btn-primary rounded-full group touch-manipulation flex items-center justify-center gap-3 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-blue-600/50"
      >
        <Download className="group-hover:animate-pulse" />
        <span>Download CV</span>
      </a>
      <Toaster position="bottom-center" />

    </div>
  );
};

export default HeroButtons;

// Accessibility documentation enhanced
