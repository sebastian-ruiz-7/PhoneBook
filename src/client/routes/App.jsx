//Import dependencies
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Import pages, containers
import { Layout } from '@containers/Layout';
import { NewUser } from '@pages/NewUser'
import { Login } from '@pages/Login';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path='/new-user'   element={< NewUser />} />
                    <Route exact path='/login'      element={< Login />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export {App}
