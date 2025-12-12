import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, AlertCircle, Loader2, RefreshCw, MessageSquare, X, ChevronDown } from 'lucide-react';
import { evaluateCase } from '../services/geminiService';
import { ChatMessage, EvaluationStatus } from '../types';

const CaseEvaluator: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Welcome to Alvina & Associates. I'm your AI Intake Assistant. Briefly describe your legal situation, and I'll help you understand potential next steps."
    }
  ]);
  const [status, setStatus] = useState<EvaluationStatus>(EvaluationStatus.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages, isOpen]);

  // Handle opening via events and hash
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#evaluator') {
        setIsOpen(true);
      }
    };

    const handleCustomOpen = () => {
      setIsOpen(true);
      setTimeout(scrollToBottom, 100);
    };

    // Check on mount
    if (window.location.hash === '#evaluator') {
      setIsOpen(true);
    }

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('open-evaluator', handleCustomOpen);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('open-evaluator', handleCustomOpen);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || status === EvaluationStatus.LOADING) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setStatus(EvaluationStatus.LOADING);

    try {
      const response = await evaluateCase(userMessage);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
      setStatus(EvaluationStatus.COMPLETE);
    } catch (error) {
      const errorMessage = error instanceof Error 
        ? error.message 
        : "An unexpected error occurred.";

      setMessages(prev => [...prev, { 
        role: 'model', 
        text: `I apologize, but I encountered an issue: ${errorMessage} Please contact our office directly at (555) 123-4567 if this persists.`, 
        isError: true 
      }]);
      setStatus(EvaluationStatus.ERROR);
    }
  };

  const resetChat = () => {
    setMessages([{
      role: 'model',
      text: "Welcome to Alvina & Associates. I'm your AI Intake Assistant. Briefly describe your legal situation, and I'll help you understand potential next steps."
    }]);
    setStatus(EvaluationStatus.IDLE);
    setInput('');
  };

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    // If closing and the hash is currently #evaluator, clear it so the link works again
    if (!newState && window.location.hash === '#evaluator') {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={handleToggle}
        className={`fixed bottom-6 right-6 z-[100] p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center ${
          isOpen ? 'bg-slate-800 text-white' : 'bg-secondary text-white'
        }`}
        aria-label={isOpen ? "Close AI Assistant" : "Open AI Assistant"}
        aria-expanded={isOpen}
      >
        {isOpen ? <ChevronDown className="h-7 w-7" /> : <MessageSquare className="h-7 w-7" />}
      </button>

      {/* Chat Window */}
      <div 
        id="evaluator"
        className={`fixed bottom-24 right-4 md:right-6 w-[calc(100vw-2rem)] md:w-[400px] h-[550px] max-h-[70vh] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col z-[100] transition-all duration-300 origin-bottom-right ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-8 pointer-events-none'
        }`}
        role="dialog"
        aria-label="AI Legal Assistant Chat Window"
      >
        {/* Header */}
        <div className="bg-primary p-4 border-b border-gray-200 flex justify-between items-center shrink-0">
          <div className="flex items-center space-x-3">
            <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">Alvina AI Assistant</h3>
              <p className="text-[10px] text-green-400 flex items-center font-medium">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse"></span> Online
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button 
              onClick={resetChat} 
              className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors" 
              title="Reset Chat"
              aria-label="Reset Conversation"
            >
              <RefreshCw className="h-4 w-4" />
            </button>
            <button 
              onClick={handleToggle}
              className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div 
          className="flex-1 p-4 overflow-y-auto bg-gray-50/80 space-y-4 scroll-smooth"
          role="log"
          aria-live="polite"
          aria-atomic="false"
          tabIndex={0}
        >
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-secondary text-white rounded-br-none' 
                  : msg.isError 
                    ? 'bg-red-50 text-red-800 border border-red-100 rounded-bl-none'
                    : 'bg-white text-slate-700 border border-gray-100 rounded-bl-none'
              }`}>
                <span className="sr-only">{msg.role === 'user' ? 'You said: ' : 'AI Assistant said: '}</span>
                {msg.isError && <AlertCircle className="inline-block w-4 h-4 mr-1 mb-1" aria-hidden="true" />}
                {msg.text.split('\n').map((line, i) => (
                  <p key={i} className={line.trim() === '' ? 'h-2' : 'mb-1 last:mb-0'}>{line}</p>
                ))}
              </div>
            </div>
          ))}
          {status === EvaluationStatus.LOADING && (
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-100">
                <span className="sr-only">AI Assistant is typing...</span>
                <Loader2 className="h-5 w-5 text-secondary animate-spin" aria-hidden="true" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white border-t border-gray-100 shrink-0">
          <form onSubmit={handleSubmit} className="relative flex items-center gap-2">
            <label htmlFor="chat-input" className="sr-only">Type your legal question</label>
            <input
              id="chat-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 bg-gray-100 border border-transparent focus:bg-white focus:border-secondary rounded-full text-slate-800 focus:ring-2 focus:ring-secondary/20 transition-all outline-none placeholder:text-gray-400 text-sm"
              disabled={status === EvaluationStatus.LOADING}
            />
            <button
              type="submit"
              disabled={!input.trim() || status === EvaluationStatus.LOADING}
              className="p-3 bg-primary text-white rounded-full hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm flex-shrink-0"
              aria-label="Send"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
          <p className="text-[10px] text-center text-gray-400 mt-2">
            Not legal advice. For informational purposes only.
          </p>
        </div>
      </div>
    </>
  );
};

export default CaseEvaluator;