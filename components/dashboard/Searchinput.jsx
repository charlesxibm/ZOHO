import { Search } from 'lucide-react'
import React from 'react'

export default function SearchInput() {
  return (
    <form>
         <label htmlFor="simple-search" class="sr-only">Search</label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search ClassName="w-4 h-4
            text-gray-500
            dark:text-gray-400"/>
        </div>
        <input type="text" id="simple-search" className="px-2 py-1.5 bg-neutral-secondary-medium border border-default-medium rounded-base ps-12 text-heading text-sm focus:ring-brand focus:border-brand block w-full placeholder:text-body" placeholder="Search in Customers..." required/>
    </div>
    </form>
  )
}
