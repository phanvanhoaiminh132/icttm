import React from 'react';
import './NavChartBottom.scss';
import { Button, Flex } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { valueChart } from '../../actions/data.action.tsx';
import { DataColumn } from '../../constant/DataContant.tsx';
import { DataTypeCollum } from '../../constant/Type.tsx';

const NavChartBottom = ()=>{
    const dispatch = useDispatch();

    const dataValueChart = useSelector((state:any)=> state.dataReducer.valueChart);
  
    const changeValueChart = (data: DataTypeCollum) =>{
      dispatch(valueChart(data));
    }
    const typeChart:any = useSelector((state:any)=> state.dataReducer.typeChart);
    return( 
        <div className='nav-chart-bottom'>
            <Flex gap="small" wrap="wrap">
                {
                    DataColumn.map((item,index) =>{
                        return(
                        <Button 
                            key={index} 
                            type={dataValueChart.value === item.value ? "primary" : "default"}
                            onClick={()=>changeValueChart(item)}
                        >{item.title}</Button>
                        )
                    })
                }
            </Flex>
        </div>
    )
}
export default NavChartBottom;