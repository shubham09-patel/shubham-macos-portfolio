import useWindowStore from "#store/window";

const WindowControls = ({ target }) => {
  const { closeWindow } = useWindowStore();

  return (
    <div id="window-controls" className="group flex items-center gap-2 cursor-pointer">
      <div 
        className="close flex items-center justify-center text-[9px] font-bold text-black/70 select-none" 
        onClick={() => closeWindow(target)}
        title="Close"
      >
        <span className="opacity-0 group-hover:opacity-100 transition-opacity leading-none">✕</span>
      </div>

      <div 
        className="minimize flex items-center justify-center text-[11px] font-bold text-black/70 select-none" 
        onClick={() => closeWindow(target)}
        title="Minimize"
      >
        <span className="opacity-0 group-hover:opacity-100 transition-opacity leading-none -mt-[1px]">−</span>
      </div>

      <div 
        className="maximize flex items-center justify-center text-[7px] font-bold text-black/70 select-none" 
        title="Zoom"
      >
        <span className="opacity-0 group-hover:opacity-100 transition-opacity leading-none">⤢</span>
      </div>
    </div>
  );
};

export default WindowControls;