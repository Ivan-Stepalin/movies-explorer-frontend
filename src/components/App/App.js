import './App.css';
import {Route, Switch, useHistory, useRouteMatch} from "react-router";
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
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {ProtectedRoute} from "../ProtectedRoute/ProtectedRoute";
import MainApi from "../../utils/MainApi";
import {MORE_BUTTON_RESOLUTION_SETTINGS} from "../../utils/constants";
import {useFormWithValidation} from "../../utils/customHooks";

function App() {
    const history = useHistory();
    const [currentUser, setCurrentUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [errorText, setErrorText] = useState('');
    const [state, setState] = useState({
        movieList: [],
        savedMovieList: [],
        movieSearch: '',
        movieSearchSubmitClick: false,
        savedMovieSearch: '',
        movieSavedSearchSubmitClick: false,
        filteredMoviesList: [],
        filteredSavedMovieList: [],
        numberMovies: MORE_BUTTON_RESOLUTION_SETTINGS.big.default,
        addNumberMovies: MORE_BUTTON_RESOLUTION_SETTINGS.big.grow,
        disableInputs: false,
    })

    const tokenCheck = (token) => {
        return MainApi.checkUserToken(token)
            .then((res) => {
                if (res) {
                    setCurrentUser(res);
                    setIsLoggedIn(true);
                    history.push('/movies');
                } else {
                    // Promise.reject();
                }
            })
            .catch((err) => console.log(`Ошибка ${err.status}: ${err.message}`))
    };

    const handleTextError = (message) => {
        setErrorText(message);
        setTimeout(() => setErrorText(''), 5000);
    }

    function handleClickSidebar() {
        setIsOpenSidebar(true)
    }

    function handleClickCloseSidebar() {
        setIsOpenSidebar(false)
    }

    // function handleClickLogin() {
    //     setIsLoggedIn(true)
    //     history.push('/movies')
    // }

    // useEffect(() => {
    //     console.log(isOpenSidebar)
    //     setIsOpenSidebar(true)
    //
    // }, [])

    // const handleClickRegistration = () => history.push('/signin');

    const handleClickLogin = (data) => {
        const {email, password} = data;
        setState({...state, disableInputs: true});
        return MainApi.login(email, password)
            .then((data) => {
                localStorage.setItem('jwt', data.token);
                tokenCheck(data.token);
            })
            .catch((err) => {
                if (err && err === 'Ошибка 401' ) {
                    handleTextError('Неверный логин или пароль');
                } else if (err && err === 'Ошибка 400') {
                    handleTextError('Проверьте формат данных');
                } else {
                    handleTextError('Ошибка выполнения команды. Попробуйте снова.');
                }
            })
            .finally(() => setState({...state, disableInputs: false}));
    };

    const handleClickRegistration = (data) => {
        const {name, email, password} = data;
        setState({...state, disableInputs: true});
        return MainApi.register(name, email, password)
            .then(() => {
                return handleClickLogin({email, password});
            })
            .catch((err) => {
                if (err && err === 'Ошибка 409') {
                    handleTextError('Пользователь с таким email уже существует');
                } else if (err.status && err.status === 'Ошибка 400') {
                    handleTextError('Проверьте формат данных');
                } else {
                    handleTextError('Ошибка выполнения команды. Попробуйте снова.');
                }
            })
            .finally(() => setState({...state, disableInputs: false}));
    };

    const handleClickLogout = () => {
        localStorage.removeItem('jwt');
        setIsLoggedIn(false);
        setCurrentUser(null);
        history.push('/');
    };

    return (
        <CurrentUserContext.Provider value={currentUser}>
            {
                useRouteMatch(['/signin', '/signup']) ? '' : (
                    <>
                        <Header
                            isLoggedIn={isLoggedIn}
                            handleClickSidebar={handleClickSidebar}
                        />
                        <MobileMenu
                            isOperSidebar={isOpenSidebar}
                            handleClickCloseSidebar={handleClickCloseSidebar}
                        />
                    </>
                )
            }
            <Switch>
                <Route exact path='/'>
                    <Route exact path={'/'}>
                        <Main
                            isOpenSidebar={isOpenSidebar}
                        />
                    </Route>
                    <MobileMenu
                        isOpenSidebar={isOpenSidebar}
                        handleClickCloseSidebar={handleClickCloseSidebar}
                    />
                </Route>
                <Route path='/signin'>
                    <Login
                        state={state}
                        handleClickLogin={handleClickLogin}
                        useFormWithValidation={useFormWithValidation}
                        errorText={errorText}
                    />
                </Route>
                <Route path='/signup'>
                    <Registration
                        errorText={errorText}
                        state={state}
                        handleClickRegistration={handleClickRegistration}
                        useFormWithValidation={useFormWithValidation}
                    />
                </Route>
                <ProtectedRoute
                    exect path={'/movies'}
                    isLoggedIn={isLoggedIn}
                    component={Movies}
                    state={state}
                    setState={setState}
                    // handleClickSaveMovie={handleClickSaveMovie}
                    // handleClickRemoveSavedMovie={handleClickRemoveSavedMovie}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                />
                <ProtectedRoute
                    exact path='/saved-movies'
                    isLoggedIn={isLoggedIn}
                    component={SavedMovies}
                />
                <ProtectedRoute
                    exact path='/profile'
                    isLoggedIn={isLoggedIn}
                    component={Profile}
                    handleClickLogout={handleClickLogout}
                />
                <Route path='*'>
                    <NotFound/>
                </Route>
                {
                    useRouteMatch(['/signin', '/signup', '/profile',]) ? '' : (<Footer/>)
                }
            </Switch>
        </CurrentUserContext.Provider>
        // <>
        //     <Switch>
        //         <Route exact path='/'>
        //             <Header
        //                 isLoggedIn={isLoggedIn}
        //                 handleClickSidebar={handleClickSidebar}
        //             />
        //             <Main
        //                 isOpenSidebar={isOpenSidebar}
        //             />
        //             <Footer/>
        //             <MobileMenu
        //                 isOpenSidebar={isOpenSidebar}
        //                 handleClickCloseSidebar={handleClickCloseSidebar}
        //             />
        //         </Route>
        //         <Route path='/signin'>
        //             <Login handleClickLogin={handleClickLogin}/>
        //         </Route>
        //         <Route path='/signup'>
        //             <Registration
        //                 handleClickRegistr={handleClickRegistration}
        //             />
        //         </Route>
        //         <Route path='/movies'>
        //             <Header
        //                 handleClickSidebar={handleClickSidebar}
        //                 isLoggedIn={isLoggedIn}
        //                 handleClickLogout={handleClickLogout}
        //             />
        //             <Movies/>
        //             <Footer/>
        //             <MobileMenu
        //                 isOpenSidebar={isOpenSidebar}
        //                 handleClickCloseSidebar={handleClickCloseSidebar}
        //             />
        //         </Route>
        //         <Route path='/saved-movies'>
        //             <Header
        //                 isLoggedIn={isLoggedIn}
        //                 handleClickLogout={handleClickLogout}
        //             />
        //             <SavedMovies/>
        //             <Footer/>
        //             <MobileMenu
        //                 isOpenSidebar={isOpenSidebar}
        //                 handleClickCloseSidebar={handleClickCloseSidebar}
        //             />
        //         </Route>
        //         <Route path='/profile'>
        //             <Header
        //                 isLoggedIn={isLoggedIn}
        //                 handleClickLogout={handleClickLogout}
        //             />
        //             <Profile
        //                 handleClickLogout={handleClickLogout}
        //             />
        //             <MobileMenu
        //                 isOpenSidebar={isOpenSidebar}
        //                 handleClickCloseSidebar={handleClickCloseSidebar}
        //             />
        //         </Route>
        //         <Route path='*'>
        //             <NotFound/>
        //         </Route>
        //     </Switch>
        // </>
    );
}

export default App;
