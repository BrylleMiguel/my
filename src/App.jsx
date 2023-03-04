import React, { useState } from "react";
import { commandList } from "./commandList";

import { v4 as uuidv4 } from "uuid";

import { MdError } from "react-icons/md";
import { GrStatusGoodSmall } from "react-icons/gr";

function App() {
    const [input, setInput] = useState("");
    const [displayed, setDisplayed] = useState([
        { id: uuidv4(), content: "to view commands, please type 'info'" },
    ]);

    const inputRef = React.useRef(null);

    window.addEventListener("click", () => inputRef?.current?.focus());

    React.useEffect(() => {
        const keyDownHandler = (e) => {
            if (input.length && e.key === "Enter")
                switch (input) {
                    case "info":
                        setDisplayed((prev) => [
                            ...prev,
                            {
                                id: uuidv4(),
                                prompt: (
                                    <div className="text-green-400 flex flex-row place-items-center justify-between">
                                        <div>
                                            meow@me-youser:~%{" "}
                                            <span className="pr-1"></span>
                                            {input}
                                        </div>
                                        <GrStatusGoodSmall />
                                    </div>
                                ),
                                content: commandList,
                            },
                        ]);
                        break;

                    case "clear":
                        setDisplayed([]);
                        break;

                    default:
                        setDisplayed((prev) => [
                            ...prev,
                            {
                                id: uuidv4(),
                                prompt: (
                                    <div className="text-red-400 flex flex-row place-items-center justify-between">
                                        <div>
                                            meow@me-youser:~%{" "}
                                            <span className="pr-1"></span>
                                            {input}
                                        </div>
                                        <MdError />
                                    </div>
                                ),
                                content: `command not found: "${input}" -->  type 'info' for a list of commands`,
                            },
                        ]);
                        break;
                }
        };
        document.addEventListener("keydown", keyDownHandler);

        return () => {
            document.removeEventListener("keydown", keyDownHandler);
        };
    }, [input, displayed]);

    return (
        <>
            <main className="min-w-full max-w-lg min-h-screen bg-zinc-900 text-gray-300 text-sm p-3 font-mono">
                <section>
                    {displayed &&
                        displayed.map((contents) => {
                            const { id, prompt, content } = contents;
                            return (
                                <div key={id}>
                                    <p>{prompt}</p>
                                    <pre>{content}</pre>
                                </div>
                            );
                        })}
                </section>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        setInput("");
                    }}
                >
                    <div className="flex">
                        <span className="inline-flex items-center pr-3 text-green-400">
                            meow@me-youser:~%
                        </span>
                        <input
                            type="text"
                            name="prompt"
                            id="prompt"
                            className="block w-full flex-1  text-white  border-transparent outline-none bg-inherit"
                            autoComplete="off"
                            autoFocus
                            value={input}
                            onChange={(e) => {
                                setInput(e.target.value);
                            }}
                            ref={inputRef}
                        />
                    </div>
                </form>
            </main>
        </>
    );
}

export default App;
