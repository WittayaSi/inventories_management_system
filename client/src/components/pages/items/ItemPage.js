import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getItem } from '../../../actions/itemAction'
import AddItemModal from './AddItemModal';
import ItemTable from './ItemTable'
//import ItemInfo from './ItemInfo'

class ItemPage extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    }

    // componentDidMount() {
    //     this.props.getItem()
    // }

    render() {
        const { items } = this.props
        return (
            <div>
                <h1>Item page</h1>
                <hr />
                
                <AddItemModal />

                <ItemTable items={items} />
                
                {/* {
                    items.map( (item, index) =>(
                        <ItemInfo item={item} key={index}/>
                    ))
                } */}
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    items: state.item.items,
})

export default connect(mapStateToProps, { getItem })(ItemPage)