import { useRef ,useEffect, useState } from "react"


export default function Information() {
   //정보 데이터------------------3
  const [airinfo, setAirinfo] =useState([]); 
  //선택된 위치---------------------------1
  const refoption =useRef();
  //선택된 위치를 useState로 랜더링 한다. ---------------------------1
  const [refuseoption, setRefuseoption] =useState([]);
  const changeselect=()=>{
            setRefuseoption(refoption.current.value)
  }

  //선택된 지역에 대한 정보 딕셔너리 (공기, 위치, 날짜 등)//------------------2
  const [tdata, setTdata] =useState([]);
  const getFetchData = (url) => {
    fetch(url)
    .then(resp => resp.json())
    .then(data => setTdata(data.getIndoorAirQualityByStation.body.items.item))
    .catch(err=>console.log(err));
  }

  //정보나열(tbody형식으로) ------------------3
  useEffect(()=>{
    if (!tdata) return
    //console.log(tdata)
    let tags= tdata.map(item=> <tr key={item.areaIndex} className='w-full flex justify-between items-center bg-slate-200
                                             text-black font-bold p-2'>
                                        <td>{item['co']==='-' ?item.co :`${item.co}ppm`}</td>
                                        <td>{item['co2']==='-' ?item.co2 :`${item.co2}ppm`}</td>
                                        <td>{item['pm10']==='-' ?item.pm10 :`${item.pm10}㎍/㎥`}</td>
                                        <td>{item['pm25']==='-' ?item.pm25 :`${item.pm25}㎍/㎥`}</td>
                </tr>
    )     
  setAirinfo(tags)

  },[tdata])
  //----------------------------------------------------------------------2
  useEffect(()=>{ 

        const dicoptags={'서면역1호선승강장':201193,   '서면역2호선대합실':202191,   '서면역2호선승강장':202192,   '사상역대합실':202271,
                             '수영역대합실':203011,   '연산역대합실':203051,   '미남역대합실':203091,
                            '덕천역대합실':203131,   '동래역4호선대합실':204021,   '남포역대합실':201111, '서면역1호선대합실':201191
                        }
        
        if (!refuseoption) return;
        console.log(refuseoption)
        
       //areaidx는 선택된 지역에 대한 코드이다. (숫자)
        let areaidx = dicoptags[refuseoption]  
        console.log(areaidx)

        let url = `http://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByStation?serviceKey=${process.env.REACT_APP_API_KEY}`
        url=url + `&pageNo=1&numOfRows=5&resultType=json&controlnumber=2024053008&areaIndex=${areaidx}`
        console.log(url)
        getFetchData(url)
    },[refuseoption])

  return (
    <div className='w-2/3 h-full flex flex-col justify-start items-center'>
            <div className='w-full flex justify-center items-center p-10'>
                 <select id='locOps' className='w-2/3 bg-slate-300' ref={refoption} onChange={changeselect}>
                    <option defaultValue=''>---지역선택---</option>  
                    <option>서면역1호선승강장</option> <option>서면역2호선대합실</option>
                    <option>서면역2호선승강장</option><option>사상역대합실</option>
                    <option>수영역대합실</option><option>연산역대합실</option>
                    <option>미남역대합실</option><option>덕천역대합실</option>
                    <option>동래역4호선대합실</option><option>남포역대합실</option><option>서면역1호선대합실</option>
                 </select>
            </div>
       
            <div className='w-full flex justify-center items-center'>
                <table className='w-full flex flex-col justify-center items-center'>
                    <thead className='w-full flex justify-center items-center'>
                        <tr className='w-full flex justify-between items-center
                         bg-slate-400 text-white font-bold p-2' key='headtitle'>
                          <td>일산화탄소(co)</td>
                          <td>이산화탄소(co2)</td>
                          <td>미세먼지(pm10)</td>
                          <td>초미세먼지(pm25)</td>
                        </tr>
                    </thead>
                    <tbody className='w-full flex justify-center items-center'>
                       {airinfo} 
                    </tbody>
                </table>
            </div>
    </div>
    
    
  )
}
