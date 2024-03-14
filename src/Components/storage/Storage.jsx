/* eslint-disable react/prop-types */
import { totalCredit } from "../../App";


const Storage = ({datas,handleDelete}) => {
    const credits = datas.reduce((i,p)=> i+p.credit,0 )
    return (
        <div className="md:w-[33%] " >
            
            <div className="bg-white p-4 rounded-2xl" >
            <h1 className="text-xl font-semibold  my-3 text-blue-600" >Credit hour remaining <span className="text-red-600">{totalCredit - credits}</span>  Hr</h1>
            <hr />
           <h2 className="text-lg font-semibold my-3" >Course Name</h2>
            <div >
                {
                    datas.map((i,idx)=> <div className="flex  justify-between items-center mb-2" key={i.id}>
                        <p><span className="font-bold ">{idx+1}. </span>{i.name}</p>
                        <button onClick={()=>handleDelete(i.id)} className="btn btn-sm bg-red-500 text-white ">Delete</button>
                    </div> )
                }
                
            </div>
            
           
           <hr />
           <div className="flex justify-between items-center"> <h1 className="my-3 font-semibold" >Total credit hour: </h1>
            <p><span className="text-red-600" >{credits}</span> hr </p></div>
            <hr />
           <div className="flex justify-between items-center"> <h1 className="my-3 font-semibold" >Total price: </h1>
            <p><span className="text-red-600"> {datas.reduce((i,p)=> i+p.price,0)}</span> USD</p></div>
        </div>

        </div>
    );
};

export default Storage;