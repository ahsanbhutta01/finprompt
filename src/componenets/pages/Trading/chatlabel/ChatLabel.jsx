import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";

const ChatLabel = ({ openMenu, setOpenMenu }) => {
   return (
      <div className='flex items-center justify-between p-2 text-white/80 hover:bg-white/10 rounded-lg text-sm group cursor-pointer'>

         <p className='group-hover:max-w-5/6 truncate'>Chat Name</p>
         <div className="group relative flex items-center justify-center size-6 aspect-square hover:bg-black/80 rounded-lg">
            <BsThreeDots className={`size-8 ${openMenu.open ? "" : "hidden"} group-hover:block`} />
            <div className={`absolute md:-right-36 -right-34 top-[1px] md:top-[0.5px] bg-gray-700 rounded-xl w-max p-2 ${openMenu.open ? "block" : "hidden"} `}>
               <section className='flex items-center gap-2 hover:bg-white/10 px-3 py-2 rounded-lg'>
                  <MdOutlineDriveFileRenameOutline className='size-5' />
                  <p>Rename</p>
               </section>
               <section className='flex items-center gap-2 hover:bg-white/10 px-3 py-2 rounded-lg'>
                  <RiDeleteBin5Line className='size-5 text-red-500' />
                  <p>Delete</p>
               </section>
            </div>
         </div>

      </div>
   )
}

export default ChatLabel
