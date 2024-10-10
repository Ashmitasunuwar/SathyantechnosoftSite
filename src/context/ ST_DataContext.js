
import { createContext, useState } from "react";

const ST_DataContext = createContext();

const Provider = ({ children }) => {
    const APIdata = [
        'All', 'Sports', 'Political', 'Puzzle and Quiz', 'Comics', 'Entertainment & lifestyle'];
    // const [headings, setHeading] = useState('');

    const data = {
        APIdata,
    }

    return (
        <ST_DataContext.Provider value={{ data }}> {children}</ST_DataContext.Provider>
    )
}

export { Provider }
export default ST_DataContext