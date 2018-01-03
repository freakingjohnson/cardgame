import { createStore } from "redux";

import reducer from "./ducks/cardReducer";

export default createStore( reducer );