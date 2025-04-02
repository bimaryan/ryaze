import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy as lightTheme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { dracula as darkTheme } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function V2() {
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await fetch("/resume.json");
        if (!response.ok) {
          throw new Error("Failed to fetch resume data");
        }
        const data = await response.json();
        setResume(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResume();
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(resume, null, 2));
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Reset success message after 2 seconds
    } catch (err) {
      setCopySuccess(false);
      console.error("Failed to copy text: ", err);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="text-lg font-semibold text-gray-600 dark:text-white">
          Loading...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="text-lg font-semibold text-red-600">{`Error: ${error}`}</div>
      </div>
    );
  }

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
          content="website portofolio ryaze bima ryan alfarizi frontend backend fullstack gamedev crazygamedev unity"
        />
      </Helmet>
      <div className="max-w-screen-xl p-4 mx-auto mt-14">
        <div className="bg-white shadow-xl rounded-xl p-4 dark:bg-gray-800">
          {/* card header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="dark:text-white text-lg font-bold">My Resume</h1>
            </div>
            <div>
              <button
                className="px-3 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl"
                onClick={copyToClipboard}
              >
                {copySuccess ? (
                  <span className="text-green-500">Copied!</span>
                ) : (
                  <i className="fa-regular fa-copy"></i>
                )}
              </button>
            </div>
          </div>
          {/* ends card header */}

          <hr className="dark:text-white text-gray-900 my-4" />

          {/* card body */}
          <SyntaxHighlighter
            language="json"
            style={isDarkMode ? darkTheme : lightTheme}
            wrapLongLines
          >
            {JSON.stringify(resume, null, 2)}
          </SyntaxHighlighter>
          {/* ends card body */}
        </div>
      </div>
    </>
  );
}
