import React from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'

export default function SalesActivityCard({item}) {
  return (
    <div><Link href={item.href} className="shadow rounded-lg bg-white border border-white hover:border-slate-900 px-1 py-4 cursor-pointer flex items-center flex-col gap-3 tranistion-all duration-300">
                        <h4 className= {`font-semibold text-4xl ${item.color}`}>
                            {item.number}
                        </h4>
                        <small className="text-slate-500">
                            {item.unit}
                        </small>
                        <div className="flex items-center space-x-2">
                            <Check class ="w-4 h-4"/>
                            <span className= "uppercase">
                               {item.title}
                            </span>
                        </div>
                    </Link></div>
  )
}
