'use client'

import { useParamsStore } from '@/hooks/useParamsStore'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export default function Search() {
    const router = useRouter();
    const pathname = usePathname();
    const [value, setValue, setParams] = useParamsStore(state => [state.searchValue, state.setSearchValue, state.setParams]);

    function onChange(event: any) {
        setValue(event.target.value);
    }

    function search() {
        if (pathname !== '/') router.push('/');
        setParams({ searchTerm: value });
    }

    return (
        <div className='flex w-[50%] items-center border-2 rounded-full py-2 shadow-sm'>
            <input
                onKeyDown={(e: any) => { if (e.key === 'Enter') search(); }}
                value={value}
                onChange={onChange}
                type='text'
                placeholder='Search for cars by make, model or color'
                className='input-custom'
            />
            <button onClick={search}>
                <FaSearch size={34}
                    className='bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2' />
            </button>
        </div>
    )
}
