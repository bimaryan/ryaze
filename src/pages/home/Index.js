import React from "react";
import { Link } from "react-router-dom";
import * as motion from "motion/react-client"

export default function Home() {
    const techIcons = {
        JavaScript: "fa-brands fa-js text-yellow-500",
        NodeJS: "fa-brands fa-node text-green-500",
        React: "fa-brands fa-react text-blue-500",
        TailwindCSS: "fa-brands fa-css3-alt text-blue-400",
        Bootstrap: "fa-brands fa-bootstrap text-purple-600",
        HTML: "fa-brands fa-html5 text-orange-500",
        CSS: "fa-brands fa-css3 text-blue-500",
        Laravel: "fa-brands fa-laravel text-red-500",
        MySQL: "fa-solid fa-database text-blue-500",
        Unity: "fa-brands fa-unity text-gray-800"
    };

    return (
        <>
            <main className="max-w-2xl mx-auto p-6">
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
                    <iframe
                        src="https://open.spotify.com/embed/track/3be9ACTxtcL6Zm4vJRUiPG?utm_source=generator"
                        width="100%"
                        height="100"
                        allow="autoplay"
                        title="Spotify Music Player"
                        loading="lazy"
                    ></iframe>
                    <div className="space-y-4">
                        <p className="text-lg font-medium text-gray-800 dark:text-gray-100">Find me on:</p>
                        <div className="flex gap-4">
                            <a
                                href="https://facebook.com/bima_ryan23"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-200 text-blue-600 rounded-full hover:scale-105 transition-transform"
                            >
                                <i className="fa-brands fa-facebook text-xl"></i>
                            </a>
                            <a
                                href="https://instagram.com/bima_ryan23"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-200 text-pink-500 rounded-full hover:scale-105 transition-transform"
                            >
                                <i className="fa-brands fa-instagram text-xl"></i>
                            </a>
                            <a
                                href="https://github.com/bimaryan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-200 text-gray-900 rounded-full hover:scale-105 transition-transform"
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
                        {[{ alt: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
                        { alt: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg" },
                        { alt: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
                        { alt: "TailwindCSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
                        { alt: "Bootstrap", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
                        { alt: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
                        { alt: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
                        { alt: "Unity", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" }].map((skill, index) => (
                            <img key={index} className="w-16 h-16 mx-auto" alt={skill.alt} src={skill.src} />
                        ))}
                    </div>
                </section>

                {/* Section: Projects */}
                <section className="space-y-6 mt-14">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Project</h2>
                    <div className="bg-gray-100 bg-gray-500 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md hover:scale-105 transition-transform">
                        <div className="flex justify-between items-center group">
                            <div className="flex items-center gap-3">
                                <h3 className="text-xl font-semibold dark:text-gray-200">Ball Jump - Unity</h3>
                            </div>
                            <div className="flex gap-3 items-center dark:text-gray-200">
                                {/* <Link to="https://bitly.crazygamedev.my.id" target="blank">
                                <i className="fa-solid fa-arrow-up-right-from-square text-lg"></i>
                            </Link> */}
                                <Link to="https://github.com/bimaryan/BallJump" target="blank">
                                    <i className="fa-brands fa-github text-lg"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="mt-2">
                            <p className="text-xs text-gray-500 dark:text-gray-200 font-medium">20 Januari 2022</p>
                        </div>
                    </div>

                    <div className="bg-gray-100 bg-gray-500 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md hover:scale-105 transition-transform">
                        <div className="flex justify-between items-center group">
                            <div className="flex items-center gap-3">
                                <h3 className="text-xl font-semibold dark:text-gray-200">Website Bucin</h3>
                            </div>
                            <div className="flex gap-3 items-center dark:text-gray-200">
                                <Link to="https://bimaryan.github.io/You/" target="blank">
                                    <i className="fa-solid fa-arrow-up-right-from-square text-lg"></i>
                                </Link>
                                <Link to="https://github.com/bimaryan/You" target="blank">
                                    <i className="fa-brands fa-github text-lg"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="mt-2">
                            <p className="text-xs text-gray-500 dark:text-gray-200 font-medium">22 Juni 2022</p>
                        </div>
                    </div>

                    <div className="bg-gray-100 bg-gray-500 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md hover:scale-105 transition-transform">
                        <div className="flex justify-between items-center group">
                            <div className="flex items-center gap-3">
                                <h3 className="text-xl font-semibold dark:text-gray-200">QRCODE</h3>
                            </div>
                            <div className="flex gap-3 items-center dark:text-gray-200">
                                {/* <Link to="https://bitly.crazygamedev.my.id" target="blank">
                                <i className="fa-solid fa-arrow-up-right-from-square text-lg"></i>
                            </Link> */}
                                <Link to="https://github.com/bimaryan/QRCODE" target="blank">
                                    <i className="fa-brands fa-github text-lg"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="mt-2">
                            <p className="text-xs text-gray-500 dark:text-gray-200 font-medium">10 Agustus 2022</p>
                        </div>
                    </div>

                    <div className="bg-gray-100 bg-gray-500 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md hover:scale-105 transition-transform">
                        <div className="flex justify-between items-center group">
                            <div className="flex items-center gap-3">
                                <h3 className="text-xl font-semibold dark:text-gray-200">Short Link</h3>
                            </div>
                            <div className="flex gap-3 items-center dark:text-gray-200">
                                <Link to="https://bitly.crazygamedev.my.id" target="blank">
                                    <i className="fa-solid fa-arrow-up-right-from-square text-lg"></i>
                                </Link>
                                <Link to="https://github.com/bimaryan/shortlink-beta-" target="blank">
                                    <i className="fa-brands fa-github text-lg"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="mt-2">
                            <p className="text-xs text-gray-500 dark:text-gray-200 font-medium">23 Maret 2023</p>
                        </div>
                    </div>

                    <div className="bg-gray-100 bg-gray-500 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md hover:scale-105 transition-transform">
                        <div className="flex justify-between items-center group">
                            <div className="flex items-center gap-3">
                                <h3 className="text-xl font-semibold dark:text-gray-200">Tiketing System - Extroverse</h3>
                            </div>
                            <div className="flex gap-3 items-center dark:text-gray-200">
                                {/* <Link to="https://bitly.crazygamedev.my.id" target="blank">
                                <i className="fa-solid fa-arrow-up-right-from-square text-lg"></i>
                            </Link> */}
                                <Link to="https://github.com/bimaryan/extroverse" target="blank">
                                    <i className="fa-brands fa-github text-lg"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="mt-2">
                            <p className="text-xs text-gray-500 dark:text-gray-200 font-medium">05 Oktober 2023</p>
                        </div>
                    </div>

                    <div className="bg-gray-100 bg-gray-500 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md hover:scale-105 transition-transform">
                        <div className="flex justify-between items-center group">
                            <div className="flex items-center gap-3">
                                <h3 className="text-xl font-semibold dark:text-gray-200">IT COMP - Himatif Polindra</h3>
                            </div>
                            <div className="flex gap-3 items-center dark:text-gray-200">
                                <Link to="https://himatifpolindra.vercel.app/" target="blank">
                                    <i className="fa-solid fa-arrow-up-right-from-square text-lg"></i>
                                </Link>
                                <Link to="https://github.com/bimaryan/it-comp" target="blank">
                                    <i className="fa-brands fa-github text-lg"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="mt-2">
                            <p className="text-xs text-gray-500 dark:text-gray-200 font-medium">28 Desember 2023</p>
                        </div>
                    </div>

                    <div className="bg-gray-100 bg-gray-500 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md hover:scale-105 transition-transform">
                        <div className="flex justify-between items-center group">
                            <div className="flex items-center gap-3">
                                <h3 className="text-xl font-semibold dark:text-gray-200">Crazy Gamedev</h3>
                            </div>
                            <div className="flex gap-3 items-center dark:text-gray-200">
                                <Link to="https://crazygamedev.my.id" target="blank">
                                    <i className="fa-solid fa-arrow-up-right-from-square text-lg"></i>
                                </Link>
                                {/* <Link to="https://github.com/bimaryan/kodam" target="blank">
                                <i className="fa-brands fa-github text-lg"></i>
                            </Link> */}
                            </div>
                        </div>

                        <div className="mt-2">
                            <p className="text-xs text-gray-500 dark:text-gray-200 font-medium">03 Maret 2024</p>
                        </div>
                    </div>

                    <div className="bg-gray-100 bg-gray-500 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md hover:scale-105 transition-transform">
                        <div className="flex justify-between items-center group">
                            <div className="flex items-center gap-3">
                                <h3 className="text-xl font-semibold dark:text-gray-200">Kost Kostan - Bharata.id</h3>
                            </div>
                            <div className="flex gap-3 items-center dark:text-gray-200">
                                {/* <Link to="https://crazygamedev.my.id" target="blank">
                                <i className="fa-solid fa-arrow-up-right-from-square text-lg"></i>
                            </Link> */}
                                <Link to="https://github.com/bimaryan/Bharata.id-WEB" target="blank">
                                    <i className="fa-brands fa-github text-lg"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="mt-2 flex justify-between">
                            <div>
                                <p className="text-xs text-gray-500 dark:text-gray-200 font-medium">01 April 2024</p>
                            </div>
                            <div>
                                <i className="fa-brands fa-laravel text-red-500"></i>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-100 bg-gray-500 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md hover:scale-105 transition-transform">
                        <div className="flex justify-between items-center group">
                            <div className="flex items-center gap-3">
                                <h3 className="text-xl font-semibold dark:text-gray-200">Cek Khodam</h3>
                            </div>
                            <div className="flex gap-3 items-center dark:text-gray-200">
                                {/* <Link to="https://bitly.crazygamedev.my.id" target="blank">
                                <i className="fa-solid fa-arrow-up-right-from-square text-lg"></i>
                            </Link> */}
                                <Link to="https://github.com/bimaryan/kodam" target="blank">
                                    <i className="fa-brands fa-github text-lg"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="mt-2 flex justify-between">
                            <div>
                                <p className="text-xs text-gray-500 dark:text-gray-200 font-medium">02 Juli 2024</p>
                            </div>
                            <div>
                                <i className="fa-brands fa-laravel text-red-500"></i>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-100 bg-gray-500 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md hover:scale-105 transition-transform">
                        <div className="flex justify-between items-center group">
                            <div className="flex items-center gap-3">
                                <h3 className="text-xl font-semibold dark:text-gray-200">Sipelak - Kampus Merdeka</h3>
                            </div>
                            <div className="flex gap-3 items-center dark:text-gray-200">
                                {/* <Link to="https://bitly.crazygamedev.my.id" target="blank">
                                <i className="fa-solid fa-arrow-up-right-from-square text-lg"></i>
                            </Link> */}
                                <Link to="https://github.com/bimaryan/silk" target="blank">
                                    <i className="fa-brands fa-github text-lg"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="text-sm mt-2">
                            <p>
                                Aplikasi peminajaman bahan dan alat laboratorium adalah sebuah sistem berbasis teknologi yang dirancang untuk mempermudah proses peminjaman, pengembalian, serta pengelolaan inventaris laboratorium secara digital.
                            </p>
                        </div>

                        <div className="mt-2 flex justify-between">
                            <div>
                                <p className="text-xs text-gray-500 dark:text-gray-200 font-medium">11 September 2024</p>
                            </div>
                            <div>
                                <i className="fa-brands fa-laravel text-red-500"></i>
                            </div>
                        </div>
                    </div>
                    {/* 
                <div className="flex justify-end mt-6">
                    <Link
                        to=""
                        className="px-6 py-2 text-m font-semibold dark:text-white"
                    >
                        All Projects
                    </Link>
                </div> */}
                </section>
            </main>
        </>
    );
}
