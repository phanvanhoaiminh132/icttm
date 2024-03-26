import { Pie } from '@ant-design/plots';
import React from 'react';
import { useSelector } from 'react-redux';

const CircleChart = () => {
    const data = useSelector((state:any)=> state.dataReducer.data);
    const dataValueChart = useSelector((state:any)=> state.dataReducer.valueChart);

    const config = {
        data,
        angleField: dataValueChart.value,
        colorField: "product",
        label: {
          text: 'product',
          position: 'outside',
        },
        legend: {
            color: {
                title: false,
                position: 'right',
                rowPadding: 5,
            },
        },
        interaction: {
            tooltip: {
              render: (event, { text, items }) => {
                return (
                  <>
                    <div>{dataValueChart.title}: {items[0].value}</div>
                  </>
                )
              },
            },
        },
    };
    return <Pie {...config} />;
};

export default CircleChart;
