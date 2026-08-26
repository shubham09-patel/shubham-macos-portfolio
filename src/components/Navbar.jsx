import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants";
import useWindowStore from "#store/window";
import useSystemStore from "#store/system";
import "./Navbar.css";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  const { sleep, lock, restart, shutdown } = useSystemStore();
  console.log({ sleep, lock, restart, shutdown });

  const [appleMenuOpen, setAppleMenuOpen] = useState(false);
  const appleRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (appleRef.current && !appleRef.current.contains(e.target)) {
        setAppleMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="flex items-center gap-3">
        <div ref={appleRef} className="relative">
          <button
            type="button"
            onClick={() => setAppleMenuOpen((v) => !v)}
            className="apple-button"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/logo.svg`}
              alt="Apple"
              className="w-5 h-5"
            />
          </button>

          {appleMenuOpen && (
            <ul className="apple-menu">
              <li
                onClick={() => {
                  openWindow("contact");
                  setAppleMenuOpen(false);
                }}
              >
                About This Portfolio
              </li>
              <li>System Settings…</li>
              <li>App Store</li>
              <li
                onClick={() => {
                  sleep();
                  setAppleMenuOpen(false);
                }}
              >
                Sleep
              </li>
              <li
                onClick={() => {
                  restart();
                  setAppleMenuOpen(false);
                }}
              >
                Restart…
              </li>
              <li
                onClick={() => {
                  shutdown();
                  setAppleMenuOpen(false);
                }}
              >
                Shut Down…
              </li>
              <li
                onClick={() => {
                  lock();
                  setAppleMenuOpen(false);
                }}
              >
                Lock Screen
              </li>
            </ul>
          )}
        </div>

        <p className="font-bold">Shubham</p>

        <ul className="nav-links">
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              {name}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <ul className="flex gap-3">
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="icon-hover" alt={`icon-${id}`} />
            </li>
          ))}
        </ul>

        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
