import { useState, useEffect } from "react";
import { Mail, Search, MapPin } from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import { gallery, photosLinks, PLACES_LIST } from "#constants";
import useWindowStore from "#store/window";

const Photos = () => {
  const { openWindow } = useWindowStore();
  const [activeTab, setActiveTab] = useState("Library");
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  // Memories Slideshow Timer
  useEffect(() => {
    if (activeTab === "Memories") {
      const timer = setInterval(() => {
        setSlideIndex((prev) => (prev + 1) % gallery.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [activeTab]);

  // Tab Filtering Logic
  const getFilteredPhotos = () => {
    if (activeTab === "Favorites") return gallery.filter((p) => p.isFavorite);
    if (activeTab === "People") return gallery.filter((p) => p.isPeople);
    if (activeTab === "Places" && selectedPlace) {
      return gallery.filter((p) => p.place === selectedPlace);
    }
    return gallery;
  };

  const currentPhotos = getFilteredPhotos();

  return (
    <div className="flex flex-col w-[56vw] max-w-[850px] h-[78vh] max-h-[600px] bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-300">
      {/* Draggable Window Header */}
      <div 
        id="window-header" 
        className="flex items-center justify-between border-b px-4 py-2.5 bg-gray-100/90 select-none cursor-grab active:cursor-grabbing shrink-0"
      >
        <WindowControls target="photos" />
        <h2 className="text-xs font-semibold text-gray-600 tracking-wide">
          Photos — {selectedPlace ? selectedPlace.toUpperCase() : activeTab}
        </h2>
        <div className="flex items-center gap-3 text-gray-500">
          <Mail className="w-4 h-4 cursor-pointer hover:text-black transition-colors" />
          <Search className="w-4 h-4 cursor-pointer hover:text-black transition-colors" />
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* macOS Left Sidebar */}
        <div className="w-44 bg-gray-100/70 border-r border-gray-200 p-3 space-y-1 text-sm font-medium text-gray-600 select-none shrink-0">
          <h2 className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Photos
          </h2>
          <ul>
            {photosLinks.map(({ id, icon, title }) => (
              <li
                key={id}
                onClick={() => {
                  setActiveTab(title);
                  setSelectedPlace(null);
                }}
                className={`cursor-pointer flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition ${
                  activeTab === title
                    ? "bg-blue-500 text-white shadow-sm"
                    : "hover:bg-gray-200/70 text-gray-700"
                }`}
              >
                <img src={icon} alt={title} className="w-4 h-4" />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Scrollable Gallery Main Content Area */}
        <div className="flex-1 p-4 overflow-y-auto bg-white">
          {/* 1. Memories Slideshow */}
          {activeTab === "Memories" && (
            <div className="relative h-full w-full min-h-[350px] flex flex-col items-center justify-center bg-black/95 rounded-xl overflow-hidden">
              <img
                src={gallery[slideIndex]?.img}
                alt="Memory Slide"
                className="h-full w-full object-contain transition-all duration-700"
              />
              <div className="absolute bottom-4 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs">
                ✨ {gallery[slideIndex]?.title} ({slideIndex + 1} / {gallery.length})
              </div>
            </div>
          )}

          {/* 2. Places Selector Folders */}
          {activeTab === "Places" && !selectedPlace && (
            <div className="grid grid-cols-3 gap-4">
              {PLACES_LIST.map((loc) => (
                <div
                  key={loc.id}
                  onClick={() => setSelectedPlace(loc.id)}
                  className="group cursor-pointer rounded-xl overflow-hidden border border-gray-200 bg-gray-50 hover:shadow-md transition"
                >
                  <div className="h-32 overflow-hidden bg-gray-200">
                    <img
                      src={loc.cover}
                      alt={loc.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-2.5">
                    <p className="font-semibold text-gray-800 text-xs flex items-center gap-1">
                      <MapPin size={13} className="text-red-500 shrink-0" /> {loc.name}
                    </p>
                    <p className="text-[11px] text-gray-500 mt-0.5">{loc.count}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 3. Photos Grid View (Library / Favorites / People / Selected Place) */}
          {(activeTab !== "Memories" && (activeTab !== "Places" || selectedPlace)) && (
            <div>
              {selectedPlace && (
                <button
                  onClick={() => setSelectedPlace(null)}
                  className="mb-3 text-xs text-blue-600 hover:underline flex items-center gap-1 font-medium"
                >
                  ← Back to Places
                </button>
              )}
              <div className="grid grid-cols-3 gap-3 pb-4">
                {currentPhotos.map(({ id, img, title }) => (
                  <div
                    key={id}
                    className="aspect-square rounded-lg overflow-hidden border border-gray-200 bg-gray-100 cursor-pointer hover:scale-[1.02] shadow-sm transition"
                    onClick={() =>
                      openWindow("imgfile", {
                        id,
                        name: title || "Gallery image",
                        icon: `${import.meta.env.BASE_URL}images/image.png`,
                        kind: "file",
                        fileType: "img",
                        imageUrl: img,
                      })
                    }
                  >
                    <img
                      src={img}
                      alt={title || `Gallery image ${id}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");
export default PhotosWindow;