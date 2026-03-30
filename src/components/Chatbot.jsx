/** component: Chatbot.jsx documentation added **/
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { chatbotData } from './ChatbotData';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showWelcome, setShowWelcome] = useState(true);
    const [isHidden, setIsHidden] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: 'bot',
            text: chatbotData.greeting + " How can I help you today? Check out some common questions below or ask me anything!"
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    useEffect(() => {
        // Show welcome message periodically every 10 seconds
        if (isOpen) {
            setShowWelcome(false);
            return;
        }

        const showTimer = setTimeout(() => setShowWelcome(true), 100);
        const hideTimer = setTimeout(() => setShowWelcome(false), 4000);
        const repeatTimer = setInterval(() => {
            setShowWelcome(true);
            setTimeout(() => setShowWelcome(false), 4000);
        }, 10000);

        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
            clearInterval(repeatTimer);
        };
    }, [isOpen]);

    const handleSendMessage = async (text) => {
        if (!text.trim()) return;

        // Add user message
        const userMsg = { id: Date.now(), type: 'user', text: text };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        // Simulate bot thinking time
        setTimeout(async () => {
            const response = await generateResponse(text);
            const botMsg = { id: Date.now() + 1, type: 'bot', text: response };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1000); // 1 second delay
    };

    const generateResponse = async (input) => {
        const lowerInput = input.toLowerCase();

        // 1. Check pre-defined FAQs first (exact or close match) - FASTEST
        const faqMatch = chatbotData.faqs.find(faq =>
            lowerInput.includes(faq.question.toLowerCase()) ||
            faq.question.toLowerCase().includes(lowerInput)
        );
        if (faqMatch) return faqMatch.answer;

        // 2. Try Serverless OpenAI Backend - SMARTEST
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: input }),
            });

            if (response.ok) {
                const data = await response.json();
                return data.reply;
            } else {
                console.error("Backend Error:", response.statusText);
            }
        } catch (error) {
            console.error("Network Error:", error);
            // Fall through to local logic
        }

        // 3. Fallback Keyword Matching - SAFEST
        if (lowerInput.includes('skill') || lowerInput.includes('stack') || lowerInput.includes('technology')) {
        }
        if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
            return "Hello there! Feel free to ask me about my skills, projects, or background.";
        }

        // Default fallback
        return "I'm not sure about that one yet, but I'm always learning! You can ask me about my skills, experience, or projects.";
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage(inputValue);
        }
    };

    if (isHidden) return null;

    return (
        <>
            {/* Floating Toggle Button */}
            <div className="fixed bottom-6 right-6 z-50">
                {/* Welcome Tooltip */}
                <AnimatePresence>
                    {showWelcome && !isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 20, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 20, scale: 0.9 }}
                            className="absolute bottom-full right-0 mb-3 bg-white dark:bg-slate-800 text-slate-800 dark:text-white px-4 py-2 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 whitespace-nowrap"
                        >
                            <div className="flex items-center gap-2">
                                <Sparkles size={16} className="text-blue-500" />
                                <span className="text-sm font-medium">Ask me anything!</span>
                            </div>
                            <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white dark:bg-slate-800 border-r border-b border-slate-200 dark:border-slate-700"></div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Close Button */}
                <motion.button
                    onClick={() => setIsHidden(true)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all z-10 border border-white dark:border-slate-900"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    title="Close chatbot"
                >
                    <X size={14} strokeWidth={2.5} />
                </motion.button>

                {/* Main Toggle Button */}
                <motion.button
                    onClick={() => {
                        setIsOpen(!isOpen);
                        setShowWelcome(false);
                    }}
                    className="w-14 h-14 gradient-premium rounded-full flex items-center justify-center shadow-lg hover:shadow-primary/40 text-white transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
                </motion.button>
            </div>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-6 z-50 w-[90vw] md:w-[380px] h-[500px] max-h-[80vh] bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-primary/10 to-blue-600/10 border-b border-slate-200 dark:border-slate-700/50 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full gradient-premium flex items-center justify-center text-white shadow-sm">
                                <Bot size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800 dark:text-white">Assistant</h3>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-xs text-slate-500 dark:text-slate-400">Online</span>
                                </div>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex gap-3 ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                                >
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.type === 'user'
                                            ? 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                                            : 'gradient-premium text-white'
                                            }`}
                                    >
                                        {msg.type === 'user' ? <User size={16} /> : <Bot size={16} />}
                                    </div>
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.type === 'user'
                                            ? 'bg-primary text-white rounded-br-none'
                                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-bl-none border border-slate-200 dark:border-slate-700'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}

                            {isTyping && (
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full gradient-premium flex items-center justify-center text-white flex-shrink-0">
                                        <Bot size={16} />
                                    </div>
                                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl rounded-bl-none border border-slate-200 dark:border-slate-700 flex items-center gap-1">
                                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Suggestions / FAQs */}
                        <div className="px-4 py-2 flex gap-2 overflow-x-auto scrollbar-none pb-2">
                            {chatbotData.faqs.map((faq, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSendMessage(faq.question)}
                                    className="whitespace-nowrap px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary/10 dark:hover:bg-primary/20 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300 transition-colors flex items-center gap-1.5"
                                >
                                    <Sparkles size={12} className="text-primary" />
                                    {faq.question}
                                </button>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 border-t border-slate-200 dark:border-slate-700/50 bg-white/50 dark:bg-slate-900/50">
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Ask me anything..."
                                    className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 dark:text-white outline-none placeholder:text-slate-400"
                                />
                                <button
                                    onClick={() => handleSendMessage(inputValue)}
                                    disabled={!inputValue.trim()}
                                    className="p-2.5 rounded-xl bg-primary text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;

// Accessibility documentation enhanced
