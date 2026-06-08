import React from 'react'

export default function InventorySummaryCard({item}) {
  return (
    <div><div className="mb-3 justify-between shadow rounded-lg bg-white border border-white hover:border-slate-900 px-3 py-2 cursor-pointer flex items-center gap-3 tranistion-all duration-300">
           <h2 className= " text-slate-900 uppercase text-sm">
                                {item.title}
                            </h2>
                            <h4 className= "font-semibold text-2xl">
                           {item.number}
                        </h4>
            </div></div>
  )
}
