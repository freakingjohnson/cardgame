import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField'
import { connect } from "react-redux"
import { handleName, handleDescription, handleType, handleItemType, handleLevel, handleBadStuff, handleHowMany } from "../ducks/cardReducer"
import Upload from './Upload'
import '../css/CardCreator.css'



const levels = [];
for (let i = 1; i < 41; i++) {
    levels.push(<MenuItem value={i} key={i} primaryText={i} />);
}
const howManyArray = [];
for (let i = 1; i < 6; i++) {
    howManyArray.push(<MenuItem value={i} key={i} primaryText={i} />);
}

export class CardCreator extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         picture: ''
    //     }
    //     this.handlePicture = this.handlePicture.bind(this);
    // }

    // handlePicture(file) {
    //     this.setState({
    //         picture: file
    //     })
    //     console.log(this.state.picture)
    // }
    render() {
        const {
              name
            , description
            , cardType
            , itemType
            , level
            , badStuff
            , howMany
            , picture
            , handleName
            , handleDescription
            , handleType
            , handleItemType
            , handleLevel
            , handleBadStuff
            , handleHowMany
        } = this.props
        console.log(this.props)

        const nameLength = 16 - name.length

        const descriptionLength = 160 - description.length

        const itemTypeSelect =
            <SelectField
                floatingLabelText="Item Type"
                hintText="Item Type"
                maxHeight={300}
                value={itemType}
                onChange={(event, index, itemType) => handleItemType(itemType)}
            >
                <MenuItem value="armor" primaryText="Chest Armor" />
                <MenuItem value="feet" primaryText="Footgear" />
                <MenuItem value="hand" primaryText="Hand Item" />
            </SelectField >

        const levelSelect =
            <SelectField
                floatingLabelText="Level"
                hintText="Level"
                maxHeight={300}
                value={level}
                onChange={(event, index, level) => handleLevel(level)}
            >
                {levels}
            </SelectField >

        const badStuffSelect =
            <SelectField
                floatingLabelText="Bad Stuff"
                hintText="Bad Stuff"
                maxHeight={300}
                value={badStuff}
                onChange={(event, index, badStuff) => handleBadStuff(badStuff)}
            >
                <MenuItem value="die" primaryText="You Die" disabled={cardType === 1 ? false : true} />
                <MenuItem value="loseLevel" primaryText={`Lose ${howMany} Level${howMany > 1 ? "s" : ''}`} />
                <MenuItem value="loseItem" primaryText={`Lose ${howMany} Item${howMany > 1 ? "s" : ''}`} />
                <MenuItem value="loseAllItems" primaryText="Lose All Items" />
                <MenuItem value="loseClass" primaryText="Lose Class" />
            </SelectField >

        const xSelect =
            <SelectField
                floatingLabelText="How Many?"
                hintText="How Many?"
                maxHeight={300}
                value={howMany}
                onChange={(event, index, howMany) => handleHowMany(howMany)}
            >
                {howManyArray}
            </SelectField >

        const levelSelector = cardType === "monster" ? levelSelect : undefined

        const badStuffSelector = cardType === "monster" ? badStuffSelect : cardType === "curse" ? badStuffSelect : undefined

        const itemTypeSelector = cardType === "item" ? itemTypeSelect : undefined

        const xSelector = badStuff === "loseLevel" ? xSelect : badStuff === "loseItem" ? xSelect : undefined

        let divStyle = picture ? {
            backgroundImage: 'url(' + picture[0].preview + ')',
        } : undefined
        return (
            <div className="container">
                <form className="container">
                    <TextField
                        floatingLabelText="Card Name"
                        value={name}
                        onChange={(e) => handleName(e.target.value)}
                        maxLength={16}
                        errorText={nameLength < 6 ? 'Characters Remaining: ' + nameLength : false}
                    />
                    <TextField
                        floatingLabelText="Card Description"
                        multiLine={true}
                        maxLength={160}
                        rowsMax={4}
                        rows={1}
                        value={description}
                        onChange={(e) => handleDescription(e.target.value)}
                        errorText={descriptionLength < 60 ? 'Characters Remaining: ' + descriptionLength : false}
                    />
                    <SelectField
                        floatingLabelText="Card Type"
                        hintText="Card Type"
                        maxHeight={300}
                        value={cardType}
                        onChange={(event, index, cardType) => handleType(cardType)}
                    >
                        <MenuItem value="monster" primaryText="Monster" />
                        <MenuItem value="curse" primaryText="Curse" />
                        <MenuItem value="item" primaryText="Item" />
                    </SelectField >
                    {levelSelector}
                    {badStuffSelector}
                    {xSelector}
                    {itemTypeSelector}
                    <Upload handlePicture={this.handlePicture} />
                </form>
                <div className="cardPreview">
                    <div className="name">{name}</div>
                    {level ? <div className="level">lvl: {level} </div> : undefined}
                    <br/>
                    {/* <div className="picture">{picture ? <img src={picture[0].preview} alt={picture[0].name}/> : undefined}</div> */}
                    <div className="picture" style={divStyle}/>
                    <div className="badStuff">{badStuff}</div>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, { handleName, handleDescription, handleType, handleItemType, handleLevel, handleBadStuff, handleHowMany })(CardCreator);