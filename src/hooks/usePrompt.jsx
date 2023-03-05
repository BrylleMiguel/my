import React, { useState } from "react";
import { INFO } from "../commandList";

import { v4 as uuidv4 } from "uuid";

import { MdError } from "react-icons/md";
import { GrStatusGoodSmall } from "react-icons/gr";

export default function usePrompt(_input) {
   const [display, setDisplay] = useState([
      {
         id: uuidv4(),
         message: (
            <div className="text-gray-100">to view commands: type info</div>
         ),
      },
   ]);

   React.useEffect(() => {
      const keyDownHandler = (e) => {
         if (_input && _input.length && e.key === "Enter")
            switch (_input) {
               case "info":
                  promptArray(INFO, "green", <GrStatusGoodSmall />);
                  break;

               case "brylle":
                  promptArray(
                     "Hi there, user. I am Brylle Miguel and proudly to say that I am a member of Super Inggo",
                     "green",
                     <GrStatusGoodSmall />
                  );
                  break;

               case "github":
                  promptArray(
                     "https://github.com/BrylleMiguel",
                     "green",
                     <GrStatusGoodSmall />
                  );
                  break;

               case "projects":
                  promptArray(
                     "still crafting :(",
                     "green",
                     <GrStatusGoodSmall />
                  );
                  break;

               case "clear":
                  setDisplay([]);
                  break;

               default:
                  promptArray(
                     `command not found: "${_input}", type "info" for available commands`,
                     "red",
                     <MdError />
                  );
                  break;
            }
      };
      document.addEventListener("keydown", keyDownHandler);

      return () => {
         document.removeEventListener("keydown", keyDownHandler);
      };
   }, [_input, display]);

   function promptArray(_message, _prompt_color, _icon) {
      setDisplay((prev) => [
         ...prev,
         {
            id: uuidv4(),
            prompt: (
               <div
                  className={`text-${_prompt_color}-400 flex flex-row place-items-center justify-between`}
               >
                  <div>
                     meow@me-youser:~% <span className="pr-1"></span>
                     {_input}
                  </div>
                  {_icon}
               </div>
            ),
            message: _message,
         },
      ]);
   }

   return { display };
}
