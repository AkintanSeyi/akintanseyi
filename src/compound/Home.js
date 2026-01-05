import React, { useState, useEffect } from 'react';
import { supabase } from './authkeys'; 
import { useNavigate } from 'react-router-dom';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const Home = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const [animatedText, setAnimatedText] = useState('');
  const [explanationSegment, setExplanationSegment] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);
  
  const welcomeMsg = "Hi, I'm Seyi.";
  const explanation = "This authentication demo is for showcase purposes only. You can use any email you don’t frequently use and any password you wish. I do not collect, store, or access your personal data. All authentication is securely handled by Supabase to demonstrate real-world API integration and data handling. ";
  const finalWelcome = "Welcome to my portfolio , enjoy exploring!!!";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setAnimatedText(welcomeMsg.slice(0, i + 1));
      i++;
      if (i === welcomeMsg.length) {
        clearInterval(interval);
        setTimeout(() => setShowExplanation(true), 500);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (showExplanation) {
      let i = 0;
      const fullText = explanation + finalWelcome;
      const interval = setInterval(() => {
        setExplanationSegment(fullText.slice(0, i + 1));
        i++;
        if (i === fullText.length) clearInterval(interval);
      }, 15);
      return () => clearInterval(interval);
    }
  }, [showExplanation]);

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: '', type: '' });

    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setMessage({ text: error.message, type: 'error' });
    } else {
      setMessage({ text: "Account Created! Redirecting...", type: 'success' });
      setTimeout(() => navigate('/signin'), 2000);
    }
    setLoading(false);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-6 overflow-hidden bg-[#0b1120] font-sans selection:bg-purple-500/30">
      
      {/* Background Decor */}
      <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-purple-600/15 rounded-full blur-[110px] animate-blob"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-blue-600/15 rounded-full blur-[110px] animate-blob animation-delay-2000"></div>

      <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Bold Header & Large Text */}
        <div className="text-left space-y-8">
          <h1 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter">
            {animatedText}<span className="text-purple-500 animate-pulse ml-2">|</span>
          </h1>
          
          <div className="min-h-[200px] pr-6">
            {showExplanation && (
              <p className="text-gray-400 text-xl md:text-2xl font-medium leading-relaxed">
                {explanationSegment.includes(finalWelcome) ? (
                  <>
                    {explanation}
                    <span className="block mt-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 font-black italic">
                      {finalWelcome}
                    </span>
                  </>
                ) : (
                  explanationSegment
                )}
              </p>
            )}
          </div>
        </div>

        {/* Right Side: Form UI */}
        <div className="relative group max-w-md w-full mx-auto lg:ml-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-[2.5rem] blur opacity-40 transition duration-1000"></div>
          
          <div className="relative bg-[#161b2c]/80 backdrop-blur-3xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-2">Sign Up Demo</h2>
            <p className="text-gray-500 text-sm mb-10 font-medium uppercase tracking-widest">Experience the auth flow</p>
            
            <form onSubmit={handleAuth} className="space-y-6">
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-lg text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create password"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-lg text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors scale-125"
                  >
                    {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                  </button>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-lg font-black py-5 rounded-2xl shadow-xl shadow-purple-900/40 transform transition active:scale-[0.98] disabled:opacity-50 mt-4"
              >
                {loading ? 'Processing...' : 'Try Sign Up'}
              </button>
            </form>

            {message.text && (
              <div className={`mt-8 p-5 rounded-2xl text-sm font-bold text-center border animate-pulse ${message.type === 'error' ? 'bg-red-500/10 text-red-400 border-red-500/20' : 'bg-green-500/10 text-green-400 border-green-500/20'}`}>
                {message.text}
              </div>
            )}

            <div className="mt-10 pt-8 border-t border-white/5 text-center">
              <p className="text-gray-500 font-medium">
                Already have an account?{" "}
                <button 
                  onClick={() => navigate('/signin')}
                  className="text-purple-400 font-black hover:text-purple-300 transition-colors ml-2 underline underline-offset-8 decoration-2"
                >
                  Sign In
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 10s infinite; }
      `}</style>
    </div>
  );
};

export default Home;