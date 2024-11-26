import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Project() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch project data from Laravel API
        axios.get("http://localhost:8000/api/projects")
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
        <main className="max-w-6xl mx-auto p-6">
            {/* Section: Projects */}
            <section className="space-y-6">
                <h1 className="text-3xl text-center font-bold text-gray-800 dark:text-gray-100">Project I Created</h1>
                {loading ? (
                    <div className="flex justify-center items-center">
                        <div className="animate-spin rounded-full border-t-4 border-blue-500 w-16 h-16"></div>
                        {/* Spinner CSS */}
                    </div>
                ) : projects.length === 0 ? (
                    <p className="text-gray-600 dark:text-gray-300">No projects available.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project) => (
                            <Link to={`/projects/${project.name}`}
                                key={project.id}
                                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md"
                            >
                                <img
                                    src={`http://localhost:8000/${project.image}`}
                                    alt={project.name}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                                    {project.name}
                                </h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
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
                            </Link>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}

export default Project;
