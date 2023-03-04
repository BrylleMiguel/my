import React, { useState } from "react";
import { commandList } from "./commandList";

import { v4 as uuidv4 } from "uuid";

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
                            { id: uuidv4(), content: commandList },
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
                                content: `command not found: ${input}`,
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
            <main className="min-w-full min-h-screen bg-black text-white text-xs">
                <section>
                    {displayed &&
                        displayed.map((contents) => {
                            const { id, content } = contents;
                            return (
                                <div key={id}>
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
                        <span className="inline-flex items-center pr-3">
                            meow@me-youser %
                        </span>
                        <input
                            type="text"
                            name="prompt"
                            id="prompt"
                            className="block w-full flex-1  text-white  border-transparent outline-none bg-black"
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
