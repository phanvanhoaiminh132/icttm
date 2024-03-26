import { DataColumn, LineChartConstant } from "../constant/DataContant.tsx";
import { initialStateType, valueType } from "../constant/Type.tsx";
import { dataValue} from "../datas/data.tsx";

const initialState:initialStateType = {
    data: [...dataValue],
    dataAll: [...dataValue],
    typeChart: LineChartConstant.collumn,
    valueChart: DataColumn[0],
    isZoom: false,
    defaultPageSize: 5,
    currentPage: 1,
}

const dataReducer = (state:initialStateType = initialState, action) => {
    switch (action.type) {
        case "FILTER_DATA": {
            let data = initialState.data.filter((item:valueType)=> {return item.product.toLowerCase().includes(action.payload.toLowerCase())});
            if(action.payload){
                return {
                    ...state, 
                    currentPage: 1,
                    data: data.slice(0,state.defaultPageSize),
                    dataAll: data
                };
            }else{
                return {...state, currentPage: 1, data: initialState.data.slice(0, state.defaultPageSize), dataAll: initialState.dataAll};
            }
        }
        case "SELECT_CHART": {
            if(action.payload){
                return {...state, typeChart: action.payload};
            }
        }
        case "CHANGE_VALUE_CHART": {
            if(action.payload){
                return {...state, valueChart: action.payload};
            }
        }

        case "TOGGLE_ZOOM": {
            return {...state, isZoom: action.payload};
        }

        case "CHANGE_PAGINATION": {
            return {
                ...state, 
                data: state.dataAll.slice((action.payload -1) * state.defaultPageSize ,state.dataAll.length).slice(0, state.defaultPageSize),
                currentPage: action.payload
            };
        }
        default:
            return {...state,currentPage: 1, data: state.data.slice(0, state.defaultPageSize)};
    }
}

export default dataReducer;