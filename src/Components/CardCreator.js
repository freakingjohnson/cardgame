import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const level = [];
for (let i = 1; i < 100; i++) {
    level.push(<MenuItem value={i} key={i} primaryText={i} />);
}

class CardCreator extends Component {
    constructor() {
        super()
        this.state = {
            type: '',
            level: undefined,

            value: 1,
        }
        this.handleType = this.handleType.bind(this)
    }

    handleType = (event, index, type) => this.setState({ type });
    handleLevel = (event, index, level) => this.setState({ level });

    render() {
        return (
            <div>
                <SelectField floatingLabelText="Card Type" hintText="Card Type" maxHeight={300} value={this.state.type} onChange={this.handleType}>
                    <MenuItem value={1} primaryText="Monster" />
                    <MenuItem value={2} primaryText="Curse" />
                    <MenuItem value={3} primaryText="Item" />
                    <MenuItem value={4} primaryText="Event" />
                    <MenuItem value={5} primaryText="Class" />
                </SelectField >
                <SelectField floatingLabelText="Level" hintText="Level" disabled={this.state.type === 1 ? false : true} maxHeight={300} value={this.state.level} onChange={this.handleLevel}>
                    {level}
                </SelectField >
                <SelectField maxHeight={300} value={this.state.value} onChange={this.handleChange}>
                    <MenuItem></MenuItem>
                </SelectField >
                <SelectField maxHeight={300} value={this.state.value} onChange={this.handleChange}>
                    <MenuItem></MenuItem>
                </SelectField >
                <SelectField maxHeight={300} value={this.state.value} onChange={this.handleChange}>
                    <MenuItem></MenuItem>
                </SelectField >
            </div>
        );
    }
}

export default CardCreator;