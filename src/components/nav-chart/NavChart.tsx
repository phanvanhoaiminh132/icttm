import React from 'react';
import './NavChart.scss';
import { BarChartOutlined, LineChartOutlined, PieChartOutlined } from "@ant-design/icons"
import { useDispatch, useSelector } from 'react-redux';
import { LineChartConstant } from '../../constant/DataContant.tsx';
import { selectChart } from '../../actions/data.action.tsx';

const NavChart = ()=>{
    const dispatch = useDispatch();
  
    const changeSelectChart = (data: string) =>{
      dispatch(selectChart(data));
    }
    const typeChart:any = useSelector((state:any)=> state.dataReducer.typeChart);
    return( 
        <div className='nav-chart'>
            <BarChartOutlined 
                onClick={()=>changeSelectChart(LineChartConstant.collumn)}
                className= {`icon ${typeChart === LineChartConstant.collumn ? 'active' : ''}` } 
            />

            <PieChartOutlined 
                onClick={()=>changeSelectChart(LineChartConstant.circle)}
                className= {`icon ${typeChart === LineChartConstant.circle ? 'active' : ''}`}
            />

            <LineChartOutlined
                onClick={()=>changeSelectChart(LineChartConstant.line)}
                className= {`icon ${typeChart === LineChartConstant.line ? 'active' : ''}`} 
             />
           
        </div>
    )
}
export default NavChart;