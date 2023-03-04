import React, { useState } from "react";
import Display from "./components/Display";
import Form from "./components/Form";
import useForm from "./hooks/useForm";
import usePrompt from "./hooks/usePrompt";

function App() {
    const { formInput, inputChangeHandler, clearFormData } = useForm("");
    const { display } = usePrompt(formInput);

    return (
        <React.Fragment>
            <main className="min-w-full max-w-lg min-h-screen bg-zinc-900 text-gray-300 text-sm p-3 font-mono">
                <Display display={display} />
                <Form
                    formInput={formInput}
                    inputChangeHandler={inputChangeHandler}
                    clearFormData={clearFormData}
                />
            </main>
        </React.Fragment>
    );
}

export default App;
