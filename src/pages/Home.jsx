import React from 'react';
import {FiHexagon} from "react-icons/fi";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="w-full bg-gradient-to-r from-cyan-500 to-sky-700 flex flex-col justify-center h-screen items-center text-white">
                <div className={'flex gap-3 items-center'}>
                    <FiHexagon />
                    <h1 className={'text-5xl font-black uppercase'}>School Hub</h1>
                    <FiHexagon />
                </div>


                <p className={'text-md text-slate-200'}>A place of excellence.</p>

                <Link to='/auth' className={'bg-white text-cyan-800 text-sm p-2 rounded mt-5 shadow hover:bg-cyan-500 hover:text-white ease-in duration-300'}>Enter school hub</Link>
            </div>
        </>
    );
};

export default Home;
