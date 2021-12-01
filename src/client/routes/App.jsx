//Import dependencies
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Import pages, containers
import { Layout } from '@containers/Layout';
import { NewUser } from '@pages/NewUser'

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path='/new-user' element={< NewUser />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export {App}
