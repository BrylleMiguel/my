import { v4 as uuidv4 } from "uuid";

// <br /> tags have uuidv4() in them otherwise a warning/error is shown in console log when logged.
export const INFO = [
    "COMMANDS:      DESCRIPTION:",
    <br key={uuidv4()} />,
    "brylle         About me",
    <br key={uuidv4()} />,
    "github         Retrieve github link",
    <br key={uuidv4()} />,
    "projects       Show projects",
    <br key={uuidv4()} />,
    "clear          Clear the terminal",
    <br key={uuidv4()} />,
];
