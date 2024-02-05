import { createContext, useContext, useState } from "react";

const UtilityContext = createContext();

const UtilityContextProvider = ({ children }) => {
    const [fullSidebar, setFullSidebar] = useState(false);
    const [mobileSidebar, setMobileSidebar] = useState(false);


    return (
        <UtilityContext.Provider
            value={{
                fullSidebar, setFullSidebar,
                mobileSidebar, setMobileSidebar,
            }}
        >
            {children}
        </UtilityContext.Provider>
    );
};

const useUtilityContext = () => useContext(UtilityContext);

export { UtilityContext, UtilityContextProvider, useUtilityContext };