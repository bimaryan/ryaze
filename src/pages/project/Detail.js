import React from "react";
import { Link } from "react-router-dom";

function Detail() {

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
        <div className="max-w-2xl mx-auto p-6">
            {/* Section: Project Details */}
            <section className="space-y-6">
                <div className="flex gap-2 items-center">
                    <Link>
                        <i className="fa-solid fa-arrow-left text-3xl text-gray-800 dark:text-gray-100">p</i>
                    </Link>
                    <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100">p</h1>
                </div>
                <img className="w-full h-auto rounded-lg"/>
                <p className="text-lg text-gray-600 dark:text-gray-300">p</p>
                <div>
                    <p className="text-lg text-gray-600 dark:text-gray-300">Technologies:</p>
                    <div className="flex items-center gap-4">
                        
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Detail;
