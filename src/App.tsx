import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Apply dark mode class to document when darkMode state changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
      {/* Sidebar */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-purple-800'} text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out`}>
        <div className="flex items-center space-x-2 px-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
          </svg>
          <span className="text-2xl font-extrabold">React Template</span>
        </div>
        
        <nav>
          <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-purple-700'} hover:text-white`}>
            One
          </a>
          <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-purple-700'} hover:text-white`}>
            Two
          </a>
          <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-purple-700'} hover:text-white`}>
            Three
          </a>
          <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-purple-700'} hover:text-white`}>
            Four
          </a>
          <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-purple-700'} hover:text-white`}>
            Five
          </a>
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-md p-4`}>
          <div className="flex items-center justify-between">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className={`${darkMode ? 'text-gray-200' : 'text-gray-500'} focus:outline-none md:hidden`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-purple-800'}`}>React Template Dashboard</div>
            <div className="flex items-center space-x-4">
              {/* Dark/Light Mode Toggle */}
              <button 
                onClick={toggleDarkMode} 
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-purple-100 text-gray-700'}`}
                aria-label="Toggle dark/light mode"
              >
                {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
              
              <button className={`${darkMode ? 'bg-gray-700' : 'bg-purple-100'} p-2 rounded-full ${darkMode ? 'text-white' : 'text-purple-800'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <button className={`${darkMode ? 'bg-gray-700' : 'bg-purple-100'} p-1 rounded-full h-8 w-8 ${darkMode ? 'text-white' : 'text-purple-800'}`}>
                <span className="font-bold">AA</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className={`flex-1 overflow-y-auto p-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 flex items-center`}>
              <div className="rounded-full bg-green-100 p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-500'} text-sm`}>Total Balance</p>
                <p className="text-2xl font-bold">$12,875.35</p>
              </div>
            </div>
            
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 flex items-center`}>
              <div className="rounded-full bg-blue-100 p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-500'} text-sm`}>Active Tokens</p>
                <p className="text-2xl font-bold">24</p>
              </div>
            </div>
            
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 flex items-center`}>
              <div className="rounded-full bg-purple-100 p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-500'} text-sm`}>Transactions</p>
                <p className="text-2xl font-bold">156</p>
              </div>
            </div>
            
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 flex items-center`}>
              <div className="rounded-full bg-yellow-100 p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <div>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-500'} text-sm`}>ROI</p>
                <p className="text-2xl font-bold">+24.5%</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 lg:col-span-2`}>
              <h2 className="text-lg font-semibold mb-4">Token Performance</h2>
              <div className={`h-64 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded flex items-center justify-center`}>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Chart Placeholder</p>
              </div>
            </div>
            
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6`}>
              <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
              <div className="space-y-4">
                <div className={`flex justify-between items-center border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} pb-2`}>
                  <div className="flex items-center">
                    <div className="rounded-full bg-green-100 p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                    </div>
                    <div>
                    <p className="font-medium">SOL Purchase</p>
                      <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>2 hours ago</p>
                    </div>
                  </div>
                  <span className="text-green-600 font-medium">+2.5 SOL</span>
                </div>
                
                <div className={`flex justify-between items-center border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} pb-2`}>
                  <div className="flex items-center">
                    <div className="rounded-full bg-red-100 p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Token Swap</p>
                      <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>5 hours ago</p>
                    </div>
                  </div>
                  <span className="text-red-600 font-medium">-0.8 SOL</span>
                </div>
                
                <div className={`flex justify-between items-center border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} pb-2`}>
                  <div className="flex items-center">
                    <div className="rounded-full bg-blue-100 p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Transfer</p>
                      <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>1 day ago</p>
                    </div>
                  </div>
                  <span className="text-blue-600 font-medium">1.2 SOL</span>
                </div>
              </div>
              <button className={`mt-4 ${darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-800'} text-sm font-medium`}>
                View all transactions →
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
