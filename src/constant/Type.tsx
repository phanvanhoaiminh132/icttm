export interface LineChartType{
    line: string;
    circle: string;
    collumn: string;
};

export interface valueType {
    key: number;
    product: string;
    transactions: number;
    dollarValue: number;
    quantity: number;
    containers: number;
    weight: number;
    name: string;
}

export interface initialStateType {
    data: valueType[];
    dataAll: valueType[];
    typeChart: string;
    valueChart: DataTypeCollum;
    isZoom: boolean;
    defaultPageSize: number;
    currentPage: number;
}

export interface DataTypeTable {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}
export interface DataTypeCollum {
    title: string;
    value: string;
}