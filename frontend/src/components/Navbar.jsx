import { useState } from "react";

function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false)

    return(
        <nav className="glass sticky top-0 z-50 px-6 py-4">
            <div className="max-w-5xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-xl font-bold text-white">
                    Mood<span className="text-green-400">Mind</span> ✦
                </div>
                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
                    <a href="/" className="hover:text-green-400 transition-colors">Home</a>
                    <a href="/history" className="hover:text-green-400 transition-colors">History</a>
                    <a href="/about" className="hover:text-green-400 transition-colors">About</a>
                </div>
                {/* Hamburger - mobile only */}
                <button
                    onClick = {() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-white text-2xl"
                >
                    {menuOpen ? 'X' : '☰'}
                </button>
                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden flex flex-col gap-4 mt-4 pb-2 text-gray-300">
                        <a href="/" className="hover:text-green-400 transition-colors">Home</a>
                        <a href="/history" className="hover:text-green-400 transition-colors">History</a>
                        <a href="/about" className="hover:text-green-400 transition-colors">About</a>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar