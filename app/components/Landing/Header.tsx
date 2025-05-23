// chat-app/app/components/Landing/Header.tsx
"use client";

import { useSession, signOut as nextAuthSignOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const session = useSession();

  const handleChatClick = () => {
    setIsMenuOpen(false); // Close mobile menu
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleSignOut = async () => {
    setIsMenuOpen(false);
    setToastMessage('Signing out...');
    setShowToast(true);
    await nextAuthSignOut();
  }

  const navLinkClick = (href: string) => {
    setIsMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        className="w-full py-3 sm:py-4 bg-gray-900 border-b border-gray-800 relative z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Toast Notification */}
        <AnimatePresence>
          {showToast && (
            <motion.div
              className={`fixed top-4 left-4 right-4 sm:top-5 sm:right-5 sm:left-auto sm:w-auto p-3 sm:p-4 rounded-lg shadow-xl z-50 ${toastType === 'success' ? 'bg-green-600 text-white' :
                  toastType === 'error' ? 'bg-red-600 text-white' :
                    'bg-blue-600 text-white'
                }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-2 sm:mr-3">
                  {toastType === 'success' && (
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                  {toastType === 'error' && (
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <p className="text-xs sm:text-sm font-medium flex-1">{toastMessage}</p>
                <button
                  onClick={() => setShowToast(false)}
                  className="ml-2 sm:ml-4 text-white hover:text-gray-200 flex-shrink-0"
                >
                  <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">periskope</span>
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

          {/* Desktop CTA + Mobile Menu Button */}
          <motion.div
            className="flex items-center space-x-2 sm:space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {/* GitHub Link - Hidden on small screens */}
            <a
              href="https://github.com/Hmtgit7/chat-app"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center space-x-2 px-3 py-2 text-sm rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              <span className="hidden xl:inline">GitHub</span>
            </a>

            {/* Desktop Auth Buttons */}
            {isAuthenticated ? (
              <motion.button
                onClick={handleSignOut}
                className="hidden lg:block px-4 xl:px-6 py-2.5 text-sm font-medium rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign Out
              </motion.button>
            ) : (
              <div className="hidden lg:flex space-x-3">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/signin"
                    className="px-3 xl:px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:text-white border border-gray-700 hover:bg-gray-800 transition-colors"
                  >
                    Login
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/signup"
                    className="px-4 xl:px-6 py-2.5 text-sm font-medium rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
                  >
                    <span className="hidden xl:inline">Sign Up for Free</span>
                    <span className="xl:hidden">Sign Up</span>
                  </Link>
                </motion.div>
              </div>
            )}

            {/* Mobile menu button */}
            <div className="mobile-menu-container lg:hidden">
              <motion.button
                className="p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 rounded-lg"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.svg
                      key="close"
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </motion.svg>
                  ) : (
                    <motion.svg
                      key="menu"
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </motion.svg>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              className="mobile-menu-container fixed top-[73px] left-0 right-0 bg-gray-900 border-b border-gray-800 z-50 lg:hidden shadow-xl"
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="px-4 py-6 space-y-4 max-h-[calc(100vh-73px)] overflow-y-auto">
                {/* Navigation Links */}
                <div className="space-y-4 border-b border-gray-800 pb-4">
                  <motion.button
                    onClick={handleChatClick}
                    className="block w-full text-left text-gray-300 hover:text-green-400 font-medium py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors"
                    whileTap={{ scale: 0.98 }}
                  >
                    💬 Chat
                  </motion.button>
                  <motion.button
                    onClick={() => navLinkClick('#features')}
                    className="block w-full text-left text-gray-300 hover:text-green-400 font-medium py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors"
                    whileTap={{ scale: 0.98 }}
                  >
                    ⚡ Features
                  </motion.button>
                  <motion.button
                    onClick={() => navLinkClick('#integrations')}
                    className="block w-full text-left text-gray-300 hover:text-green-400 font-medium py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors"
                    whileTap={{ scale: 0.98 }}
                  >
                    🔗 Integrations
                  </motion.button>
                  <motion.button
                    onClick={() => navLinkClick('#case-studies')}
                    className="block w-full text-left text-gray-300 hover:text-green-400 font-medium py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors"
                    whileTap={{ scale: 0.98 }}
                  >
                    📊 Case Studies
                  </motion.button>
                </div>

                {/* GitHub Link */}
                <motion.a
                  href="https://github.com/Hmtgit7/chat-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-green-400 font-medium py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  <span>GitHub Repository</span>
                </motion.a>

                {/* Auth Section */}
                <div className="pt-4 space-y-3">
                  {isAuthenticated ? (
                    <motion.button
                      onClick={handleSignOut}
                      className="w-full px-4 py-3 text-sm font-medium rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
                      whileTap={{ scale: 0.98 }}
                    >
                      🚪 Sign Out
                    </motion.button>
                  ) : (
                    <>
                      <motion.div whileTap={{ scale: 0.98 }}>
                        <Link
                          href="/signin"
                          className="block w-full px-4 py-3 text-sm font-medium rounded-lg text-gray-300 hover:text-white border border-gray-700 hover:bg-gray-800 transition-colors text-center"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          🔑 Login
                        </Link>
                      </motion.div>
                      <motion.div whileTap={{ scale: 0.98 }}>
                        <Link
                          href="/signup"
                          className="block w-full px-4 py-3 text-sm font-medium rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors text-center"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          🎉 Sign Up for Free
                        </Link>
                      </motion.div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}