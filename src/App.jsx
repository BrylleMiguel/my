import React, { useState } from "react";
import Display from "./components/Display";
import Form from "./components/Form";
import useForm from "./hooks/useForm";
import usePrompt from "./hooks/usePrompt";
import Typewriter from "typewriter-effect";

function App() {
    const { formInput, inputChangeHandler, clearFormData } = useForm("");
    const { display } = usePrompt(formInput);

    const [isLoading, setIsLoading] = React.useState(true);

    return (
        <React.Fragment>
            <main className="min-w-full max-w-lg min-h-screen bg-zinc-900 text-gray-300 text-sm p-3 font-mono">
                {isLoading === true ? (
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(
                                    ["accessing", "system..."].join(" ")
                                )
                                .pauseFor(1000)
                                .stop()
                                .start()
                                .callFunction(() => {
                                    setIsLoading(false);
                                });
                        }}
                    />
                ) : (
                    <>
                        <Display display={display} />
                        <Form
                            formInput={formInput}
                            inputChangeHandler={inputChangeHandler}
                            clearFormData={clearFormData}
                        />
                    </>
                )}
            </main>
        </React.Fragment>
    );
}

export default App;
