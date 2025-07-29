import React, { useState } from 'react'

export default function Skills({ skills }) {

    const [activeTab, setActiveTab] = useState('projects');
    const [typedText, setTypedText] = useState('');

    return (
        <React.Fragment>
            {/* Skills Section */}
            <section id="skills" className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
                        <p className="text-gray-400 text-lg">Technologies and tools I use every day</p>
                    </div>

                    <div className="mb-8 ">
                        <div className="flex justify-center gap-3 mb-8 max-md:flex max-md:flex-col">
                            {Object.keys(skills).map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveTab(category)}
                                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${activeTab === category
                                        ? 'bg-green-500 text-gray-900'
                                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                        }`}
                                >
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills[activeTab]?.map((skill, index) => (
                            <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="font-semibold">{skill.name}</h3>

                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                                    <div
                                        className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full transition-all duration-1000"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                                {skill.years && (
                                    <p className="text-gray-400 text-sm">{skill.years} years experience</p>
                                )}
                            </div>
                        ))}
                    </div>


                </div>
            </section>
        </React.Fragment>
    )
}
