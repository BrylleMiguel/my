import React, { useState } from "react";
import { INFO } from "../commandList";

import { v4 as uuidv4 } from "uuid";

import { MdError } from "react-icons/md";
import { GrStatusGoodSmall } from "react-icons/gr";

export default function usePrompt(_input) {
    const [display, setDisplay] = useState([
        { id: uuidv4(), message: "to view commands, please type 'info'" },
    ]);

    React.useEffect(() => {
        const keyDownHandler = (e) => {
            if (_input && _input.length && e.key === "Enter")
                switch (_input) {
                    case "info":
                        setDisplay((prev) => [
                            ...prev,
                            {
                                id: uuidv4(),
                                prompt: (
                                    <div className="text-green-400 flex flex-row place-items-center justify-between">
                                        <div>
                                            meow@me-youser:~%{" "}
                                            <span className="pr-1"></span>
                                            {_input}
                                        </div>
                                        <GrStatusGoodSmall />
                                    </div>
                                ),
                                message: INFO,
                            },
                        ]);
                        break;

                    case "clear":
                        setDisplay([]);
                        break;

                    default:
                        setDisplay((prev) => [
                            ...prev,
                            {
                                id: uuidv4(),
                                prompt: (
                                    <div className="text-red-400 flex flex-row place-items-center justify-between">
                                        <div>
                                            meow@me-youser:~%{" "}
                                            <span className="pr-1"></span>
                                            {_input}
                                        </div>
                                        <MdError />
                                    </div>
                                ),
                                message: `command not found: "${_input}" -->  type 'info' for a list of commands`,
                            },
                        ]);
                        break;
                }
        };
        document.addEventListener("keydown", keyDownHandler);

        return () => {
            document.removeEventListener("keydown", keyDownHandler);
        };
    }, [_input, display]);

    return { display };
}
