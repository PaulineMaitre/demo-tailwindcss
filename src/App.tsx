import React from 'react';
import './App.css';
import TwBusinessCard from "./TwBusinessCard";
import BusinessCard from "./BusinessCard";

function App() {
    return (
        <>
            {/*<Example/>*/}
            <div className={'w-screen h-screen flex bg-slate-100'}>
                <BusinessCard/>
                {/*<TwBusinessCard/>*/}
            </div>
        </>
    );
}

export default App;
