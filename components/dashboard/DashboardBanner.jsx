"use client"
import { CreditCard, X } from 'lucide-react'
import React from 'react'
import { useState } from 'react'


export default function DashboardBanner() {
    const [hidden, setHidden] = useState(false)
  return (
    <div className={`${hidden? "hidden":"grid grid-cols-12 items-center px-11 py-6 bg-white relative" }`}>
        {/* Icon */}
        <div className="col-span-2">
        <CreditCard className=" w-16 h-16 text-slate-400"/></div>
        {/* Text */}
        <div className="col-span-6">
            <h2 className="font-bold text-xl">HELLO MR CHARLES</h2>
            <p>Please purchase a subscription for your online inventory please!!!!</p>
        </div>
        {/*  Buttom*/}
        <div className="col-span-3"><button className="py-2.5 px-8 uppercase bg-slate-900 text-white rounded-lg">
            Enable
        </button></div>
        
        {/* Close Button */}
        <button onClick={()=> setHidden(true)} className="absolute top-4 right-11">
            <X/>
        </button>
    </div>
  )
}
