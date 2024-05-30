import { Link} from "react-router-dom";
import { Routes, Route } from "react-router-dom"
import Home from "./Home";
import Information from "./Information";
import Login from "./Login";
import { Atoms } from "./Atoms";
import { useRecoilValue } from "recoil";


export default function Main() {

  const logvalue = useRecoilValue(Atoms)
  return (
    
    <div className="h-screen flex flex-col w-full max-w-screen-lg overscroll-y-auto mx-auto p-2">
      <header className='W-full h-20 flex justify-between items-center text-xl font-bold bg-slate-100 mt-5 p-3'>
       
       <p className=' flex justify-start items-center w-1/8 p-2'>k디지털</p>
    
       <ul  className='w-3/4  bg-slate-100 flex justify-between  items-center'>
         <li className='p-2'>{logvalue ? <Link to='/Login'>홈</Link>:<Link to='/Home'>홈</Link>}</li>
         <li className='p-2'>{logvalue ? <Link to='/Information'>지하철대기정보</Link> : '지하철대기정보'}</li>
         <li className='p-2'>{logvalue ? <Link to='/Login'>로그아웃</Link>: <Link to='/Home'>로그인</Link>}</li>
       </ul>
   </header>
   <main className='grow W-full max-h-full justify-center items-center overflow-y-auto '>
     
      <div className='W-full h-full flex flex-col justify-center items-center'>  
         <Routes>
           <Route path='/Home' element={<Home />} />
           <Route path='/Information' element={<Information/>} />
           <Route path ='/Login' element={<Login />}/>
         </Routes>
        
       </div>
       
   </main>
   <footer className='h-20 flex justify-center items-center text-xl text-white bg-slate-800 '>
     <p>＠2024 k-7 digital.All rights reserved</p>
   </footer>
    </div>
  )
}
