import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import CategorySubTable from './CategorySubTable'
import AddCategoryModal from './AddCategoryModal';
import BreadCrumb from '../../BreadCrumb'

class CategoryPage extends Component {
    static propTypes ={
        categories: PropTypes.array.isRequired
    }

    render() {
        const { categories } = this.props
        return (
            <>
                {/* <div className="ml-auto"><h5>ประเภทวัสดุ</h5></div> */}
                
                <div className="ml-auto"><BreadCrumb basePage="ตั้งค่าระบบ" currentPage="ประเภทวัสดุ" /></div>

                <hr style={{borderTop: '5px solid', color: "grey"}}/>

                { 
                    categories.map((category, index) => (
                        <CategorySubTable category={category} key={index} id={category.category_name} />
                    ))
                }
                <br/>
                <AddCategoryModal />
            </>
        )
    }
}

const mapStateToProps = state => ({
    categories: state.category.categories
})

export default connect(mapStateToProps, null)(CategoryPage)
