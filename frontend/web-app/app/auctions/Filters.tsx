'use client'

import { useParamsStore } from '@/hooks/useParamsStore';
import { Button, ButtonGroup } from 'flowbite-react';
import React from 'react'
import { AiOutlineClockCircle, AiOutlineSortAscending } from 'react-icons/ai';
import { BsFillStopCircleFill, BsStopwatchFill } from 'react-icons/bs';
import { GiFinishLine, GiFlame } from 'react-icons/gi';
import FilterItem from './FilterItem';

type Props = {
    pageSize: number;
    setPageSize: (size: number) => void;
};

export const DefaultPageSize = 4;

const pageSizeButtons = [DefaultPageSize, DefaultPageSize * 2, DefaultPageSize * 3];

const orderButtons = [
    {
        label: 'Alphabetical',
        icon: AiOutlineSortAscending,
        value: 'make'
    }, {
        label: 'End date',
        icon: AiOutlineClockCircle,
        value: 'endingSoon'
    }, {
        label: 'Recently added',
        icon: BsFillStopCircleFill,
        value: 'new'
    },
];

const filterButtons = [
    {
        label: 'Live Auctions',
        icon: GiFlame,
        value: 'live'
    }, {
        label: 'Ending < 6 hours',
        icon: GiFinishLine,
        value: 'endingSoon'
    }, {
        label: 'Completed',
        icon: BsStopwatchFill,
        value: 'finished'
    },
];

export default function Filters() {

    const [pageSize, orderBy, filterBy, setParams] = useParamsStore(state => [state.pageSize, state.orderBy, state.filterBy, state.setParams]);

    return (
        <div className='flex justify-between items-center mb-4'>

            {/* <div>
                <span className='uppercase text-sm text-gray-500 mr-2'>Order By</span>
                <Button.Group>
                    {filterButtons.map(({ label, icon: Icon, value }) => (
                        <Button
                            key={value}
                            onClick={() => setParams({ filterBy: value })}
                            color={`${filterBy === value ? 'red' : 'gray'}`}
                            className='focus:ring-0'
                        >
                            <Icon className='mr-3 h-4 w-4' />
                            {label}
                        </Button>
                    ))}
                </Button.Group>
            </div> */}

            <FilterItem items={filterButtons} onClick={(v) => setParams({ filterBy: v })} isCurrent={(v) => v === filterBy} />

            {/* <div>
                <span className='uppercase text-sm text-gray-500 mr-2'>Order By</span>
                <Button.Group>
                    {orderButtons.map(({ label, icon: Icon, value }) => (
                        <Button
                            key={value}
                            onClick={() => setParams({ orderBy: value })}
                            color={`${orderBy === value ? 'red' : 'gray'}`}
                            className='focus:ring-0'
                        >
                        <Icon className='mr-3 h-4 w-4' />
                            {label}
                        </Button>
                    ))}
                </Button.Group>
            </div> */}

            <FilterItem items={orderButtons} onClick={(v) => setParams({ orderBy: v })} isCurrent={(v) => v === orderBy} />

            {/* <div>
                <span className='uppercase text-sm text-gray-500 mr-2'>Page Size</span>
                <Button.Group>
                    {pageSizeButtons.map((value, i) => (
                        <Button key={i}
                            onClick={() => setParams({ pageSize: value })}
                            color={`${pageSize === value ? 'red' : 'gray'}`}
                            className='focus:ring-0'
                        >
                            {value}
                        </Button>
                    ))}
                </Button.Group>
            </div> */}

            <FilterItem items={pageSizeButtons.map((b) => ({ label: b.toString(), value: b.toString() }))}
                onClick={(v) => setParams({ pageSize: parseInt(v) })}
                isCurrent={(v) => parseInt(v) === pageSize} />

        </div>
    )
}