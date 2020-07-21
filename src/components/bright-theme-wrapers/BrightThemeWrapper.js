import React,  {useState} from 'react';
import {BrightThemeContext, isBrightTheme} from "../../context/BrightTheme";

export function BrightThemeWrapper (props) {
    const {children} = props;
    const [isBrightThemeOn, setBrightTheme] = useState(isBrightTheme);

   const toggleTheme = () => {
       setBrightTheme (!isBrightThemeOn);
   };

        return (
            <BrightThemeContext.Provider value={{
                isBrightTheme: isBrightThemeOn,
                toggleTheme: toggleTheme
            }}>
                {children}
            </BrightThemeContext.Provider>
        );

}