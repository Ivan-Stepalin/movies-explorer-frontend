import './App.css';
import {Route, Switch, useHistory} from "react-router";
import {useEffect, useState} from "react";
import {Header} from "../Header/Header";
import {Main} from "../Main/Main";
import {Footer} from "../Footer/Footer";
import {Registration} from "../Registration/Registration";
import {Login} from "../Login/Login";
import {MobileMenu} from "../MobileMenu/MobileMenu";
import {Profile} from "../Profile/Profile";
import {NotFound} from "../NotFound/NotFound";
import {Movies} from "../Movies/Movies";
import {SavedMovies} from "../SavedMovies/SavedMovies";

function App() {
    const history = useHistory();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);

    function handleClickSidebar() {
        setIsOpenSidebar(true)
        console.log(`w`)
    }

    function handleClickCloseSidebar() {
        setIsOpenSidebar(false)
    }

    function handleClickLogin() {
        setIsLoggedIn(true)
        history.push('/movies')
    }

    useEffect(() => {
        console.log(isOpenSidebar)
        // setIsOpenSidebar(true)

    }, [])

    const handleClickRegistration = () => history.push('/signin');

    const handleClickLogout = () => {
        setIsLoggedIn(false)
        history.push('/signin')
    };

    return (
        <>
            <Switch>
                <Route exact path='/'>
                    <Header
                        isLoggedIn={isLoggedIn}
                        handleClickSidebar={handleClickSidebar}
                    />
                    <Main
                        isOpenSidebar={isOpenSidebar}
                    />
                    <Footer/>
                    <MobileMenu
                        isOpenSidebar={isOpenSidebar}
                        handleClickCloseSidebar={handleClickCloseSidebar}
                    />
                </Route>
                <Route path='/signin'>
                    <Login handleClickLogin={handleClickLogin}/>
                </Route>
                <Route path='/signup'>
                    <Registration
                        handleClickRegistr={handleClickRegistration}
                    />
                </Route>
                <Route path='/movies'>
                    <Header
                        handleClickSidebar={handleClickSidebar}
                        isLoggedIn={isLoggedIn}
                        handleClickLogout={handleClickLogout}
                    />
                    <Movies/>
                    <Footer/>
                    <MobileMenu
                        isOpenSidebar={isOpenSidebar}
                        handleClickCloseSidebar={handleClickCloseSidebar}
                    />
                </Route>
                <Route path='/saved-movies'>
                    <Header
                        isLoggedIn={isLoggedIn}
                        handleClickLogout={handleClickLogout}
                    />
                    <SavedMovies/>
                    <Footer/>
                    <MobileMenu
                        isOpenSidebar={isOpenSidebar}
                        handleClickCloseSidebar={handleClickCloseSidebar}
                    />
                </Route>
                <Route path='/profile'>
                    <Header
                        isLoggedIn={isLoggedIn}
                        handleClickLogout={handleClickLogout}
                    />
                    <Profile
                        handleClickLogout={handleClickLogout}
                    />
                    <MobileMenu
                        isOpenSidebar={isOpenSidebar}
                        handleClickCloseSidebar={handleClickCloseSidebar}
                    />
                </Route>
                <Route path='*'>
                    <NotFound/>
                </Route>
            </Switch>
        </>
    );
}

export default App;
