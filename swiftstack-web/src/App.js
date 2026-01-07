import React, { useState } from 'react';
import Services from './components/Services';
import Team from './components/Team';
import About from './components/About';
import heroBg from './hero-bg.jpg';
// STEP 1: Import the video directly from the src folder
import heroVideo from './swiftstack-hero.mp4';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [submittedName, setSubmittedName] = useState("");

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const payload = {
            name: formData.get('userName'),
            email: formData.get('userEmail'),
            message: formData.get('userMessage'),
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            const data = await response.json();
            if (data.success) {
                setSubmittedName(payload.name);
                setShowSuccess(true);
                e.target.reset();
                setTimeout(() => setShowSuccess(false), 7000);
            }
        } catch (error) {
            console.error("Connection error:", error);
            alert("Backend server not reached. Make sure 'node server.js' is running!");
        }
    };

    return (
        <div id="home" className="font-sans antialiased text-gray-900 bg-gray-50 min-h-screen flex flex-col scroll-smooth">

            {/* --- NAV BAR --- */}
            <nav className="flex items-center justify-between flex-wrap bg-slate-900 p-6 sticky top-0 z-50 shadow-lg">
                <div className="flex items-center flex-shrink-0 text-white mr-6 cursor-pointer hover:opacity-80 transition-opacity" onClick={scrollToTop}>
                    <span className="font-bold text-2xl tracking-wider text-teal-400">SwiftStack</span>
                </div>
                <div className="block lg:hidden">
                    <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white transition duration-300">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="text-sm lg:flex-grow text-right mt-4 lg:mt-0">
                        {['Home', 'Services', 'Team', 'About Us'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-8 font-medium transition duration-300">
                                {item}
                            </a>
                        ))}
                        <a href="#contact" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-slate-900 hover:bg-teal-400 mt-4 lg:mt-0 transition duration-300">
                            Contact Us
                        </a>
                    </div>
                </div>
            </nav>

            {/* --- HERO SECTION --- */}
            <header className="relative text-white py-24 px-6 text-center overflow-hidden bg-cover bg-center" style={{ backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.8), #0f172a), url(${heroBg})` }}>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">Building the Digital Future,<br /><span className="text-teal-400">One Component at a Time.</span></h1>
                    <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">SwiftStack empowers local businesses by turning complex technical challenges into AI-driven experiences.</p>

                    <div className="w-full aspect-video bg-gray-800 rounded-xl border border-gray-700 shadow-2xl overflow-hidden relative">
                        {/* STEP 2: Use the imported heroVideo variable here */}
                        <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                            <source src={heroVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 flex-grow">
                <div id="services" className="scroll-mt-24">
                    <Services />
                </div>

                <div id="team" className="scroll-mt-24">
                    <Team />
                </div>

                <div id="about-us" className="scroll-mt-24">
                    <About />
                </div>

                {/* --- CONTACT SECTION --- */}
                <section id="contact" className="py-24 bg-gray-50 px-6 scroll-mt-24">
                    <div className="max-w-xl mx-auto text-center">
                        {showSuccess ? (
                            <div className="py-16 px-8 bg-white border-2 border-teal-400 rounded-3xl shadow-2xl animate-fade-in">
                                <div className="text-teal-500 text-7xl mb-6">✓</div>
                                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">SwiftStack Solutions</h2>
                                <p className="text-gray-600 text-xl leading-relaxed">
                                    Thank you, <span className="font-bold text-slate-900">{submittedName}</span>!
                                    Your message has been successfully routed.
                                </p>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Get in <span className="text-teal-400">Touch</span></h2>
                                <form onSubmit={handleContactSubmit} className="space-y-6 text-left bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2 ml-1 uppercase tracking-wider">Full Name</label>
                                        <input name="userName" type="text" placeholder="Enter your name" required className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-teal-400 outline-none transition-all duration-300" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2 ml-1 uppercase tracking-wider">Email Address</label>
                                        <input name="userEmail" type="email" placeholder="name@example.com" required className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-teal-400 outline-none transition-all duration-300" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2 ml-1 uppercase tracking-wider">Your Message</label>
                                        <textarea name="userMessage" rows="4" placeholder="How can we help you?" required className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-teal-400 outline-none transition-all duration-300"></textarea>
                                    </div>
                                    <button type="submit" className="w-full bg-slate-900 text-teal-400 font-black py-5 rounded-xl uppercase tracking-widest hover:bg-teal-400 hover:text-slate-900 transform hover:-translate-y-1 transition-all duration-300 shadow-xl">Send Message</button>
                                </form>
                            </>
                        )}
                    </div>
                </section>
            </main>

            <footer className="bg-slate-900 text-gray-400 py-8 text-center border-t border-gray-800">
                <p>&copy; 2026 SwiftStack Solutions. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;