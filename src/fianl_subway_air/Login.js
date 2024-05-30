import { Atoms } from "./Atoms"
import { useNavigate } from "react-router-dom"
import {  useRecoilState} from "recoil";

export default function Login() {
  
  //const [sParms] = useSearchParams() ;
  //const user = sParms.get('user') ;
  const [isLogout, setIsLogout]=useRecoilState(Atoms)
  
  const navigate= useNavigate()

  const handlelogout=()=>{
    //isLogin을 false로 돌릭
    //input값 비우기
    //홈화면으로 이동
    navigate('/Home')  
    setIsLogout(false)
    localStorage.removeItem('user')
  }


  return (
    <div className='W-full h-full flex justify-center items-center'>
       <div className='W-1/2 h-1/2 flex flex-col justify-center items-center bg-slate-100'>
                <p className='p-5 font-bold  '>Wecome</p>
                <div className='W-full flex items-center justify-start'>
                <p className='p-3 font-bold ' >{localStorage.getItem('user')}님! 반갑습니다.</p>
                </div>
                <button className='inline-flex  rounded-md  bg-blue-500 text-white font-bold mt-5 p-5'
                        onClick={handlelogout}>{isLogout ? 'Sign out':'Sign in'}</button>
       </div>
    </div>
  )
}
