import React, { Component as ReactComponent} from 'react'

export default (Component) => class SingleOpenHOC extends ReactComponent {
    state = {
        openItemId: null
    }

    openItem = item => ev => {
        const openItemId = item.id === this.state.openItemId ? null : item.id
        this.setState({ openItemId })
        if (this.props.openItem) {
            this.props.openItem(item);
        }
    }

    isOpen = id => this.state.openItemId === id

    render() {
        return <Component {...this.props}
            isOpen = {this.isOpen}
            openItem = {this.openItem}
        />
    }
}