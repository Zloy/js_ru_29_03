import React, { Component, PropTypes } from 'react'

export default (Component, store) => class AppContainer extends Component {

    constructor() {
        super();
        this.state = this.__getState()
    }

    __getState() {
        return {
            items: store.getAll()
        }
    }

    __changeItems = () => {
        this.setState(this.__getState())
    }

    componentDidMount() {
        store.addChangeListener(this.__changeItems)
    }

    componentWillUnmount() {
        store.removeChangeListener(this.__changeItems)
    }

    render() {
        return (
            <Component {...this.props} items = {store.getAll()} />
        )
    }
}