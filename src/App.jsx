// import React from 'react'
// import {BrowserRouter,Link,Route,Routes} from 'react-router-dom';
// // import {logo} from './ai_mern_app_assets';
// const App = () => {
//   return (
//     <h1 class="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//   )
// }
// export default App

import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
//w-10 object-contain
//class="object-contain h-16 w-full"
//import logo from './ai_mern_app_assets/logo.svg';
import { Home, CreatePost } from './pages';
const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img class="object-contain h-16 w-full" src="./openai.jpg" alt="logo" />
        </Link>

        <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-blue px-4 py-2 rounded-md">Create</Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
   )
  }

export default App