"use client";
import { Building2 } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import {usePathname} from "next/navigation";

export default function HomeNavbar() {
    const pathname = usePathname()

    const navLinks =[
        {
            title: "Dashboard",
            href: "/dashboard/home/overview"
        },
        
         {
            title: "Getting started",
            href: "/dashboard/home/getting-started"
        },
         {
            title: "Recent Updates",
            href: "/dashboard/home/updates"
        },

         {
            title: "Announcements",
            href: "/dashboard/home/announcements"
        },

    ];
  return (
    
    <div className=" h-32 header-bg border-b border-slate-300 ">
        <div className="flex p-5 space-x-3">
            <div className="flex w-12 h-12 rounded-lg
             bg-white items-center justify-center">
                <Building2/>
            </div>
            <div className="flex flex-col">
                <p className="text-orange-700 font-bold">Hello, Quarterly</p>
                <span className="font-bold text-white">
                    Sure
                </span>
            </div>
        </div>
         <nav className="px-5 flex space-x-4 ">
            {navLinks.map((item,i) => {
                return(
                    <Link  key={i} href={item.href} className={`${pathname===item.href? "py-1 border-b-2 border-white text-pink-700 font-bold":"py-1 text-pink-100"}`}>{item.title}</Link>
                );
            })}
        </nav> 
    </div>
  )
}
