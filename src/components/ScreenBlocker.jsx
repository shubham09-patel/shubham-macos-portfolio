import { useEffect, useState } from "react";
import { Laptop } from "lucide-react";

const ScreenBlocker = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Jab window size laptop view se kam ho tab message show hoga
      if (window.innerWidth < 1024) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isSmallScreen) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-slate-950/90 backdrop-blur-xl flex flex-col items-center justify-center p-6 text-center text-white select-none">
      <div className="max-w-md p-8 rounded-3xl bg-white/5 border border-white/10 shadow-2xl space-y-5 flex flex-col items-center">
        {/* Apple/Mac style subtle icon badge */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-3xl shadow-lg shadow-blue-500/30">
          
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
            Laptop Screen Required <Laptop size={20} className="text-blue-400" />
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            This portfolio is built with **macOS inspired UI** and is best experienced on a laptop or desktop screen.
          </p>
        </div>

        <div className="pt-2">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-xs font-medium text-blue-300 border border-white/10">
            Please maximize your browser window
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScreenBlocker;
