import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Helmet } from "react-helmet";
import "tailwindcss/tailwind.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Skeleton from "react-loading-skeleton"; // Import Skeleton component
import "react-loading-skeleton/dist/skeleton.css";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isScrollingUp] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const togglePlayMusic = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
      easing: "ease-in-out", // Jenis easing
      once: false, // Animasi dapat diputar ulang
    });

    setTimeout(() => {
      setIsLoading(false); // Set loading to false after 3 seconds
    }, 3000);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ryaze.my.id</title>
        <link rel="canonical" href="https://www.ryaze.my.id/" />
        <meta
          name="description"
          content="Website portofolio saya Bima Ryan Alfarizi"
        />
        <meta
          name="keywords"
          content="website portofolio ryaze bima ryan alfarizi frondend backend fullstack gamedev crazygamedev unity"
        />
      </Helmet>
      <main className="max-w-2xl mx-auto p-6 mt-14">
        {/* Section: Introduction */}
        <section className="space-y-8">
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100">
            Hi, I'm Bima Ryan Alfarizi 👋
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300">
            I'm a junior software engineer from Indonesia.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-300">
            Lost in melodies 🎵 with a cup of coffee ☕ and a relaxing cigarette
            🚬 at a cozy café is my routine activity.
          </p>

          <button
            onClick={togglePlayMusic}
            className="bg-blue-500 text-white px-4 py-2 rounded-full mb-3"
          >
            {isPlaying ? "Pause Music" : "Play Music"}
          </button>

          {isPlaying && (
            <ReactPlayer
              url="https://www.youtube.com/watch?v=4adZ7AguVcw"
              playing={isPlaying}
              controls={true}
              width="100%"
              height="360px"
            />
          )}

          <div className="space-y-4">
            <p className="text-lg font-medium text-gray-800 dark:text-gray-100">
              Find me on:
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/bima_ryan23"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-800 shadow-md text-blue-500 rounded-full hover:scale-105 transition-all border border-gray-900 dark:border-white"
              >
                <i className="fa-brands fa-facebook text-xl"></i>
              </a>
              <a
                href="https://instagram.com/bima_ryan23"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-800 shadow-md text-pink-500 rounded-full hover:scale-105 transition-all border border-gray-900 dark:border-white"
              >
                <i className="fa-brands fa-instagram text-xl"></i>
              </a>
              <a
                href="https://github.com/bimaryan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-800 shadow-md dark:text-white rounded-full hover:scale-105 transition-all border border-gray-900 dark:border-white"
              >
                <i className="fa-brands fa-github text-xl"></i>
              </a>
            </div>
          </div>
        </section>

        {/* Section: Skills */}
        <section className="space-y-6 mt-14">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            Skills
          </h2>

          {/* Marquee Kiri */}
          <div className="relative overflow-hidden whitespace-nowrap w-full">
            <div className="flex items-center gap-6 animate-marqueeLeft">
              {/* JavaScript */}
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md w-full min-w-max border border-gray-900 dark:border-white">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  className="w-8 h-8"
                />
                <p className="text-gray-900 dark:text-white">JavaScript</p>
              </div>
              {/* Node Js */}
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md w-full min-w-max border border-gray-900 dark:border-white">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg"
                  alt="Node Js"
                  className="w-8 h-8"
                />
                <p className="text-gray-900 dark:text-white">Node Js</p>
              </div>
              {/* React Js */}
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md w-full min-w-max border border-gray-900 dark:border-white">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  alt="React Js"
                  className="w-8 h-8"
                />
                <p className="text-gray-900 dark:text-white">React Js</p>
              </div>
              {/* Tailwind Css */}
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md w-full min-w-max border border-gray-900 dark:border-white">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  alt="Tailwind Css"
                  className="w-8 h-8"
                />
                <p className="text-gray-900 dark:text-white">Tailwind Css</p>
              </div>
            </div>
          </div>

          {/* Marquee Kanan */}
          <div className="relative overflow-hidden whitespace-nowrap w-full py-4">
            <div className="flex items-center gap-6 animate-marqueeRight">
              {/* Bootstrap */}
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md w-full min-w-max border border-gray-900 dark:border-white">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                  alt="Bootstrap"
                  className="w-8 h-8"
                />
                <p className="text-gray-900 dark:text-white">Bootstrap</p>
              </div>
              {/* Html */}
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md w-full min-w-max border border-gray-900 dark:border-white">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                  alt="Html"
                  className="w-8 h-8"
                />
                <p className="text-gray-900 dark:text-white">HTML</p>
              </div>
              {/* Css */}
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md w-full min-w-max border border-gray-900 dark:border-white">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                  alt="Css"
                  className="w-8 h-8"
                />
                <p className="text-gray-900 dark:text-white">CSS</p>
              </div>
              {/* Unity */}
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md w-full min-w-max border border-gray-900 dark:border-white">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg"
                  alt="Unity"
                  className="w-8 h-8"
                />
                <p className="text-gray-900 dark:text-white">Unity</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Projects */}
        <section className="space-y-6 mt-14">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            Project
          </h2>

          {isLoading ? (
            <div className="space-y-4">
              <Skeleton height={100} />
              <Skeleton height={100} />
              <Skeleton height={100} />
              <Skeleton height={100} />
              <Skeleton height={100} />
              <Skeleton height={100} />
              <Skeleton height={100} />
              <Skeleton height={100} />
              <Skeleton height={100} />
              <Skeleton height={100} />
            </div>
          ) : (
            [
              {
                title: "Ball Jump - Unity",
                date: "20 Januari 2022",
                github: "https://github.com/bimaryan/BallJump",
              },
              {
                title: "Website Bucin",
                date: "22 Juni 2022",
                link: "https://bimaryan.github.io/You/",
                github: "https://github.com/bimaryan/You",
              },
              {
                title: "QRCODE",
                date: "10 Agustus 2022",
                github: "https://github.com/bimaryan/QRCODE",
              },
              {
                title: "Short Link",
                date: "23 Maret 2023",
                link: "https://bitly.crazygamedev.my.id",
                github: "https://github.com/bimaryan/shortlink-beta-",
              },
              {
                title: "Tiketing System - Extroverse",
                date: "05 Oktober 2023",
                github: "https://github.com/bimaryan/extroverse",
              },
              {
                title: "IT COMP - Himatif Polindra",
                date: "28 Desember 2023",
                link: "https://himatifpolindra.vercel.app/",
                github: "https://github.com/bimaryan/it-comp",
              },
              {
                title: "Crazy Gamedev",
                date: "03 Maret 2024",
                link: "https://crazygamedev.my.id",
              },
              {
                title: "Kost Kostan - Bharata.id",
                date: "01 April 2024",
                github: "https://github.com/bimaryan/Bharata.id-WEB",
                tech: "laravel",
              },
              {
                title: "Cek Khodam",
                date: "02 Juli 2024",
                github: "https://github.com/bimaryan/kodam",
                tech: "laravel",
              },
              {
                title: "Sipelak - Kampus Merdeka",
                date: "11 September 2024",
                github: "https://github.com/bimaryan/silk",
                tech: "laravel",
              },
            ].map((project, index) => (
              <div
                key={index}
                className={`bg-gray-100 dark:bg-gray-800 border border-gray-900 dark:border-white rounded-lg p-6 shadow-md hover:scale-105 transition-transform ${
                  isScrollingUp ? "animate__fadeIn" : "animate__fadeOut" // Menentukan animasi keluar atau masuk
                }`}
                data-aos="fade-up"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold dark:text-gray-200">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 items-center dark:text-gray-200">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square text-lg"></i>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-github text-lg"></i>
                      </a>
                    )}
                  </div>
                </div>
                <div className="mt-2 flex justify-between">
                  <p className="text-xs text-gray-500 dark:text-gray-200 font-medium">
                    {project.date}
                  </p>
                  {project.tech === "laravel" && (
                    <i className="fa-brands fa-laravel text-red-500"></i>
                  )}
                </div>
              </div>
            ))
          )}
        </section>
      </main>
    </>
  );
}
