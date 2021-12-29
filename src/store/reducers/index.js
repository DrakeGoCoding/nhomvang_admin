import { combineReducers } from "redux";
import auth from "./auth";
import common from "./common";
import editor from "./editor";
import invoice from "./invoice";
import invoiceList from "./invoiceList";
import newsList from "./newsList";
import product from "./product";
import productList from "./productList";
import userList from "./userList";

export default combineReducers({
    auth,
    common,
    editor,
    invoice,
    invoiceList,
    newsList,
    product,
    productList,
    userList
});