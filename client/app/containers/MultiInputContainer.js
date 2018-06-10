import React, { Component, PropTypes } from 'react';

import MultiInput from '../components/MultiInput';

export default class MultiInputContainer extends Component {
    constructor(props) {
        super(props);
        let itemsWithEmptyItem = this.props.items;
        itemsWithEmptyItem = itemsWithEmptyItem.map((item) => ({
            ...item,
            isFocused: false
        }));
        itemsWithEmptyItem.push({
            label: '',
            value: '',
            isFocused: false
        });
        this.state = {
            items: itemsWithEmptyItem
        };
        this.focusItem = this.focusItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    focusItem(focusedItemIndex) {
        this.setState({
            items: this.state.items.map((item, index) => {
                if (focusedItemIndex === index) {
                    let updatedItem = item;
                    updatedItem.isFocused = true;
                    return updatedItem;
                } else {
                    let updatedItem = item;
                    updatedItem.isFocused = false;
                    return updatedItem;
                }
            })
        });
    }

    updateItem(updatedItemIndex, value) {
        this.setState({
            items: this.state.items.map((item, index) => {
                if (updatedItemIndex === index) {
                    let updatedItem = item;
                    updatedItem.value = value;
                    return updatedItem;
                } else {
                    return item;
                }
            })
        });
    }

    deleteItem(deletedItemIndex) {
        this.setState({
            items: this.state.items.filter((item, index) => (deletedItemIndex !== index ? item : null))
        });
    }

    addItem() {
        let newItems = this.state.items.slice(0, this.state.items.length - 1);
        newItems.push({
            label: this.state.items[this.state.items.length - 1].value,
            value: '',
            isFocused: true
        });
        newItems.push({
            label: '',
            value: '',
            isFocused: false
        });
        this.setState({
            items: newItems
        });
    }

    render() {
        return (
            <MultiInput
                text={"test"}
                items={this.state.items}
                focusItem={this.focusItem}
                updateItem={this.updateItem}
                addItem={this.addItem}
                deleteItem={this.deleteItem}
                onChange={this.props.onChange}
            />
        );
    }
}

MultiInputContainer.PropTypes = {
    items: PropTypes.string,
    onChange: PropTypes.func
};
