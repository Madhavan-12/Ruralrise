// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-green-100 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold tracking-wide">🌾 Rural Rise</h2>
        <p className="mt-2 text-sm">
          Empowering communities with growth rooted in nature 🌱
        </p>

        <div className="flex justify-center gap-6 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-yellow-300">
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-yellow-300">
            Instagram
          </a>
          <a href="mailto:ruralrise@email.com" className="hover:text-yellow-300">
            Email
          </a>
        </div>

        <p className="mt-6 text-xs text-green-300">
          © {new Date().getFullYear()} Rural Rise. Growing with Nature 🌍
        </p>
      </div>
    </footer>
  );
};

export default Footer;
