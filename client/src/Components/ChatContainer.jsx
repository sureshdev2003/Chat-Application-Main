import React, { useEffect, useRef } from 'react'
import assets, { messagesDummyData } from '../assets/assets'
import { formatMessageTime } from '../Lib/util'

const ChatContainer = ({selectedUser,setSelectedUser}) => {
   

  const scrollEnd = useRef()

  useEffect|(()=>{
    if(scrollEnd.current){
      scrollEnd.current.scrollIntoVeiw({behavior :"smooth"})
    }
  },[])
  return selectedUser?(
    <div className='h-full overflow-scroll relative backdrop-blur-lg'>
      <div className="flex items-center gap-3 py-3 mx-4 border-b border-stone-500">
         <img  src={assets.profile_martin} className='w-8 rounded-full' alt="" />
         <p className='flex-1 text-lg text-white flex items-center gap-2'>
          Sri Kannan
          <span className='w-2 h-2 rounded-full bg-green-500'></span></p>
         <img onClick={()=>setSelectedUser(null)} src={assets.arrow_icon} className='md:hidden max-w-7' alt="" />
         <img src={assets.help_icon} className='max-md:hidden max-w-5'/>
              
      </div>
      {/* Chat Area  */}
      <div className='flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3 pb-6'>
        {messagesDummyData.map((msg,index)=>(
          <div key={index} className={`flex items-end gap-2 justify-end ${msg.senderId !== '680f50e4f10f3cd28382ecf9' && 'flex-row-reverse'}`}>
               {msg.image ? (
                <img src={msg.image} className='max-w-[230px] border border-gary-700 rounder-lg overflow-hidden mb-8'/>
               ):(
                <p className={`p-2 max-w-[200px] md:text-sm font-light
                  rounded-lg mb-8 break-all bg-violet-500/30 text-white ${msg.senderId === '680f50e4f10f3cd28382ecf9'?'rounded-br-none':'rounded-bl-none'}`}>{msg.text }</p>
               
               )}

               <div className='text-center text-xs'>
                <img src={msg.senderId==='680f50e4f10f3cd28382ecf9'?assets.avatar_icon:assets.profile_martin} alt="" className='w-7 rounded-full'/>
                  <p className='text-white'>{formatMessageTime(msg.createdAt)  }</p>
                </div>

            </div>
        ))}   
        <div ref={scrollEnd}>

        </div>
      </div>
      {/* Bottom Area */}
       <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 p-3">
        <div className="flex-1 flex items-center bg-gray-100/12 px-3 rounded-full">
         <input type='text' className='flex-1 text-sm p-3 border-none rounded-lg outline-none text-white placeholder-gray-400' placeholder='Send Message here...' />
        <input type='file' id="image" accept='image/png,image/jpeg,image/jpg' hidden/>
        <label htmlFor="image">
          <img src={assets.gallery_icon} className='w-5 mr-2 cursor-pointer' />
        </label >
        </div>
        <img src={assets.send_button} className='w-7 cursor-pointer'/>
        </div>       
    </div>
  ):(
    <div className='flex flex-col items-center justify-center  gap-2 text-gray-500 bg-white/10 max-md:hidden'>
      <img src={assets.logo_icon} className='max-w-16'/>
      <p className='text-lg font-medium text-white'> Chat Anytime, With Your Friends Anywhere </p>
    </div>
  )
}

export default ChatContainer