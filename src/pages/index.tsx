import React from 'react';
import './Index.scss';
import TableComponent from '../components/table/Table.tsx';
import MapElement from '../components/map/MapComponent.tsx';
import ColumnChart from '../components/column-chart/ColumnChart.tsx';
import NavChart from '../components/nav-chart/NavChart.tsx';
import CircleChart from '../components/circle-chart/CircleChart.tsx';
import { useSelector } from 'react-redux';
import { LineChartConstant } from '../constant/DataContant.tsx';
import LineChart from '../components/line-chart/LineChart.tsx';
import NavChartBottom from '../components/nav-chart-bottom/NavChartBottom.tsx';

const Index = () =>{
    const typeChart:any = useSelector((state:any)=> state.dataReducer.typeChart);
    return(
        <div>
            <div className='top-element'>
                <div className='box-chart'>
                    <NavChart/>
                    <div className='chart-element'>
                        {
                            typeChart === LineChartConstant.line ?
                                <LineChart />
                            : typeChart === LineChartConstant.circle ?
                                <CircleChart />
                            :
                                <ColumnChart/>
                        }
                    </div>
                    <NavChartBottom/>
                </div>
                <div className='box-map'>
                    <MapElement />
                </div>
            </div>
            <div className='botton-element'>
                <TableComponent/>
            </div>
            
        </div>
    )
}

export default Index;