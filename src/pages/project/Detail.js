import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Detail() {
    const { projectName } = useParams(); // Mengambil parameter projectName dari URL
    const [project, setProject] = useState(null);

    // Ambil data proyek berdasarkan projectName
    useEffect(() => {
        axios.get(`https://api-ryaze.bimaryan.serv00.net/api/projects/${projectName}`)
            .then((response) => {
                setProject(response.data.project);
            })
            .catch((error) => {
                console.error("Error fetching project details:", error);
            });
    }, [projectName]);

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

    if (!project) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full border-t-4 border-blue-500 w-16 h-16"></div>
                {/* Spinner CSS */}
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto p-6">
            {/* Section: Project Details */}
            <section className="space-y-6">
                <div className="flex gap-2 items-center">
                    <Link to='/projects'>
                        <i className="fa-solid fa-arrow-left text-3xl text-gray-800 dark:text-gray-100"></i>
                    </Link>
                    <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100">{project.name}</h1>
                </div>
                <img
                    className="w-full h-auto rounded-lg"
                    alt={project.name}
                    src={`https://api-ryaze.bimaryan.serv00.net/${project.image}`} // Gambar proyek dari API
                />
                <p className="text-lg text-gray-600 dark:text-gray-300">{project.description}</p>
                <div>
                    <p className="text-lg text-gray-600 dark:text-gray-300">Technologies:</p>
                    <div className="flex items-center gap-4">
                        {project.technologies.split(",").map((tech, index) => (
                            <i
                                key={index}
                                className={`${techIcons[tech.trim()] || "fa-solid fa-question text-gray-500"} text-xl`}
                                title={tech.trim()}
                            ></i>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Detail;
