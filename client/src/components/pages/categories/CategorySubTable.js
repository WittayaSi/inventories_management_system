import React, { Component } from 'react'
import { UncontrolledCollapse, Button, CardBody, Card, CardHeader, ButtonGroup, Badge } from 'reactstrap';

import ItemTable from '../items/ItemTable'
import RightButtonGroup from './RightButtonGroup'
import LeftButton from './LeftButton'

class CategorySubTable extends Component {

    
    render(){
        const { category, id } = this.props
        const category_id = category._id
        let items = []
        items = category.category_items.reduce((a, b) => {
            // create new array 
            let item = {
                category_id,
                ...b
            }
            return a.concat(item)
        },[])

        return (
            <div id="accordion">
                <Card>
                    <CardHeader>
                        <LeftButton items={items} id={id} />
                        <RightButtonGroup id={category_id}/>
                    </CardHeader>
                    <UncontrolledCollapse toggler={`#${id}`} data-parent="#accordion">
                        {
                            items.length > 0 ? (
                                <CardBody>
                                    <ItemTable items={items} />
                                </CardBody>
                            ) : ''
                        }
                    </UncontrolledCollapse>
                </Card>
            </div>
        )
    }
}


export default CategorySubTable
