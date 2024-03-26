import React from 'react';
import { Table, Input, TableColumnsType, TableProps, Pagination, PaginationProps } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { changPagination, filterData } from '../../actions/data.action.tsx';
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
    sorter: (a:any, b:any) => a.transactions - b.transactions,
  },
  {
    title: 'Us Dollar Value',
    dataIndex: 'dollarValue',
    sorter: (a:any, b:any) => a.dollarValue - b.dollarValue,
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    sorter: (a:any, b:any) => a.quantity - b.quantity,
  },
  {
    title: 'Containers',
    dataIndex: 'containers',
    sorter: (a:any, b:any) => a.containers - b.containers,
  },
  {
    title: 'Weight',
    dataIndex: 'weight',
    sorter: (a:any, b:any) => a.weight - b.weight,
  },
];

const TableComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector((state:any)=> state.dataReducer.data);
  const dataAll = useSelector((state:any)=> state.dataReducer.dataAll);
  const dataDefaultPageSize = useSelector((state:any)=> state.dataReducer.defaultPageSize);
  const dataCurrentPage = useSelector((state:any)=> state.dataReducer.currentPage);

  const filterTextData = (data: string) =>{
    dispatch(filterData(data));
  }

  const onChange: PaginationProps['onChange'] = (pageNumber) => {
    dispatch(changPagination(pageNumber));
  };

  return(
    <>
      <Input className='input-element' onChange={(e:any) => filterTextData(e.target.value)} placeholder="Filter by product name" />
      <Table columns={columns} dataSource={data} pagination={false} />
      <Pagination 
        onChange={onChange}
        className='pangation' 
        current={dataCurrentPage} 
        defaultPageSize={dataDefaultPageSize}
        total={dataAll.length} 
      />
    </>
  );

};

export default TableComponent;