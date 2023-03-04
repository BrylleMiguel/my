import React from "react";

export default function useForm(_input) {
    const [formInput, setFormInput] = React.useState(_input);

    function inputChangeHandler(e) {
        setFormInput(e?.target?.value);
    }

    function clearFormData() {
        setFormInput("");
    }

    return { formInput, inputChangeHandler, clearFormData };
}
