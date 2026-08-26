import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import useWindowStore from "#store/window";

const ImageWindowContent = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <div className="flex flex-col max-h-[80vh]">
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-5 bg-white overflow-auto flex-1">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name || "image"}
            className="w-full h-auto max-h-[70vh] object-contain rounded"
          />
        )}
      </div>
    </div>
  );
};

const ImageWindow = WindowWrapper(ImageWindowContent, "imgfile");
export default ImageWindow;
