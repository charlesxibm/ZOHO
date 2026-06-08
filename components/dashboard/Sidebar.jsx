import { BaggageClaim, BarChart4, Cable, ChevronLeft, Files, Home, HomeIcon, Network, ShoppingBag, ShoppingBasket, ShoppingCart } from 'lucide-react'
import React from 'react'
import Link from "next/link";
import SubscriptionCard from './SubscriptionCard';

export default function Sidebar() {
  return (
    <div className="w-60 min-h-screen
    bg-slate-800 text-slate-50">
         {/* Top part */}
         <div className="flex flex-col">
            
            {/* Logo */}
            
            <Link href="#" className="bg-slate-900  flex space-x-2 items-center  py-4 px-2">
                <ShoppingCart />
                <span className="text-xl font-semibold">
                Inventory
                </span>
                </Link></div>
         
         {/* Links */}
            <nav className="flex flex-col gap-8 px-3 py-6">
                <Link className="flex items-center space-x-2" href="">
                <Home className="w-4 h-4" />
                <span>
                Home
                </span>
                </Link>
                <button className="flex items-center space-x-2" >
                <BaggageClaim className="w-4 h-4" />
                <span>
                Inventory
                </span>
                </button>
                <button className="flex items-center space-x-2">
                <ShoppingBasket className="w-4 h-4" />
                <span>
                Sales
                </span>
                </button>
                <button className="flex items-center space-x-2">
                <ShoppingBag className="w-4 h-4" />
                <span>
                Purchases
                </span>
                </button>

                <Link className="flex items-center space-x-2" href="">
                <Cable className="w-4 h-4" />
                <span>
                Integrations
                </span>
                </Link>
                <Link className="flex items-center space-x-2" href="">
                <BarChart4 className="w-4 h-4" />
                <span>
                Reports
                </span>
                </Link>
                 <Link className="flex items-center space-x-2" href="">
                <Files className="w-4 h-4" />
                <span>
                Documents
                </span>
                </Link>
            </nav>
            <SubscriptionCard/>
         {/* Bottom */}
         <div className="flex flex-col">
            <button className="bg-slate-900  py-4 px-24 
            flex space-x-2 items-center jistify-center">
                <ChevronLeft />
                </button>
         </div>
         {/* Subscription card */}
         {/* Footer Icon */}
         </div> 
  )
}
