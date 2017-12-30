import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField'
import '../css/CardCreator.css'


const level = [];
for (let i = 1; i < 41; i++) {
    level.push(<MenuItem value={i} key={i} primaryText={i} />);
}
const howMany = [];
for (let i = 1; i < 6; i++) {
    howMany.push(<MenuItem value={i} key={i} primaryText={i} />);
}

class CardCreator extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            description: '',
            type: '',
            level: undefined,
            badStuff: '',
            decrementItems: '',
            decrementLevel: '',
        }
        this.handleName = this.handleName.bind(this)
        this.handleDescription = this.handleDescription.bind(this)
        this.handleType = this.handleType.bind(this)
        this.handleLevel = this.handleLevel.bind(this)
        this.handleBadStuff = this.handleBadStuff.bind(this)
    }

    handleName = (event) => {
        this.setState({
            name: event.target.value
        })
    };
    handleDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }
    handleType = (event, index, type) => this.setState({ type });
    handleLevel = (event, index, level) => this.setState({ level });
    handleBadStuff = (event, index, badStuff) => this.setState({ badStuff });
    handleDecrementLevel = (event, index, decrementLevel) => this.setState({ decrementLevel, decrementItems: '' });
    handleDecrementItems = (event, index, decrementItems) => this.setState({ decrementItems, decrementLevel: '' });

    render() {
        console.log(this.state)
        const nameLength = 16 - this.state.name.length
        const descriptionLength = 160 - this.state.description.length

        const xSelect = <SelectField
            floatingLabelText="How Many?"
            hintText="How Many?"
            maxHeight={300}
            value={this.state.badStuff === 2 ? this.state.decrementLevel : this.state.badStuff === 3 ? this.state.decrementItems : undefined}
            onChange={this.state.badStuff === 2 ? this.handleDecrementLevel : this.state.badStuff === 3 ? this.handleDecrementItems : undefined}
        >
            {howMany}
        </SelectField >
        const xSelector = this.state.badStuff === 2 ? xSelect : this.state.badStuff === 3 ? xSelect : undefined
        return (
            <div className="container">
                <TextField
                    floatingLabelText="Card Name"
                    value={this.state.name}
                    onChange={this.handleName}
                    maxLength={16}
                    errorText={nameLength < 6 ? 'Characters Remaining: ' + nameLength : false}
                />
                <TextField
                    floatingLabelText="Card Description"
                    multiLine={true}
                    maxLength={160}
                    rowsMax={4}
                    rows={1}
                    value={this.state.description}
                    onChange={this.handleDescription}
                    errorText={descriptionLength < 60 ? 'Characters Remaining: ' + descriptionLength : false}
                />
                <SelectField
                    floatingLabelText="Card Type"
                    hintText="Card Type"
                    maxHeight={300}
                    value={this.state.type}
                    onChange={this.handleType}
                >
                    <MenuItem value={1} primaryText="Monster" />
                    <MenuItem value={2} primaryText="Curse" />
                    <MenuItem value={3} primaryText="Item" />
                    <MenuItem value={4} primaryText="Event" />
                    <MenuItem value={5} primaryText="Class" />
                </SelectField >
                <SelectField
                    floatingLabelText="Level"
                    hintText="Level"
                    disabled={this.state.type === 1 ? false : true}
                    maxHeight={300} value={this.state.level}
                    onChange={this.handleLevel}
                >
                    {level}
                </SelectField >
                <SelectField
                    floatingLabelText="Bad Stuff"
                    hintText="Bad Stuff"
                    disabled={this.state.type === 1 ? false : this.state.type === 2 ? false : true}
                    maxHeight={300}
                    value={this.state.badStuff}
                    onChange={this.handleBadStuff}
                >
                    <MenuItem value={1} primaryText="You Die" disabled={this.state.type === 1 ? false : true} />
                    <MenuItem value={2} primaryText={`Lose ${this.state.decrementLevel} Level${this.state.decrementLevel > 1 ? "s" : ''}`} />
                    <MenuItem value={3} primaryText={`Lose ${this.state.decrementItems} Item${this.state.decrementItems > 1 ? "s" : ''}`} />
                    <MenuItem value={4} primaryText="Lose All Items" />
                    <MenuItem value={5} primaryText="Lose Class" />
                </SelectField >
                {xSelector}
            </div>
        );
    }
}

export default CardCreator;