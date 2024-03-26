import { Line } from '@ant-design/plots';
import React from 'react';
import { useSelector} from 'react-redux';

const LineChart = () => {
  const data = useSelector((state:any)=> state.dataReducer.data);
  const dataValueChart = useSelector((state:any)=> state.dataReducer.valueChart);

  const config = {
    data,
    xField: 'product',
    yField: dataValueChart.value,
    point: {
      shapeField: 'square',
      sizeField: 4,
    },
    style: {
      lineWidth: 2,
    },
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
        marker: false,
      },
  };
  return <Line {...config} />;
};

export default LineChart;
