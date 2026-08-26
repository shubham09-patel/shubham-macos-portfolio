import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useLocationStore from "#store/location";
import { Search } from "lucide-react";
import clsx from "clsx";
import { locations } from "#constants";
import useWindowStore from "#store/window";
import WorkExperienceViewer from "#components/WorkExperienceViewer";

const Finder = () => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();
  const openItem = (item) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);
    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");

    openWindow(`${item.fileType}${item.kind}`, item);
  };

  const renderList = (name, items = []) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveLocation(item)}
            className={clsx(
              item.id === activeLocation?.id ? "active" : "not-active",
            )}
          >
            <img src={item.icon} className="w-4" alt={item.name || "folder"} />
            <p className="text-sm font-medium truncate whitespace-normal ">
              {item.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="finder-window">
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          {renderList("Favorites", [
            locations.work,
            locations.about,
            locations.resume,
            locations.trash,
          ])}
          {renderList("My Projects", locations.projects.children)}
        </div>
        <div className="flex-1">
          {activeLocation?.type === "work" ? (
            <WorkExperienceViewer />
          ) : (
            <ul className="content">
              {activeLocation?.children.map((item) => (
                <li
                  key={item.id}
                  className={item.position}
                  onClick={() => openItem(item)}
                >
                  <img src={item.icon} alt={item.name} />
                  <p>{item.name}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow;
