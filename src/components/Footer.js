import React from "react";

function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-center py-4">
            <p className="text-sm text-gray-600 dark:text-gray-300">
                © 2024 - {new Date().getFullYear()} Ryaze. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
