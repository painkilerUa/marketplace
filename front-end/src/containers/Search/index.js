import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/eader';
import Footer from '../../components/footer'
class Search extends Component {
    componentDidMount () {
    }

    render () {
        return (
            <Fragment>
                <Header />
                <Footer />
            </Fragment>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         orders: state.order.orders,
//         loading: state.order.loading
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         onFetchOrders: () => dispatch( actions.fetchOrders() )
//     };
// };

// export default connect( mapStateToProps, mapDispatchToProps )( withErrorHandler( Orders, axios ) );
export default Search