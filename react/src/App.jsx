import React from 'react';
import Child from './component/Child/';
import Skills from './component/Skills';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Counter from './component/Counter';
import Login from './pages/Login';
import Navbar from './component/Navbar';
import Hooks from './pages/Hooks';
import State from './hooks/State'; 
import { Route,Routes } from 'react-router-dom';
import Effects from './hooks/Effects';
import SignUp from './pages/SignUp';
import Ref from './hooks/Ref';
import Reducer from './hooks/Reducer';
const App = () => {
  const fruits = ['Messi', 'Ronaldo', 'neymar', 'Mbappe', 'Benzema', 'Salah', 'Kane', 'Lewandowski', 'Son', 'De Bruyne'];
   var users ={username:"Deepak",password:"12345"}
  return (
  /* <div>
      <Child name="DEEPAK" ph="1234567890" dept="IT" />
      <Child name="DEEP" ph="1234567890" dept="CSE" />
      <Home items={fruits} user={users}/>
      <Skills />
      <Contact />
      <About />
      <Counter />
      <Login/>*/
<div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home items={fruits} users={users}/>}></Route>
         <Route path='/about' element={<About  items={fruits} users={users}/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
           <Route path='/skills' element={<Skills />}></Route>
           <Route
  path='/child'
  element={
    <div>
      <Child name="Deepak" ph="1234567890" dept="IT" />
      <Child name="Deep" ph="1234567890" dept="CSE" />
    </div>
  }
/>
        
           <Route path='/login' element={<Login />}></Route>
            <Route path='/counter' element={<Counter />}></Route>
            <Route path='/hooks' element={<Hooks />}></Route>
            <Route path='/state' element={<State />}></Route>
             <Route path='/effects' element={<Effects />}></Route>
             <Route path='/signup' element={<SignUp />}></Route>
             <Route path='/ref' element={<Ref />}></Route>
              <Route path='/reducer' element={<Reducer />}></Route>
</Routes>
    </div>
  )
}

export default App
