import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
// import { myContext } from './conponents/context';
import { myContext } from './conponents/context';
import BasicModal from './conponents/modal/loginModal';
import { Home } from './pages/homepage/home';
import { Login } from './pages/loginpage/loginpage';
import { IUser } from './types/maintypes';

export const App: React.FC<{}> = () => {

    const userObject = useContext(myContext) as IUser;
    console.log(userObject);

    return (
        <>   
            <div className='App'>
                <Routes>
                    <Route path="/" element={ <Login/> } />
                    <Route path="/home" element={ <Home/> } />
                </Routes>
            </div>
        </>
    )
}




// import React, { useContext } from 'react';
// import { Route, Routes, useNavigate } from 'react-router-dom';
// import "./App.css";
// // import { myContext } from './conponents/context';
// import { myContext } from './conponents/context';
// import BasicModal from './conponents/modal/loginModal';
// import { Home } from './pages/homepage/home';
// import { Login } from './pages/loginpage/loginpage';
// import { IUser } from './types/maintypes';

// export const App: React.FC<{}> = () => {

//     const userObject = useContext(myContext) as IUser;
//     // console.log(userObject);
//     let navigate = useNavigate();
//     return (
//         <Routes>
//             <>
//             <Route path="/" element={ <Login/> } />
//             {userObject 
//             ? 
//             <Route path="/home" element={ <Home/> } /> 
//             : 
//             navigate("/")
//             }
//             </>
//         </Routes>   
//     )

// }

