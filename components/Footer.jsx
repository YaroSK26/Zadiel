import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">
              Tourist Accommodation Zádiel
            </h3>
            <p className="text-gray-400">Your comfortable stay in nature</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400">© 2024 All rights reserved</p>
            <a
              href="https://www.jaroslav.website/"
              target="_blank"
              className="underline"
            >
              Jaroslav Barabáš
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
