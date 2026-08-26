import BootScreen from "./BootScreen";
import LockScreen from "./LockScreen";
import {
  Navbar,
  Welcome,
  Dock,
  ClickSpark,
  Terminal,
  ScreenBlocker,
} from "#components";
import gsap from "gsap";
import { Draggable } from "gsap/draggable";
import useSystemStore from "#store/system";

import {
  Finder,
  Resume,
  Safari,
  Text,
  ImageWindow,
  ContactWindow,
  Home,
  PhotosWindow,
} from "#windows/Index";

gsap.registerPlugin(Draggable);

function App() {
  const { booting, locked } = useSystemStore();

  if (booting) {
    return (
      <BootScreen
        onFinish={() =>
          useSystemStore.setState({ booting: false, locked: true })
        }
      />
    );
  }

  if (locked) {
    return (
      <LockScreen onUnlock={() => useSystemStore.setState({ locked: false })} />
    );
  }

  return (
    <main>
      <ScreenBlocker />
      <ClickSpark
        sparkSize={16}
        sparkRadius={45}
        duration={500}
        extraScale={0.9}
      >
        <Navbar />
        <Welcome />
        <Dock />
        <Terminal />
        <Safari />
        <Resume />
        <Finder />
        <Text />
        <ImageWindow />
        <ContactWindow />
        <Home />
        <PhotosWindow />
      </ClickSpark>
    </main>
  );
}

export default App;
