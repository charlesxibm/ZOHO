import { Bell, ChevronDown, History, LayoutGrid, Plus, PlusCircle, PlusIcon, Settings, User2, Users2 } from 'lucide-react'
import React from 'react'
import SearchInput from './Searchinput'
import Image from 'next/image'

export default function Header() {
  return (
    <div className ="bg-gray-100 h-14 flex items-center justify-between px-8 border-b border-slate-200 shadow-md">
    <div className="flex gap-3">
      {/* Recent activities*/}
      <button>
        <History className ="w-6 h-6"/>
      </button>
      {/*Search*/}
      <SearchInput/>
      </div>
      <div className = "flex items-center gap-3">
      {/* Plus Icon*/}
        <div className= "pr-2 border-r border-gray-300"> 
          <button className= "p-1 bg-blue-600 rounded-lg">
          <PlusIcon className= "text-slate-50 w-4 h-4"/>
          </button>
      </div>
      <div className= "flex pr-2 border-r border-gray-300 space-x-2">
         <button className= "p-1 hover:bg-slate-200 rounded-lg">
          <Users2 className= "text-slate-900 w-4 h-4"/>
          </button>
          <button className= "p-1 hover:bg-slate-200 rounded-lg">
          <Bell className= "text-slate-900 w-4 h-4"/>
          </button>
          <button className= "p-1 hover:bg-slate-200 rounded-lg">
          <Settings className= "text-slate-900 w-4 h-4"/>
          </button>
      </div>
      
      {/* User section */}
      <div className="flex gap-3">
        <button className= "flex items-center">
          <span>
            Charles
          </span>
          <ChevronDown className= "w-4 h-4"/>
        </button>
        <button >
          <Image 
          src = "/user.png"
          alt = "user image" 
          width={96} height={96} 
          className= "rounded-full w-10 h-10 border border-slate-900"/>
        </button>
        <button>
          <LayoutGrid className="w-7 h-7 text-slate-900"/>
        </button>
      </div>
      {/*  */}
      </div>
      {/*  */}
      </div>
  )
}
