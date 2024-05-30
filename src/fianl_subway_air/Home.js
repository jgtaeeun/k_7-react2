import {  useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Atoms } from "./Atoms";
import {  useRecoilState } from "recoil";
import { useEffect } from "react";

export default function Home() {
  const refemail =useRef();
  const refpassword = useRef();

  const [isLogin, setIsLogin]=useRecoilState(Atoms);
  const navigate= useNavigate()

  const handlebt=()=>{
    
    if ((!refpassword.current.value) || (!refemail.current.value) ) {
        alert('로그인정보를 입력하세요')
        return;
    }

   
    if((refpassword.current.value===localStorage.getItem('innerpass'))  &&
      (refemail.current.value===localStorage.getItem('inneremail'))  ) 
      {
        alert('로그인성공')
        console.log(refemail.current.value , refpassword.current.value)
        setIsLogin(true)
        navigate('/Login')
        localStorage.setItem('user', refemail.current.value);
      }
    else {
      alert('회원이 아닙니다.')
      return;
    }
     // if (isLogin) {
    //   //  localStorage.removeItem('user')
    //     refpassword.current.value=''
    //     refemail.current.value=''
    //     return;
    // } 
  }  
  
  useEffect(()=>{
    localStorage.setItem('inneremail', 'seonjae');
    localStorage.setItem('innerpass', 'sol');
  },[])

  return (
    <div className='W-full h-full flex justify-center items-center'>
       <div className='W-1/2 h-1/2 flex flex-col justify-center items-center bg-slate-100'>
                <p className='p-5 font-bold  '>Sign in to your account</p>
                <div className='W-full flex items-center justify-start'>
                <p className='p-3 font-bold ' >Your email</p>
                </div>
                <input type='text' id='email' ref={refemail}
                className='bg-blue-100 p-3 rounded-md'></input>
                
                <div className='W-full flex items-center justify-start'>
                    <p className='p-3 font-bold '>Password</p>
                </div>
                <input type='text' id='email'  ref={refpassword} className='bg-blue-100 p-3 rounded-md'></input>

                <button className='inline-flex  rounded-md  bg-blue-500 text-white font-bold mt-5 p-5'
                        onClick={handlebt}>{isLogin ? 'Sign out':'Sign in'}</button>
       </div>
       
     
    </div>
  );
}
