import React from 'react'

export default function ItemInfo(prop) {
    const { item } = prop
    return (
        <li>
            {item.item_name}
        </li>
    )
}
