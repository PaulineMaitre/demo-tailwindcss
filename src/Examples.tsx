import React from 'react';
import './App.css';

function Example() {
    return (
        <>
            {/*button*/}
            <div className={'btn-primary'}>Button</div>
            <div
                className={'bg-cyan-400 text-cyan-900 rounded-xl text-center'}
            >
                Button
            </div>
            <div className={'tw-btn-primary'}>Button</div>
            <div
                className={'bg-cyan-400 hover:bg-cyan-900'}
            >
                Button
            </div>
            {/*title*/}
            <div className={'big-title'}>This is a demo with Tailwind CSS</div>
                <div className={'container'}>
                <div className={'card bg-gray-500'}>1</div>
                <div className={'card bg-red-500'}>2</div>
                <div className={'card bg-green-500'}>3</div>
            </div>

            <div className={'flex flex-col md:flex-row'}>
                <div className={'card bg-gray-500'}>1</div>
                <div className={'card bg-red-500'}>2</div>
                <div className={'card bg-green-500'}>3</div>
            </div>

            <div className={'flex flex-col md:flex-row'}>
                <div className={'rounded-lg w-28 h-28 text-white font-bold text-2xl flex justify-center items-center m-4 bg-gray-500'}>1</div>
                <div className={'rounded-lg w-28 h-28 text-white font-bold text-2xl flex justify-center items-center m-4 bg-red-500'}>2</div>
                <div className={'rounded-lg w-28 h-28 text-white font-bold text-2xl flex justify-center items-center m-4 bg-green-500'}>3</div>
            </div>

            <div className={'w-[120px] text-[20px]'}>
                AAAAA
            </div>
            <div className={'w-120 text-lg'}>
                AAAAA
            </div>

        </>
    );
}

export default Example;
