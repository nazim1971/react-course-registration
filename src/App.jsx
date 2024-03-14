import { useState } from 'react'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'
import Storage from './Components/storage/Storage'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const totalCredit = 20;
function App() {
 
  const [datas,setDatas] = useState([]);

  const handleDatas = (i) =>{
    const findData = datas.find((d) => d.id == i.id);
    const sCreadit = datas.reduce((i,p)=> i+p.credit,0)
    
    if(sCreadit + i.credit > totalCredit){
       return toast.error(`only ${totalCredit} credit allowed `)
    }
    if(!findData){
      setDatas([...datas,i]) ;
      toast.success("Course successfully selected");
    }
    else{
       return toast.warn('Course already added')
    }
       
  }

   const handleDelete = title =>{
    const isExsit = datas.filter(item => item.id !== title)
    setDatas(isExsit)
    toast.warn('Course successfully deleted')
   }


  return (
    <div className='w-[92%] mx-auto ' >
      <Header></Header>
      <div className='flex flex-col-reverse md:flex-row gap-3 md:gap-0 md:justify-between'>
      <Courses handleDatas={handleDatas} ></Courses>
      <Storage datas={datas} handleDelete={handleDelete} ></Storage>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
