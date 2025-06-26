

import React from 'react'

import Child from './components/Child'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/home'
import Skills from './components/Skills'
import Login from './pages/Login'

import Counter from './pages/Counter/'
import Hooks from './pages/Hooks'
import State from './Hooks/State'
import Effect from './Hooks/Effect'
import Effect2 from './Hooks/Effect2'
import Ref from './Hooks/Ref'
import Reducer from './Hooks/Reducer'
import Navbar from './components/Navbar'
import {Route,Routes} from 'react-router-dom'
import Todo from './components/Todo'
const App = () => {
  const fruits = ['Messi', 'Ronaldo', 'neymar', 'Mbappe', 'Benzema', 'Salah', 'Kane', 'Lewandowski', 'Son', 'De Bruyne'];
   var users ={username:"Deepak",password:"12345"}

  return (
    <div>
     <Navbar/>
     <Routes>
<Route path='/' element={<Home items={fruits} users={userdetails} />} />
      <Route path='/about' element={<About items={fruits} users={userdetails}/>}/>
  
      <Route path='/contact' element={<Contact/>}/>
       <Route path='/skills' element={<Skills/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route
        path='/child'
         element={<><Child name="Deepak" phonenum="1234567890" dept="IT"/>
                <Child name="Deepakk" phonenum="1234567890" dept="CSE"/>
         </>}
          />
       <Route path='/counter' element={<Counter/>}/>
<Route path='/hooks' element ={<Hooks/>}/>
<Route path='/state' element={<State/>}/>
<Route path='/effect' element={<Effect/>}/>
<Route path='/effect2' element={<Effect2/>}/>
<Route path='/ref' element={<Ref/>}/>
<Route path='/reducer' element={<Reducer/>}/>
<Route path ='/todo' element = {<Todo/>}/>


     </Routes>
    </div>
  )
}

export default App




