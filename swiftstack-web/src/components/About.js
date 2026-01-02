import React from 'react';

// Data Statistik (Logic Lead main dengan data!)
const stats = [
    { id: 1, label: "Years Experience", value: "5+" },
    { id: 2, label: "Projects Delivered", value: "50+" },
    { id: 3, label: "Happy Clients", value: "100%" },
    { id: 4, label: "Team Members", value: "15" },
];

function About() {
    return (
        <section id="about-us" className="py-20 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Bahagian Kiri: Teks Cerita Company */}
                    <div>
                        <h2 className="text-4xl font-extrabold text-teal-400 mb-6">About SwiftStack</h2>
                        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                            Founded with a vision to bridge the gap between complex technology and human needs, SwiftStack has grown from a small dorm-room project into a full-scale digital agency.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            We believe that code is more than just syntax; it's the language of the future. Our team works tirelessly to ensure every component we build serves a purpose and solves a real-world problem.
                        </p>
                    </div>

                    {/* Bahagian Kanan: Grid Statistik (Guna .map logic) */}
                    <div className="grid grid-cols-2 gap-6">
                        {stats.map((stat) => (
                            <div key={stat.id} className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center hover:border-teal-400 transition duration-300">
                                <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                                <p className="text-teal-400 uppercase text-sm tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;