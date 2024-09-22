import { DEC, INC } from "../actionTypes/actionTypes"

export const incAction = () => {
    return {type: INC}
}

export const decAction = () => {
    return {type: DEC}
}