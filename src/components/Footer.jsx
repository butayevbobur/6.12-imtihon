import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer footer-center p-5 bg-base-200 text-base-content rounded">
      <aside>
        <p>
          Copyright © 2024 - All right reserved by ACME Industries Ltd{" "}
          <a className="btn btn-primary" href="https://t.me/Bobur_200816">
            boburWeb
          </a>
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
