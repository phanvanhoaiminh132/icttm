import { Column } from '@ant-design/plots';
import React from 'react';
import { useSelector} from 'react-redux';

const ColumnChart = () => {
  const data = useSelector((state:any)=> state.dataReducer.data);
  const dataValueChart = useSelector((state:any)=> state.dataReducer.valueChart);
  const config = {
    data,
    xField: 'product',
    yField: dataValueChart.value,
    interaction: {
      tooltip: {
        render: (event, { title, items }) => {
          return (
            <>
              <div>Product: {title}</div>
              <div>{dataValueChart.title}: {items[0].value}</div>
            </>
          )
        },
      },
    },
    legend: false,
  };
  return <Column {...config} />;
};

export default ColumnChart;
