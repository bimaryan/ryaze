import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container p-3 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="w-full p-3 bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-white shadow rounded">
                    <figure class="max-w-lg">
                        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.com/docs/images/examples/image-3@2x.jpg" alt="image description" />
                        <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Project</figcaption>
                    </figure>
                    <div className="flex gap-3">
                        <Link to="/project" className="w-full"><i class="bi bi-code-slash"></i> Project</Link>
                        <button className="ml-auto">
                            <i class="bi bi-three-dots-vertical"></i>
                        </button>
                    </div>
                </div>
                <div className="w-full p-3 bg-gray-200 dark:bg-gray-900 shadow text-gray-900 dark:text-white rounded">
                    <figure class="max-w-lg">
                        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.com/docs/images/examples/image-3@2x.jpg" alt="image description" />
                        <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">About</figcaption>
                    </figure>
                    <div className="flex gap-3">
                        <Link to="/project" className="w-full"><i class="bi bi-info-circle"></i> About</Link>
                        <button className="ml-auto">
                            <i class="bi bi-three-dots-vertical"></i>
                        </button>
                    </div>
                </div>
                <div className="w-full p-3 bg-gray-200 dark:bg-gray-900 shadow text-gray-900 dark:text-white rounded">
                    <figure class="max-w-lg">
                        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.com/docs/images/examples/image-3@2x.jpg" alt="image description" />
                        <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Contact</figcaption>
                    </figure>
                    <div className="flex gap-3">
                        <Link to="/project" className="w-full"><i class="bi bi-telephone-inbound"></i> Contact</Link>
                        <button className="ml-auto">
                            <i class="bi bi-three-dots-vertical"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
