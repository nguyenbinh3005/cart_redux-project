import * as Types from './../constants/ActionType';

export const actAddToCart = (product, quantity) => {
    return {
        type : Types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actChangeMessage = (message) => {
    return {
        type : Types.CHANGE_MESSAGE,
        message
    }
}

export const actRemoveProductInCart = (product) => {
    return {
        type : Types.DELETE_PRODUCT_IN_CART,
        product
    }
}

export const actUpdateProductInCart = (product, quantity) => {
    return {
        type : Types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}

export const actResetAllProductInCart = (cart) => {
    return {
        type : Types.RESET_ALL_PRODUCT_IN_CART,
        cart
    }
}