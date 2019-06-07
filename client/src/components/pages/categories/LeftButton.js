import React from 'react'
import { Button, Badge } from 'reactstrap'

export default function LeftButton(props) {
    const { items, id }  = props
    return (
        <Button color="link" style={{color: "black", textDecoration: "none"}} id={`${id}`}>
            {id} <Badge color={items.length > 0 ? "success" : 'danger'}> {items.length} รายการ </Badge>
        </Button>
    )
}
