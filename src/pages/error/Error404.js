import React from 'react';
import { Link } from 'react-router-dom';

function Error404() {
    return (
        <div className="flex items-center justify-center" style={{ height: "80vh" }}>
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-xl">
                <h1 className="text-6xl font-bold text-gray-900 dark:text-white">404</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">Page Not Found</p>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-300">
                    The page you are looking for doesn't exist or has been moved.
                </p>
                <Link to="/" className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Go Back to Home
                </Link>
            </div>
        </div>
    );
}

export default Error404;
