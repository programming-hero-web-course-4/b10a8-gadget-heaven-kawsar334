import done from "../assets/Group.png"

const Modal =({setOpenModal})=>{
    return(

           <div className="fixed w-full h-screen bg-[rgba(0,0,0,0.7)] top-[-0px] z-[50] flex justify-center items-center"> 
        <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <div className="w-full  text-center flex justify-center items-center flex-col">
        <img src={done}  className="w-6 h-6 "/>
    <h2 className="card-title">Payment Successfully </h2>
    <p>Thnak you for purchasing  <b>Total </b>: $1000 </p>
    </div>
    <div className="card-actions justify-end w-full my-1">
      <button className=" w-full border rounded-full px-6 py-1 bg-[lightgray] text-black"onClick={()=>setOpenModal(false)}>Close </button>
    </div>
  </div>
</div>
      </div>
    )
}


export default Modal