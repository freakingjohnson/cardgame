const NAME = "NAME"
const DESCRIPTION = "DESCRIPTION"
const CARDTYPE = "CARDTYPE"
const ITEMTYPE = "ITEMTYPE"
const LEVEL = "LEVEL"
const BADSTUFF = "BADSTUFF"
const HOWMANY = "HOWMANY"
const FILEURL = "FILEURL"
const PICTURE = "PICTURE"

const initialState = {
    name: ''
    , description: ''
    , cardType: ''
    , itemType: ''
    , level: ''
    , badStuff: ''
    , howMany: ''
    , fileURL: ''
    , picture: ''
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case NAME:
            return Object.assign({}, state, { name: action.payload })

        case DESCRIPTION:
            return Object.assign({}, state, { description: action.payload })

        case CARDTYPE:
            return Object.assign({}, state, { cardType: action.payload, badStuff: '', level: '', howMany: '', })

        case ITEMTYPE:
            return Object.assign({}, state, { itemType: action.payload })

        case LEVEL:
            return Object.assign({}, state, { level: action.payload })

        case BADSTUFF:
            return Object.assign({}, state, { badStuff: action.payload })

        case HOWMANY:
            return Object.assign({}, state, { howMany: action.payload })

        case FILEURL:
            return Object.assign({}, state, { fileURL: action.payload })

        case PICTURE:
            return Object.assign({}, state, { picture: action.payload })
        default:
            return state;


    }
}

// export const handleName = (event) => { name: event.target.value }

export function handleName(name) {
    return {
        type: NAME,
        payload: name
    }
}

export function handleDescription(description) {
    return {
        type: DESCRIPTION,
        payload: description
    }
}

export function handleType(cardType) {
    return {
        type: CARDTYPE,
        payload: cardType
    }
}

export function handleItemType(itemType) {
    return {
        type: ITEMTYPE,
        payload: itemType
    }
}

export function handleLevel(level) {
    return {
        type: LEVEL,
        payload: level
    }
}

export function handleBadStuff(badStuff) {
    return {
        type: BADSTUFF,
        payload: badStuff
    }
}

export function handleHowMany(howMany) {
    return {
        type: HOWMANY,
        payload: howMany
    }
}

export function handlePicture(picture) {
    return {
        type: PICTURE,
        payload: picture
    }
}
