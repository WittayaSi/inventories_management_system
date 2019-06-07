import React, { Component } from 'react'
import {ButtonGroup, Button} from 'reactstrap'
import UpdateCategoryModal from './UpdateCategoryModal';

export default class RightButtonGroup extends Component {

    onClickDeleteCategory = (category_id) => {
        console.log(category_id)
    }

    render() {
        const { id } = this.props
        return (
            
            <ButtonGroup className="float-right" size="sm">
                {/* delete category button */}
                <Button color="danger" onClick={ 
                    () => {
                        if (window.confirm(`Are you sure to delete this item?`))
                            this.onClickDeleteCategory(id)
                    }
                }>
                    ลบ
                </Button>

                {/* update category modal */}
                <UpdateCategoryModal />
            </ButtonGroup>
        )
    }
}
