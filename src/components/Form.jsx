import React from "react";

export default function Form({ formInput, inputChangeHandler, clearFormData }) {
    const inputRef = React.useRef(null);
    window.addEventListener("click", () => inputRef?.current?.focus());

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();

                clearFormData();
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
                    value={formInput}
                    onChange={inputChangeHandler}
                    ref={inputRef}
                />
            </div>
        </form>
    );
}
