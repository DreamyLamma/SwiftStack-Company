import React from 'react';

const servicesData = [
    {
        id: 1,
        title: "Web Development",
        description: "We build fast, responsive, and modern websites using the latest React technology to elevate your brand presence.",
        icon: "💻"
    },
    {
        id: 2,
        title: "Mobile Apps",
        description: "Seamless Android & iOS applications designed to enhance customer engagement and business accessibility.",
        icon: "📱"
    },
    {
        id: 3,
        title: "Digital Transformation",
        description: "Digitizing manual workflows into secure, efficient, and scalable cloud-based systems to optimize operations.",
        icon: "🚀"
    }
];

function Services() {
    return (
        <section id="services" className="pt-28 pb-20 bg-gray-50">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Our Services</h2>
                <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
                Comprehensive digital solutions tailored to solve your complex business challenges.</p>
            </div>

            {/* Grid System: Mobile 1 column, Desktop 3 columns */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {servicesData.map((item) => (
                    <div key={item.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center">
                        <div className="text-6xl mb-6 bg-teal-50 p-4 rounded-full">{item.icon}</div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-3">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                ))}
             </div>
            </div>
        </section>
    );
}

export default Services;