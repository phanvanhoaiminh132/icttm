import { DataColumn, LineChartConstant } from "../constant/DataContant.tsx";
import { initialStateType, valueType } from "../constant/Type.tsx";
import { dataValue} from "../datas/data.tsx";

const initialState:initialStateType = {
    data: dataValue,
    typeChart: LineChartConstant.collumn,
    valueChart: DataColumn[0]
}

const dataReducer = (state:initialStateType = initialState, action) => {
    switch (action.type) {
        case "FILTER_DATA": {
            if(action.payload){
                return {...state, data: state.data.filter((item:valueType)=> {return item.product.toLowerCase().includes(action.payload.toLowerCase())})};
            }else{
                return {...state, data: initialState.data};
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
        default:
            return state;
    }
}

export default dataReducer;