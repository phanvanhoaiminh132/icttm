import React from 'react';
import { Table, Input, TableColumnsType, TableProps } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { filterData } from '../../actions/data.action.tsx';
import './Table.scss';
import { DataTypeTable } from '../../constant/Type.tsx';



const columns: TableColumnsType<DataTypeTable> = [
  {
    title: 'Product',
    dataIndex: 'product',
    sorter: (a:any, b:any) => a.product.length - b.product.length,
  },
  {
    title: 'Transactions',
    dataIndex: 'transactions',
    defaultSortOrder: 'descend',
    sorter: (a:any, b:any) => a.transactions - b.transactions,
  },
  {
    title: 'Us Dollar Value',
    dataIndex: 'dollarValue',
    defaultSortOrder: 'descend',
    sorter: (a:any, b:any) => a.dollarValue - b.dollarValue,
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    defaultSortOrder: 'descend',
    sorter: (a:any, b:any) => a.quantity - b.quantity,
  },
  {
    title: 'Containers',
    dataIndex: 'containers',
    defaultSortOrder: 'descend',
    sorter: (a:any, b:any) => a.containers - b.containers,
  },
  {
    title: 'Weight',
    dataIndex: 'weight',
    defaultSortOrder: 'descend',
    sorter: (a:any, b:any) => a.weight - b.weight,
  },
];

const onChange: TableProps<DataTypeTable>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};



const TableComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector((state:any)=> state.dataReducer.data);

  const filterTextData = (data: string) =>{
    dispatch(filterData(data));
  }

  return(
    <>
      <Input className='input-element' onChange={(e:any) => filterTextData(e.target.value)} placeholder="Filter by product name" />
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </>
  );

};

export default TableComponent;