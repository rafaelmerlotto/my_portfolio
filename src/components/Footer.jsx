import React from 'react'
import { Terminal } from 'lucide-react';


export default function Footer() {

  return (
    <React.Fragment>
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Terminal className="text-green-400" size={16} />
            <span className="font-mono text-sm">Built with React + Tailwind CSS</span>
          </div>
          <div className="text-gray-400 text-sm">
            © 2025 Rafael Merlotto. <a href='https://github.com/rafaelmerlotto/my_portfolio'>Open source on GitHub. </a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}
