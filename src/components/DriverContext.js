import { createContext } from "react";

// global context that is the current driver being coached
const DriverContext = createContext({
    driverObj: {},
    setDriverObj: () => {}
});

export default DriverContext;