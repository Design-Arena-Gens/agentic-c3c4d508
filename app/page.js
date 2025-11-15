'use client';

import { useState } from 'react';

export default function Home() {
  const [selectedLogo, setSelectedLogo] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const logos = [
    {
      name: 'Hexagon Tools',
      description: 'A hexagon with integrated tool symbols - clean, geometric, developer-friendly',
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#764ba2', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <polygon
            points="100,20 170,55 170,130 100,165 30,130 30,55"
            fill="url(#grad1)"
            stroke={darkMode ? '#fff' : '#333'}
            strokeWidth="3"
          />
          <text
            x="100"
            y="110"
            fontSize="72"
            fontWeight="bold"
            textAnchor="middle"
            fill="#fff"
            fontFamily="monospace"
          >
            {'</>'}
          </text>
        </svg>
      )
    },
    {
      name: 'Circuit Cube',
      description: 'A minimalist cube with circuit-like connections, symbolizing interconnected tools',
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#11998e', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#38ef7d', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <rect x="50" y="50" width="100" height="100" rx="15" fill="url(#grad2)" />
          <circle cx="70" cy="70" r="6" fill="#fff" />
          <circle cx="130" cy="70" r="6" fill="#fff" />
          <circle cx="70" cy="130" r="6" fill="#fff" />
          <circle cx="130" cy="130" r="6" fill="#fff" />
          <line x1="70" y1="70" x2="130" y2="70" stroke="#fff" strokeWidth="3" />
          <line x1="70" y1="130" x2="130" y2="130" stroke="#fff" strokeWidth="3" />
          <line x1="70" y1="70" x2="70" y2="130" stroke="#fff" strokeWidth="3" />
          <line x1="130" y1="70" x2="130" y2="130" stroke="#fff" strokeWidth="3" />
          <line x1="70" y1="70" x2="130" y2="130" stroke="#fff" strokeWidth="3" strokeDasharray="5,5" />
          <line x1="130" y1="70" x2="70" y2="130" stroke="#fff" strokeWidth="3" strokeDasharray="5,5" />
        </svg>
      )
    },
    {
      name: 'DTC Monogram',
      description: 'Bold DTC letters forming a swiss-army-knife style tool icon',
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#f093fb', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#4facfe', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="url(#grad3)" />
          <text
            x="100"
            y="130"
            fontSize="65"
            fontWeight="900"
            textAnchor="middle"
            fill="#fff"
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="-3"
          >
            DTC
          </text>
        </svg>
      )
    },
    {
      name: 'Wrench Code',
      description: 'A wrench integrated with code brackets - instantly recognizable as dev tools',
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#fa709a', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#fee140', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <rect x="40" y="40" width="120" height="120" rx="25" fill="url(#grad4)" />
          <path
            d="M 70 80 L 60 100 L 70 120 M 130 80 L 140 100 L 130 120"
            stroke="#fff"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="100" cy="100" r="15" fill="none" stroke="#fff" strokeWidth="6" />
          <rect x="95" y="115" width="10" height="25" fill="#fff" rx="2" />
        </svg>
      )
    },
    {
      name: 'Terminal Window',
      description: 'A terminal window with a prompt symbol - classic and immediately recognizable',
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#6a11cb', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#2575fc', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <rect x="30" y="40" width="140" height="120" rx="10" fill="url(#grad5)" />
          <circle cx="50" cy="60" r="5" fill="#ff5f56" />
          <circle cx="70" cy="60" r="5" fill="#ffbd2e" />
          <circle cx="90" cy="60" r="5" fill="#27c93f" />
          <path
            d="M 50 90 L 70 100 L 50 110"
            stroke="#fff"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="85" y1="110" x2="120" y2="110" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: 'Gear Brackets',
      description: 'Gears within code brackets - perfect blend of tools and coding',
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#f857a6', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#ff5858', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="75" fill="url(#grad6)" />
          <path
            d="M 50 70 L 40 100 L 50 130"
            stroke="#fff"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 150 70 L 160 100 L 150 130"
            stroke="#fff"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="100" cy="100" r="25" fill="none" stroke="#fff" strokeWidth="8" />
          <circle cx="100" cy="75" r="5" fill="#fff" />
          <circle cx="100" cy="125" r="5" fill="#fff" />
          <circle cx="75" cy="100" r="5" fill="#fff" />
          <circle cx="125" cy="100" r="5" fill="#fff" />
        </svg>
      )
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h1 className={`text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Dev Tools Center
            </h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'}`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Logo Design Concepts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {logos.map((logo, index) => (
            <div
              key={index}
              onClick={() => setSelectedLogo(index)}
              className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 ${
                selectedLogo === index
                  ? darkMode
                    ? 'bg-gray-800 ring-4 ring-blue-500 shadow-2xl'
                    : 'bg-white ring-4 ring-blue-500 shadow-2xl'
                  : darkMode
                  ? 'bg-gray-800 hover:bg-gray-750 shadow-lg'
                  : 'bg-white hover:shadow-xl shadow-lg'
              }`}
            >
              <div className="aspect-square mb-4 flex items-center justify-center">
                {logo.svg}
              </div>
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {logo.name}
              </h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {logo.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`rounded-2xl p-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}>
          <h2 className={`text-3xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Selected Logo: {logos[selectedLogo].name}
          </h2>
          <div className="max-w-md mx-auto mb-8">
            {logos[selectedLogo].svg}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
              <div className="w-16 h-16 mb-2 mx-auto">
                {logos[selectedLogo].svg}
              </div>
              <p className={`text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Favicon Size
              </p>
            </div>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
              <div className="w-32 h-32 mb-2 mx-auto">
                {logos[selectedLogo].svg}
              </div>
              <p className={`text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Header Size
              </p>
            </div>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
              <div className="w-48 h-48 mb-2 mx-auto">
                {logos[selectedLogo].svg}
              </div>
              <p className={`text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Hero Size
              </p>
            </div>
          </div>
        </div>

        <div className={`mt-12 p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
          <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Design Rationale
          </h3>
          <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <li className="flex items-start">
              <span className="mr-3 text-xl">✓</span>
              <span><strong>Simple & Memorable:</strong> Clean geometric shapes that stick in developers' minds</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-xl">✓</span>
              <span><strong>Developer-Focused:</strong> Incorporates familiar symbols (code brackets, terminals, gears)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-xl">✓</span>
              <span><strong>Modern Gradients:</strong> Vibrant colors that stand out while remaining professional</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-xl">✓</span>
              <span><strong>Scalable:</strong> Works perfectly at any size from favicon to hero image</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-xl">✓</span>
              <span><strong>Versatile:</strong> Looks great in both dark and light modes</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
