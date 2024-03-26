'use client'

import { ButtonGroup, Button } from 'flowbite-react'
import React from 'react'
import { IconType } from 'react-icons'

interface Item {
    label: string;
    value: string;
    icon?: IconType;
}

interface Props {
    items: Item[];
    onClick: (value: string) => void;
    isCurrent: (value: string) => boolean;
}

export default function FilterItem({ items, onClick, isCurrent }: Props) {
    return (
        <div>
            <span className='uppercase text-sm text-gray-500 mr-2'>Order By</span>
            <ButtonGroup>
                {items.map(({ label, icon: Icon, value }) => (
                    <Button
                        key={value}
                        onClick={() => onClick(value)}
                        color={`${isCurrent(value) ? 'red' : 'gray'}`}
                        className='focus:ring-0'
                    >
                        {Icon && <Icon className='mr-3 h-4 w-4' />}
                        {label}
                    </Button>
                ))}
            </ButtonGroup>
        </div>
    )
}
