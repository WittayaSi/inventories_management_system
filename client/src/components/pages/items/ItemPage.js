import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getItem } from '../../../actions/itemAction'
import AddItemModal from './AddItemModal';
import ItemTable from './ItemTable'
import BreadCrumb from '../../BreadCrumb'

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
            <>
                {/* <div className="ml-auto"><h5>ชนิดวัสดุ</h5></div> */}

                <div className="ml-auto"><BreadCrumb basePage="ตั้งค่าระบบ" currentPage="ชนิดของวัสดุ" /></div>
                
                <hr style={{borderTop: '5px solid', color: "grey"}}/>

                <ItemTable items={items} />

                <br/>

                <AddItemModal />

                {/* {
                    items.map( (item, index) =>(
                        <ItemInfo item={item} key={index}/>
                    ))
                } */}
            </>
            
        )
    }
}

const mapStateToProps = state => ({
    items: state.item.items,
})

export default connect(mapStateToProps, { getItem })(ItemPage)