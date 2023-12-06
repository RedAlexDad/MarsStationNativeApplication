import React from 'react';
import {Navigation} from "./screens/Navigation";
import {Provider} from "react-redux";
import {QueryClient, QueryClientProvider} from "react-query";
import store from "./store/store"

export default function App() {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <Navigation/>
            </Provider>
        </QueryClientProvider>
    );
}