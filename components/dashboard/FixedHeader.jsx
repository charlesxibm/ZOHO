import { HelpCircle, LayoutGrid, List, MoreHorizontal, PlusIcon } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

export default function FixedHeader({newLink}) {
   return (
    <div className ="flex justify-between items-center bg-slate-400 py-7 px-5" >
        <button className="text-4xl">
        All Items</button>
        <div className="flex gap-3">
            {/* New */}
           <Link href={newLink} className= "p-1 bg-blue-600 rounded-sm flex items-center px-3">
          <PlusIcon className= "text-slate-50 w-4 h-4"/>
          <span>
            New
          </span>
          </Link>
            {/* Layout */}
            <div className="flex rounded-md overflow-hidden">
                <button className= "bg-slate-300 p-2 border-r border-slate-600">
                    <List className="w-4 h-4"/>
                    </button>
                    <button className= "bg-slate-500 p-2 ">
                    <LayoutGrid className="w-4 h-4"/>
                    </button>
            </div>
            {/* More */}
            <button className= "bg-slate-500 p-2 rounded-md">
                <MoreHorizontal className="w-4 h-4"/>
            </button>
            {/* Help */}
             <button className= "bg-orange-500 p-2 rounded-md ">
                <HelpCircle className="w-5 h-5 text-white"/>
            </button>
            </div></div>
  )
}
