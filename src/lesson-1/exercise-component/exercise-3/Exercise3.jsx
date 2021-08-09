import React, { Component } from 'react'
import Carousel from './Carousel'
import Footer from './Footer'
import Header from './Header'
import ListService from './ListService'

export default class Exercise3 extends Component {
    render() {
        return (
            <div>
                <Header />
                <Carousel />
                <ListService />
                <Footer />
            </div>
        )
    }
}


