import { Check } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import SalesActivityCard from './SalesActivityCard';
import InventorySummaryCard from './InventorySummaryCard';

export default function SalesOverview() {

    const salesActivity= [
        {
            title:"To be packed",
            number:"20",
            unit:"Qty",
            href:"#",
            color:"text-red-600"
        },
         {
            title:"To be Shipped",
            number:"20",
            unit:"Pkgs",
            href:"#",
            color:"text-blue-600"
        },
         {
            title:"To be delivered",
            number:"0",
            unit:"Pkgs",
            href:"#",
            color:"text-green-600"
        },
         {
            title:"To be Invoiced",
            number:"20",
            unit:"Qty",
            href:"#",
            color:"text-orange-600"
        }
    ]

    const inventorySummary=[ 
        {
            title:" Items in Hand",
            number: 20,

        },
        {
            title:" Quantity to be received",
            number: 20,

        },
    ];
  return (
    <div className="bg-slate-900 border-b border-slate-400 p-16 grid grid-cols-12 gap-4">
        {/* Sales Acivity */}
        <div className="border-r border-white col-span-8 p-8">
            <h2 className="mb-6 text-2xl text-white uppercase"> Sales Activity</h2>
                <div className="  pr-8 grid grid-cols-4 gap-4">
                    {/* Card */}
                    {
                        salesActivity.map((item,i)=>
                        {
                            return(
                                <SalesActivityCard item={item} key ={i} />
                            )
                        })
                    }
                    
                </div>
            </div>
            {/* Inventory Summary */}
            <div className="col-span-4 p-8">
               <h2 className="mb-6 text-2xl text-white"> Inventory Summary</h2> 
            <div className="">
           {
            inventorySummary.map((item,i)=>{        
                return(
                     <InventorySummaryCard item= {item} key ={i}/>
                )
            })
           }
            </div>
            </div>
            </div>
  )
}
