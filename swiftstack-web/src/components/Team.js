import React from 'react';

// LANGKAH PENTING: Import gambar dari folder 'images'
// Pastikan nama fail sama dengan yang awak save tadi!
import member1Img from '../images/Member1.jpeg'; // Contoh untuk frontend lead
import member2Img from '../images/Member2.jpg'; // Contoh untuk awak (logic lead)
import member3Img from '../images/Member3.jpeg'; // Contoh untuk backend lead
const teamMembers = [
    {
        id: 1,
        name: "Nur Syarafana", // Member 1
        role: "Frontend & UI Lead",
        description: "Responsible for the GUI design, layout structure, and ensuring the app looks great on mobile and desktop.",
        image: member1Img
    },
    {
        id: 2,
        name: "Izzah Nadhirah", // Ini nama awak!
        role: "Logic & Integration Lead",
        description: "The brain behind the features. Handles functional components, data mapping, and connecting the logic pieces.",
        image: member2Img
    },
    {
        id: 3,
        name: "Norisfarisha", // Member 3
        role: "Backend & DevOps Lead",
        description: "Manages the server side, deployment processes, and ensures the application runs smoothly on the cloud.",
        image: member3Img
    }
];

function Team() {
    return (
        <section id="team" className="py-20 bg-white">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Meet the Team</h2>
                <p className="text-lg text-gray-500 mt-4">The minds behind SwiftStack Solutions.</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center transform transition duration-500 hover:scale-105">

                            {/* --- INI BAHAGIAN YANG BERUBAH --- */}
                            {/* Kita guna tag <img> sekarang */}
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 rounded-full mb-6 shadow-md object-cover border-4 border-teal-400"
                            />
                            {/* -------------------------------- */}

                            <h3 className="text-2xl font-bold text-slate-800">{member.name}</h3>
                            <p className="text-teal-600 font-semibold mb-3 uppercase tracking-wide text-sm">{member.role}</p>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {member.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Team;