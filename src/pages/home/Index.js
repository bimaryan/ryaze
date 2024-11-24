import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <main className="max-w-2xl mx-auto p-6 mt-6">
            {/* Section: Introduction */}
            <section className="space-y-8">
                <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100">
                    Hi, I'm Bima Ryan Alfarizi 👋
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    I'm a junior software engineer from Indonesia.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Lost in melodies 🎵 with a cup of coffee ☕ and a relaxing cigarette 🚬 at a cozy café is my routine activity.
                </p>
                <div className="space-y-4">
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-100">Find me on:</p>
                    <div className="flex gap-4">
                        <a
                            href="https://facebook.com/bima_ryan23"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-800 text-blue-600 rounded-full hover:scale-105 transition-transform"
                        >
                            <i className="fa-brands fa-facebook text-xl"></i>
                        </a>
                        <a
                            href="https://instagram.com/bima_ryan23"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-800 text-pink-500 rounded-full hover:scale-105 transition-transform"
                        >
                            <i className="fa-brands fa-instagram text-xl"></i>
                        </a>
                        <a
                            href="https://github.com/bimaryan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full hover:scale-105 transition-transform"
                        >
                            <i className="fa-brands fa-github text-xl"></i>
                        </a>
                    </div>
                </div>
            </section>

            {/* Section: Skills */}
            <section className="space-y-6 mt-14">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Skills</h2>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-6">
                    {[
                        { alt: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
                        { alt: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg" },
                        { alt: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
                        { alt: "TailwindCSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
                        { alt: "Bootstrap", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
                        { alt: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
                        { alt: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
                    ].map((skill, index) => (
                        <img key={index} className="w-16 h-16 mx-auto" alt={skill.alt} src={skill.src} />
                    ))}
                </div>
            </section>

            {/* Section: Work */}
            <section className="space-y-6 mt-14">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Work</h2>
                <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md">
                    <Link to="/project" className="flex justify-between items-center group">
                        <div className="flex items-center gap-3">
                            <img
                                className="w-8 h-8"
                                alt="polindra"
                                src="image/polindra.png"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-500">
                                SILK
                            </h3>
                        </div>
                        <i className="fa-solid fa-arrow-up-right-from-square text-gray-600 dark:text-gray-400 group-hover:text-blue-500"></i>
                    </Link>
                    <hr className="my-4 border-gray-300 dark:border-gray-600" />
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                        Aplikasi peminjaman bahan dan alat laboratorium adalah sebuah sistem berbasis teknologi yang
                        dirancang untuk mempermudah proses peminjaman, pengembalian, serta pengelolaan inventaris laboratorium
                        secara digital.
                    </p>
                    <div className="flex justify-end items-center gap-4 mt-4">
                        <i className="fa-brands fa-laravel text-xl text-red-500"></i>
                        <i className="fa-solid fa-database text-xl text-gray-600 dark:text-gray-300"></i>
                        <img
                            className="w-6"
                            alt="tailwindcss"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                        />
                        <i className="fa-brands fa-js text-xl text-yellow-500"></i>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
