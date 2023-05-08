import { types } from "../types/types";

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                ...state,   // Es una buena practica desestructurar el state anterior para siempre mantener todas las propiedades, y actualizamos solo lo que nos interesa
                logged: true,
                user: action.payload
            };

        case types.logout:
            return {
                ...state,   // Es una buena practica desestructurar el state anterior para siempre mantener todas las propiedades, y actualizamos solo lo que nos interesa
                logged: false
            };

        default:
            return state;
    }
}