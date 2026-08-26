import { useState } from "react";
import { locations } from "#constants";

const WorkExperienceViewer = () => {
  const experiences = locations.work.children;
  const [selected, setSelected] = useState(experiences[0]);

  return (
    <div className="flex flex-1">
      {/* Middle column */}
      <div className="w-64 border-r p-4">
        <h3 className="font-semibold mb-3">Experience</h3>

        <ul className="space-y-2 text-sm">
          {experiences.map((exp) => (
            <li
              key={exp.id}
              onClick={() => setSelected(exp)}
              className={`cursor-pointer rounded px-2 py-1 transition
                ${
                  selected.id === exp.id
                    ? "bg-blue-100 text-blue-700"
                    : "hover:bg-gray-100"
                }`}
            >
              <p className="font-medium">{exp.name}</p>
              <p className="text-xs text-gray-500">{exp.company}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Right preview */}
      <div className="flex-1 p-6 text-sm text-gray-700 overflow-auto">
        <h2 className="text-lg font-bold">{selected.name}</h2>
        <p className="text-xs text-gray-500 mb-3">
          {selected.company} · {selected.duration}
        </p>

        <ul className="list-disc pl-5 space-y-1 mb-4">
          {selected.experience.description.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {selected.experience.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded bg-gray-200 text-gray-700"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceViewer;
