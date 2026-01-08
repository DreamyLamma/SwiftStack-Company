import React, { useState } from 'react';
import Services from './components/Services';
import Team from './components/Team';
import About from './components/About';
import heroBg from './hero-bg.jpg';
import heroVideo from './swiftstack-hero.mp4';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [submittedName, setSubmittedName] = useState("");
    // New state to handle the Render "Wake up" time
    const [isSending, setIsSending] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true); // Start loading state

        const formData = new FormData(e.target);
        const payload = {
            name: formData.get('userName'),
            email: formData.get('userEmail'),
            message: formData.get('userMessage'),
        };

        try {
            // UPDATED: Now pointing to your live Render URL
            const response = await fetch('https://swiftstack-api.onrender.com/api/contact', {
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
            // Better UX for the free tier sleep mode
            alert("The secure server is currently waking up. Please wait 20 seconds and try again!");
        } finally {
            setIsSending(false); // End loading state
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
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                            {/* LEFT COLUMN: CONTACT INFO & SOCIALS */}
                            <div className="space-y-10">
                                <div>
                                    <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                                        Let's Connect <span className="text-teal-400">Personally</span>
                                    </h2>
                                    <p className="text-gray-600 text-lg">
                                        Reach out via our official channels or visit our headquarters in the tech hub.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center p-5 bg-white rounded-2xl shadow-sm border border-gray-100">
                                        <div className="bg-teal-400/10 p-3 rounded-xl mr-4 text-teal-600">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</p>
                                            <p className="text-slate-900 font-semibold text-lg">hello@swiftstack.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center p-5 bg-white rounded-2xl shadow-sm border border-gray-100">
                                        <div className="bg-teal-400/10 p-3 rounded-xl mr-4 text-teal-600">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone Support</p>
                                            <p className="text-slate-900 font-semibold text-lg">+60 (03) 8888 1234</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center p-5 bg-white rounded-2xl shadow-sm border border-gray-100">
                                        <div className="bg-teal-400/10 p-3 rounded-xl mr-4 text-teal-600">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Global HQ</p>
                                            <p className="text-slate-900 font-semibold text-lg italic">Cyberjaya Tech Park, Selangor, MY</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT COLUMN: INTERACTIVE FORM */}
                            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
                                {showSuccess ? (
                                    <div className="py-16 text-center animate-fade-in">
                                        <div className="text-teal-500 text-7xl mb-6">✓</div>
                                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Message Logged</h2>
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            Thank you, <span className="font-bold text-slate-900">{submittedName}</span>!
                                            Our system has received your inquiry.
                                        </p>
                                    </div>
                                ) : (
                                    <>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b pb-4 border-gray-50">Send a Digital Inquiry</h3>
                                        <form onSubmit={handleContactSubmit} className="space-y-5">
                                            <div>
                                                <label className="block text-xs font-black text-slate-500 mb-2 uppercase tracking-widest">Full Name</label>
                                                <input name="userName" type="text" placeholder="John Doe" required className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-teal-400 outline-none transition-all" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-black text-slate-500 mb-2 uppercase tracking-widest">Email Address</label>
                                                <input name="userEmail" type="email" placeholder="john@swiftstack.com" required className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-teal-400 outline-none transition-all" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-black text-slate-500 mb-2 uppercase tracking-widest">Project Details</label>
                                                <textarea name="userMessage" rows="4" placeholder="How can we help?" required className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-teal-400 outline-none transition-all"></textarea>
                                            </div>
                                            <button
                                                type="submit"
                                                disabled={isSending}
                                                className={`w-full text-teal-400 font-black py-5 rounded-xl uppercase tracking-widest transform transition-all duration-300 shadow-xl ${isSending ? 'bg-gray-500 cursor-not-allowed' : 'bg-slate-900 hover:bg-teal-400 hover:text-slate-900 hover:scale-[1.02]'}`}
                                            >
                                                {isSending ? "Connecting to Cloud..." : "Dispatch Message"}
                                            </button>
                                        </form>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-slate-900 text-gray-400 py-10 text-center border-t border-gray-800">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="mb-2 font-bold text-teal-400">SwiftStack Solutions</p>
                    <p className="text-sm">&copy; 2026. Built with React & Node.js. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;