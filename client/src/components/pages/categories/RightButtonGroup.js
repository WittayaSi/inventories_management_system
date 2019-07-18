import React, { Component } from 'react'
import {ButtonGroup, Button} from 'reactstrap'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { deleteCategory } from '../../../actions/categoryAction'
import UpdateCategoryModal from './UpdateCategoryModal';

class RightButtonGroup extends Component {

    static propTypes = {
        deleteCategory: PropTypes.func.isRequired
    }

    onClickDeleteCategory = (category_id) => {
        //console.log(category_id)
        this.props.deleteCategory(category_id)
    }

    render() {
        const { _id, category_name } = this.props.category
        return (
            
            <ButtonGroup className="float-right" size="sm">
                {/* delete category button */}
                <Button color="danger" onClick={ 
                    () => {
                        if (window.confirm(`คุณแน่ใจว่าต้องการลบประเภทวัสดุนี้ หากลบ วัสดุทั้งหมด จะถูกลบด้วย?`))
                            this.onClickDeleteCategory(_id)
                    }
                }>
                    ลบ
                </Button>

                {/* update category modal */}
                <UpdateCategoryModal category_name={category_name} id={_id} />

            </ButtonGroup>
        )
    }
}

export default connect(null, { deleteCategory })(RightButtonGroup)