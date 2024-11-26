import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch data from Laravel API
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/projects")
            .then((response) => {
                setProjects(response.data.projects);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching projects:", error);
                setLoading(false);
            });
    }, []);

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
    };

    return (
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
                    {[{ alt: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
                    { alt: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg" },
                    { alt: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
                    { alt: "TailwindCSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
                    { alt: "Bootstrap", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
                    { alt: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
                    { alt: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" }].map((skill, index) => (
                        <img key={index} className="w-16 h-16 mx-auto" alt={skill.alt} src={skill.src} />
                    ))}
                </div>
            </section>

            {/* Section: Work */}
            <section className="space-y-6 mt-14">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Work</h2>
                {loading ? (
                    <div className="flex justify-center items-center">
                        <div className="animate-spin rounded-full border-t-4 border-blue-500 w-16 h-16"></div>
                        {/* Spinner CSS */}
                    </div>
                ) : projects.length > 0 ? (
                    <>
                        {/* Display only 2 projects */}
                        {projects.slice(0, 2).map((project) => (
                            <div
                                key={project.id}
                                className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md"
                            >
                                <Link to={`/projects/${project.name}`} className="flex justify-between items-center group">
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-500">
                                            {project.name}
                                        </h3>
                                    </div>
                                    <i className="fa-solid fa-arrow-up-right-from-square text-gray-600 dark:text-gray-400 group-hover:text-blue-500"></i>
                                </Link>
                                <hr className="my-4 border-gray-300 dark:border-gray-600" />
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    {project.sort_description}
                                </p>
                                <div className="flex justify-end items-center gap-4 mt-4">
                                    {project.technologies.split(",").map((tech, index) => (
                                        <i
                                            key={index}
                                            className={`${techIcons[tech.trim()] || "fa-solid fa-question text-gray-500"} text-xl`}
                                            title={tech.trim()} // Menampilkan tooltip nama teknologi
                                        ></i>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* "See All" Button */}
                        <div className="flex justify-end mt-6">
                            <Link
                                to="/projects"
                                className="px-6 py-2 text-m font-semibold text-white"
                            >
                                See All Projects
                            </Link>
                        </div>
                    </>
                ) : (
                    <p className="text-center text-gray-600 dark:text-gray-300">
                        No projects available at the moment. Please check back later!
                    </p>
                )}
            </section>
        </main>
    );
}

export default Home;
