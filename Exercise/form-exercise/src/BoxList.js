import React, { Component } from 'react'
import Box from './Box'
import uuid from 'react-uuid'
import NewBoxForm from './NewBoxForm'


export default class BoxList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boxes: [
                { color: 'blue', width: 20, height: 10, id: uuid() },
                { color: 'red', width: 20, height: 30, id: uuid() },
                { color: 'green', width: 50, height: 20, id: uuid() }
            ]
        }
    }
    addItem = (newBox) => {
        this.setState({ boxes: [...this.state.boxes, newBox] })
    }
    removeItem = (id) => {
        const newBox = this.state.boxes.filter(box => id !== box.id)
        this.setState({ boxes: newBox })
    }
    render() {
        return (
            <div>
                <h1>Box Maker Thingy</h1>
                <NewBoxForm addItem={this.addItem} />
                {this.state.boxes.map(box =>
                    <Box {...box} remove={this.removeItem} />
                )}
            </div>
        )
    }
}
