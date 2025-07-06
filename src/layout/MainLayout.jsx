@import "tailwindcss";
@plugin "daisyui";


import  NavBar from '../components/NavBar'
Import { Outlet } from 'react-router';


const MainLayout = {} => {
return (
    <>
    <NavBar />
        <Outlet />
    
    </>
);

};
export default App;