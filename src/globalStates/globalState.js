import React, { createContext } from 'react';

const MyContext = createContext();

export default MyContext;



export const MyProvider = (props) => {
    const [globalState, setGlobalState] = React.useState({
       showHeader: true,
       openMobile: false,
        category: null, 
        course: null,
        show: true, 
        navRoute: '',
        payementSelected: null,
        role: 0
  });
    return (
      <MyContext.Provider value={{ globalState, setGlobalState }}>
        {props.children}
      </MyContext.Provider>
    );
  };