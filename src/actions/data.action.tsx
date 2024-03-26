import { DataTypeCollum } from "../constant/Type";

export const filterData = (inputText:string) => {
    return({ type: 'FILTER_DATA', payload: inputText });
}

export const selectChart = (inputText:string) => {
    return({ type: 'SELECT_CHART', payload: inputText });
}

export const valueChart = (inputText:DataTypeCollum) => {
    return({ type: 'CHANGE_VALUE_CHART', payload: inputText });
}