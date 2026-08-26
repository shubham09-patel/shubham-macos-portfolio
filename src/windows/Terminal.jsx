import { useState, useRef, useEffect } from "react";
import WindowWrapper from "#hoc/WindowWrapper";
import WindowControls from "#components/WindowControls";
import { Check, Flag } from "lucide-react";
import { techStack } from "#constants";
import useWindowStore from "#store/window";

const OPENABLE_APPS = {
  resume: "resume",
  finder: "finder",
  safari: "safari",
  photos: "photos",
  terminal: "terminal",
  contact: "contact",
};

const COMMANDS = {
  help: () => (
    <div className="space-y-1">
      <p>Available commands:</p>
      <p>
        <span className="font-mono text-blue-400">help</span> — show available commands
      </p>
      <p>
        <span className="font-mono text-blue-400">whoami</span> — display developer profile
      </p>
      <p>
        <span className="font-mono text-blue-400">skills</span> — show full tech stack
      </p>
      <p>
        <span className="font-mono text-blue-400">clear</span> — clear terminal screen
      </p>
      <p className="mt-2">Open desktop windows:</p>
      <p className="font-mono text-sm text-gray-400">
        open finder · open resume · open safari · open contact · open photos
      </p>
    </div>
  ),

  whoami: () => (
    <div className="space-y-1 text-gray-300">
      <p><span className="font-bold text-white">Name:</span> Shubham Patel</p>
      <p><span className="font-bold text-white">Role:</span> Full-Stack & iOS Developer</p>
      <p><span className="font-bold text-white">Focus:</span> Web Systems, Mobile Apps & Data Structures</p>
      <p><span className="font-bold text-white">Status:</span> Building scalable web applications & open-source tools 🚀</p>
    </div>
  ),

  skills: () => (
    <div className="space-y-3">
      {techStack.map(({ category, items }) => (
        <div key={category} className="flex gap-4">
          <Check size={16} className="text-green-500 mt-1 shrink-0" />
          <div>
            <p className="font-semibold text-white">{category}</p>
            <p className="text-sm text-gray-400">{items.join(", ")}</p>
          </div>
        </div>
      ))}

      <p className="flex items-center gap-2 text-sm text-gray-400 mt-3">
        <Flag size={14} className="text-yellow-500" /> Loaded {techStack.length} categories successfully
      </p>
    </div>
  ),
};

const Terminal = () => {
  const { openWindow } = useWindowStore();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "system", content: "Welcome to ShubhamOS Terminal (v2.4.0-arm64)" },
    { type: "system", content: "Type `help` or `whoami` to explore options." },
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const runCommand = (cmd) => {
    const normalized = cmd.trim().toLowerCase();
    if (!normalized) return;

    // clear command
    if (normalized === "clear") {
      setHistory([]);
      return;
    }

    // open <app> OR <app>
    const parts = normalized.split(" ");
    const target = parts[0] === "open" ? parts[1] : parts[0];

    if (OPENABLE_APPS[target]) {
      openWindow(OPENABLE_APPS[target]);

      setHistory((h) => [
        ...h,
        { type: "command", content: cmd },
        {
          type: "output",
          content: `Opening ${target}…`,
        },
      ]);
      return;
    }

    // built-in commands
    const commandFn =
      COMMANDS[normalized] || (normalized === "show skills" && COMMANDS.skills);

    if (commandFn) {
      setHistory((h) => [
        ...h,
        { type: "command", content: cmd },
        { type: "output", content: commandFn() },
      ]);
    } else {
      setHistory((h) => [
        ...h,
        { type: "command", content: cmd },
        {
          type: "error",
          content: `zsh: command not found: ${cmd}`,
        },
      ]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    runCommand(input);
    setInput("");
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>Terminal — zsh — 80x24</h2>
      </div>

      <div className="techstack font-mono text-sm h-[360px] overflow-y-auto p-4 space-y-2 select-text bg-[#1e1e1e] text-white rounded-b-lg">
        {history.map((item, i) => (
          <div key={i}>
            {item.type === "command" && (
              <p>
                <span className="font-bold text-green-400">shubham@macbook-air % </span>
                {item.content}
              </p>
            )}

            {item.type === "output" && (
              <div className="ml-4 text-gray-200 mt-1">{item.content}</div>
            )}

            {item.type === "error" && (
              <p className="ml-4 text-red-400">{item.content}</p>
            )}

            {item.type === "system" && (
              <p className="text-gray-400">{item.content}</p>
            )}
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex gap-2 pt-1">
          <span className="font-bold text-green-400">shubham@macbook-air %</span>
          <input
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-white caret-blue-400"
          />
        </form>

        <div ref={bottomRef} />
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");
export default TerminalWindow;