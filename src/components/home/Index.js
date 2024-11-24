import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <main className="max-w-xl mx-auto p-5 mt-4">
            <section className="space-y-6">
                <h1 className="text-gray-900 dark:text-white font-semibold text-4xl">Hi, I'm Bima Ryan Alfarizi 👋</h1>
                <p className="ext-gray-900 dark:text-white font-normal text-lg">I'm junior software engineer from indonesia.</p>
                <p className="ext-gray-900 dark:text-white font-normal text-lg">Lost in melodies 🎵 with a cup of coffee ☕ and a relaxing cigarette 🚬 at a cozy café is my routine activity.</p>
                <div className="space-y-6">
                    <p className="text-lg text-gray-900 dark:text-white font-normal">Find me on</p>
                    <div className="flex gap-2">
                        <div>
                            <a href="https://facebook.com/bima_ryan23" target="_blank" className="bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-white rounded px-4 py-2 text-lg"><i class="fa-brands fa-facebook"></i></a>
                        </div>
                        <div>
                            <a href="https://instagram.com/bima_ryan23" target="_blank" className="bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-white rounded px-4 py-2 text-lg"><i class="fa-brands fa-instagram"></i></a>
                        </div>
                        <div>
                            <a href="https://github.com/bimaryan" target="_blank" className="bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-white rounded px-4 py-2 text-lg"><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="space-y-6 mt-14">
                <h1 className="font-semibold text-3xl md:text-4xl text-gray-900 dark:text-white">Skill</h1>
                <div className="grid grid-cols-5 md:grid-cols-6 gap-5">
                    <a>
                        <img class="w-16" alt="javascript" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"></img>
                    </a>
                    <a>
                        <img class="w-16" alt="nodejs" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg" />
                    </a>
                    <a>
                        <img class="w-16" alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"></img>
                    </a>
                    <a>
                        <img class="w-16" alt="tailwindcss" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                    </a>
                    <a>
                        <img class="w-16" alt="bootstrap" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"></img>
                    </a>
                    <a>
                        <img class="w-16" alt="html" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                    </a>
                    <a>
                        <img class="w-16" alt="css" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                    </a>
                </div>
            </section>

            {/* <section className="space-y-6 mt-14">
                <h1 className="font-semibold text-3xl md:text-4xl text-gray-900 dark:text-white">Blog</h1>
            </section> */}

            <section className="space-y-6 mt-14">
                <h1 className="font-semibold text-3xl md:text-4xl text-gray-900 dark:text-white">Work</h1>
                <div className="bg-gray-100 w-full dark:bg-gray-900 border border-gray-900 dark:border-white rounded-lg p-6 w-full shadow-lg">
                    <Link to="/project" className="flex justify-between cursor-pointer">
                        <div className="flex gap-2 items-center">
                            <img class="w-5 h-5" alt="polindra" src="image/polindra.png" />
                            <p className="font-bold text-lg text-gray-900 dark:text-white">SILK</p>
                        </div>
                        <div>
                            <i class="fa-solid fa-arrow-up-right-from-square text-gray-900 dark:text-white"></i>
                        </div>
                    </Link>
                    <hr className="my-3 bg-gray-200 dark:bg-gray-900" />
                    <p className="text-sm text-gray-900 dark:text-white">Aplikasi peminajaman bahan dan alat laboratorium adalah sebuah sistem berbasis teknologi yang dirancang untuk mempermudah proses peminjaman, pengembalian, serta pengelolaan inventaris laboratorium secara digital.</p>
                    <div className="flex justify-end items-center gap-3 mt-4">
                        <div>
                            <i class="fa-brands fa-laravel text-gray-900 dark:text-white"></i>
                        </div>
                        <div>
                            <i class="fa-solid fa-database text-gray-900 dark:text-white"></i>
                        </div>
                        <div>
                            <img class="w-5" alt="tailwindcss" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                        </div>
                        <div>
                            <i class="fa-brands fa-js text-gray-900 dark:text-white"></i>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
