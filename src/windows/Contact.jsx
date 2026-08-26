import WindowWrapper from "#hoc/WindowWrapper";
import WindowControls from "#components/WindowControls";
import { socials } from "#constants";

const Contact = () => {
  return (
    <div className="flex flex-col w-[480px] bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
      {/* Draggable Window Header */}
      <div
        id="window-header"
        className="flex items-center justify-between border-b px-4 py-2.5 bg-gray-100 select-none cursor-grab active:cursor-grabbing shrink-0"
      >
        <WindowControls target="contact" />
        <h2 className="text-xs font-semibold text-gray-600 tracking-wide flex-1 text-center pr-12">
          Contact Me
        </h2>
      </div>

      {/* Main Body */}
      <div className="p-6 space-y-4">
        {/* Profile Avatar using Nanital4.jpeg */}
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200 shadow-sm">
          <img
            src={`${import.meta.env.BASE_URL}Nanital4.jpeg`}
            alt="Shubham Patel"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-800">Let’s Connect</h3>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            Full-stack developer obsessed with engineering scalable web applications, 
            DSA problem solving, and building creative AI-driven experiences.
          </p>
        </div>

        <div className="text-sm text-gray-700 font-medium">
          Reach me at{" "}
          <a
            href="mailto:shubh200313@gmail.com"
            className="text-blue-600 hover:underline"
          >
            shubh200313@gmail.com
          </a>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-4 gap-2.5 pt-2">
          {socials.map(({ id, text, icon, bg, link }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noreferrer"
              style={{ backgroundColor: bg }}
              className="flex flex-col justify-between p-3 rounded-xl text-white h-20 shadow-md hover:scale-105 transition duration-200"
            >
              <img src={icon} alt={text} className="w-5 h-5 invert-0" />
              <span className="text-xs font-semibold">{text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;