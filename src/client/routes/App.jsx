//Import dependencies
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Import pages, containers
import { Layout } from '@containers/Layout';
import { NewUser } from '@pages/NewUser'
import { Login } from '@pages/Login';
import { Home } from '../pages/Home';
import { AppContext } from '../context/AppContext';

import { useInitialState } from '@hooks/useInitialState';
const App = () => {
    const initialState=useInitialState()
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path='/'        element={< Home />} />
                        <Route exact path='/home'        element={< Home />} />
                        <Route exact path='/new-user'   element={< NewUser />} />
                        <Route exact path='/login'      element={< Login />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export {App}
