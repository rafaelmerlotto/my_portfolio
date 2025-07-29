import React, { useState, useEffect } from 'react'
import { Code2, Database, Server } from 'lucide-react';



export default function Info() {

  return (
    <React.Fragment>
      <div className="relative">
        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-700 p-4 rounded-lg text-center">
              <Code2 className="text-blue-400 mx-auto mb-2" size={24} />
              <div className="text-sm text-gray-300">Clean Code</div>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg text-center">
              <Database className="text-green-400 mx-auto mb-2" size={24} />
              <div className="text-sm text-gray-300">Databases</div>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg text-center">
              <Server className="text-purple-400 mx-auto mb-2" size={24} />
              <div className="text-sm text-gray-300">Cloud</div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span>System Uptime</span>
              <span className="text-green-400">99.9%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-green-400 h-2 rounded-full w-full"></div>
            </div>
            <div className="flex justify-between text-sm">
              <span>Code Quality</span>
              <span className="text-green-400">A+</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-green-400 h-2 rounded-full w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
