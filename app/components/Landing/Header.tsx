// chat-app/app/components/Landing/Header.tsx
"use client";

import { useSession, signOut as nextAuthSignOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const router = useRouter();
  const [showSignIn, setShowSignIn] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const session = useSession();

  const handleChatClick = () => {
    if (isAuthenticated) {
      setToastMessage('Redirecting to chat...');
      setToastType('success');
      setShowToast(true);
      setTimeout(() => {
        router.push('/chats');
      }, 1000);
    } else {
      setToastMessage('Please sign in to access the chat');
      setToastType('error');
      setShowToast(true);
      setTimeout(() => {
        router.push('/signin');
      }, 2000);
    }
  }

  const isAuthenticated = session?.data?.user;

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleSignOut = async () => {
    setToastMessage('Signing out...');
    setShowToast(true);
    await nextAuthSignOut();
  }

  return (
    <motion.header
      className="w-full py-4 bg-gray-900 border-b border-gray-800 relative z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {showToast && (
        <motion.div
          className={`fixed top-5 right-5 p-4 rounded-lg shadow-xl z-50 ${toastType === 'success' ? 'bg-green-600 text-white' :
              toastType === 'error' ? 'bg-red-600 text-white' :
                'bg-blue-600 text-white'
            }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-3">
              {toastType === 'success' && (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
              {toastType === 'error' && (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <p className="text-sm font-medium">{toastMessage}</p>
            <button onClick={() => setShowToast(false)} className="ml-4 text-white hover:text-gray-200">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">periskope</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <motion.ul
            className="flex items-center space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, staggerChildren: 0.1 }}
          >
            <motion.li whileHover={{ y: -2 }}>
              <button
                onClick={handleChatClick}
                className="text-gray-300 hover:text-green-400 font-medium transition-colors cursor-pointer"
              >
                Chat
              </button>
            </motion.li>
            <motion.li whileHover={{ y: -2 }}>
              <a href="#features" className="text-gray-300 hover:text-green-400 font-medium transition-colors">
                Features
              </a>
            </motion.li>
            <motion.li whileHover={{ y: -2 }}>
              <a href="#integrations" className="text-gray-300 hover:text-green-400 font-medium transition-colors">
                Integrations
              </a>
            </motion.li>
            <motion.li whileHover={{ y: -2 }}>
              <a href="#case-studies" className="text-gray-300 hover:text-green-400 font-medium transition-colors">
                Case Studies
              </a>
            </motion.li>
          </motion.ul>
        </nav>

        {/* CTA Section */}
        <motion.div
          className="flex items-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://github.com/dodaa08/periskope-chatApp"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center space-x-2 px-4 py-2 text-sm rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            <span>GitHub</span>
          </a>

          {isAuthenticated ? (
            <motion.button
              onClick={handleSignOut}
              className="px-6 py-2.5 text-sm font-medium rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Out
            </motion.button>
          ) : (
            <div className="flex space-x-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/signin"
                  className="px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:text-white border border-gray-700 hover:bg-gray-800 transition-colors"
                >
                  Login
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/signup"
                  className="px-6 py-2.5 text-sm font-medium rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
                >
                  Sign Up for Free
                </Link>
              </motion.div>
            </div>
          )}

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="lg:hidden absolute top-full left-0 w-full bg-gray-900 border-t border-gray-800 py-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="px-6 space-y-4">
            <button
              onClick={handleChatClick}
              className="block w-full text-left text-gray-300 hover:text-green-400 font-medium"
            >
              Chat
            </button>
            <a href="#features" className="block text-gray-300 hover:text-green-400 font-medium">
              Features
            </a>
            <a href="#integrations" className="block text-gray-300 hover:text-green-400 font-medium">
              Integrations
            </a>
            <a href="#case-studies" className="block text-gray-300 hover:text-green-400 font-medium">
              Case Studies
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}