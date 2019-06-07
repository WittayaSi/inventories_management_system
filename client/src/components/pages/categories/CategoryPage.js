import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import CategorySubTable from './CategorySubTable'
import AddCategoryModal from './AddCategoryModal';

class CategoryPage extends Component {
    static propTypes ={
        categories: PropTypes.array.isRequired
    }

    render() {
        const { categories } = this.props
        return (
            <>
                <div style={{textAlign: "center"}}><h1>Categories Page</h1></div>
                <hr />

                <AddCategoryModal />

                { 
                    categories.map((category, index) => (
                        <CategorySubTable category={category} key={index} id={category.category_name} />
                    ))
                }
            </>
        )
    }
}

const mapStateToProps = state => ({
    categories: state.category.categories
})

export default connect(mapStateToProps, null)(CategoryPage)
