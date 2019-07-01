import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

export class BreadCrumb extends Component {
    render() {
        const { currentPage, basePage } = this.props
        return (
            <div>
                <style>
                    {
                        `.breadcrumb {
                            padding: 0rem 1rem;
                            margin-bottom: -0.5rem;
                            
                        }
                        `
                    }
                </style>

                <Breadcrumb tag="nav" listTag="div">
                    <BreadcrumbItem tag="a" href="/">หน้าหลัก</BreadcrumbItem>
                    {basePage ? <BreadcrumbItem href="#" active>{ basePage }</BreadcrumbItem> : null}
                    {currentPage ? <BreadcrumbItem href="#" active>{ currentPage }</BreadcrumbItem> : null}
                </Breadcrumb>

            </div>
        )
    }
}

export default BreadCrumb
