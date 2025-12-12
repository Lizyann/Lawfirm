import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, AlertCircle, Loader2, RefreshCw } from 'lucide-react';
import { evaluateCase } from '../services/geminiService';
import { ChatMessage, EvaluationStatus } from '../types';

const CaseEvaluator: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Welcome to Alvina & Associates' AI Intake Assistant. Please briefly describe your legal situation, and I will identify the relevant practice area and suggest initial steps."
    }
  ]);
  const [status, setStatus] = useState<EvaluationStatus>(EvaluationStatus.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
      setMessages(prev => [...prev, { role: 'model', text: "I'm sorry, I encountered an error connecting to the evaluation system. Please try again later or call our office.", isError: true }]);
      setStatus(EvaluationStatus.ERROR);
    }
  };

  const resetChat = () => {
    setMessages([{
      role: 'model',
      text: "Welcome to Alvina & Associates' AI Intake Assistant. Please briefly describe your legal situation, and I will identify the relevant practice area and suggest initial steps."
    }]);
    setStatus(EvaluationStatus.IDLE);
    setInput('');
  };

  return (
    <section id="evaluator" className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Info */}
          <div className="lg:sticky lg:top-32">
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <Bot className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium tracking-wide">Powered by Gemini 2.5 AI</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Instant Legal <br/><span className="text-secondary">Case Evaluation</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Unsure if you have a case? Our advanced AI assistant can analyze your situation in seconds, providing a preliminary assessment and actionable next steps before you even step into our office.
            </p>
            <ul className="space-y-4 text-gray-300 mb-8">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center mt-1 mr-3">
                  <span className="text-secondary text-xs">✓</span>
                </div>
                Confidential & Secure
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center mt-1 mr-3">
                  <span className="text-secondary text-xs">✓</span>
                </div>
                Instant Preliminary Guidance
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center mt-1 mr-3">
                  <span className="text-secondary text-xs">✓</span>
                </div>
                24/7 Availability
              </li>
            </ul>
          </div>

          {/* Right Side: Chat Interface */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col border border-white/10 h-[550px] lg:h-[650px]">
            {/* Chat Header */}
            <div className="bg-slate-50 p-4 border-b border-gray-200 flex justify-between items-center shrink-0">
              <div className="flex items-center space-x-3">
                <div className="bg-primary p-2 rounded-full">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Alvina AI Assistant</h3>
                  <p className="text-xs text-green-600 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span> Online
                  </p>
                </div>
              </div>
              <button onClick={resetChat} className="text-gray-500 hover:text-primary transition-colors" title="Reset Chat">
                <RefreshCw className="h-4 w-4" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50/50 space-y-4 scroll-smooth">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-5 py-3 text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-secondary text-white rounded-br-none shadow-md' 
                      : msg.isError 
                        ? 'bg-red-50 text-red-800 border border-red-100 rounded-bl-none'
                        : 'bg-white text-slate-700 shadow-sm border border-gray-100 rounded-bl-none'
                  }`}>
                    {msg.isError && <AlertCircle className="inline-block w-4 h-4 mr-1 mb-1" />}
                    {msg.text.split('\n').map((line, i) => (
                      <p key={i} className={line.trim() === '' ? 'h-2' : 'mb-1 last:mb-0'}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
              {status === EvaluationStatus.LOADING && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-100">
                    <Loader2 className="h-5 w-5 text-secondary animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100 shrink-0">
              <form onSubmit={handleSubmit} className="relative flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Describe your legal issue..."
                  className="flex-1 px-4 py-3 bg-gray-100 border border-transparent focus:bg-white focus:border-secondary rounded-lg text-slate-800 focus:ring-4 focus:ring-secondary/10 transition-all outline-none placeholder:text-gray-400"
                  disabled={status === EvaluationStatus.LOADING}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || status === EvaluationStatus.LOADING}
                  className="p-3 bg-primary text-white rounded-lg hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm flex-shrink-0"
                  aria-label="Send message"
                >
                  <Send className="h-5 w-5" />
                </button>
              </form>
              <p className="text-[10px] text-center text-gray-400 mt-2">
                AI responses are for informational purposes only and do not constitute legal advice.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CaseEvaluator;