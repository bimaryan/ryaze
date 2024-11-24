import React from "react";

function Eror404() {
    return (
        <div className="p-6 mx-auto">
            <div className="flex justify-center items-center h-screen">
                <div className="bg-gray-200 dark:bg-gray-900 shadow-md rounded-lg p-6 max-w-sm text-center">
                    <div className="text-yellow-500 text-6xl mb-4">
                        <i className="fa-solid fa-triangle-exclamation"></i>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">404 - Page Not Found</h1>
                    <p className="text-gray-600 dark:text-white mb-4">
                        Maaf, halaman yang Anda cari tidak ditemukan.
                    </p>
                    <a
                        href="/"
                        className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition duration-300"
                    >
                        Kembali ke Beranda
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Eror404;
