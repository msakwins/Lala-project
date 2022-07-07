import React, { useState } from "react";
import Image from 'next/image';
import TableWrapper from './TableWrapper';
import TableRow from './TableRow';
import arrow from '../../public/arrow.svg';
import sortData from '../utils/sort';

type TableProps = {
  paymentsData: string[];
}

const Table = ({paymentsData}: TableProps) => {
  const [sortingType, setSortingType] = useState<string>('');
  const [sortingRule, setSortingRule] = useState<string>('');
  
  const sortedPayments = sortData(paymentsData, sortingType, sortingRule);
  
  const handleSort = (type:string, rule:string) => {
    setSortingType(type);
    setSortingRule(rule);
  }

  return (
    <TableWrapper cellSpacing="0" rotate={sortingRule === 'ASC' ? 0 : 1} className="dashboard">
      <thead className="dashboard__head">
        <tr className="dashboard__head-row">
          <th className="dashboard__head-row--cell">
            <p>STATUS</p>
            <button
              type="button"
              onClick={() => handleSort('status', sortingRule === 'ASC' ? 'DSC' : 'ASC')}
            >
              <Image src={arrow} width='12' height='12' className="arrow-button__status" alt="sort"></Image>
            </button>
          </th>
          <th className="dashboard__head-row--cell">
            <p>NAME</p>
            <button
              type="button"
              onClick={() => handleSort('customerName', sortingRule === 'ASC' ? 'DSC' : 'ASC')}
            >
              <Image src={arrow} width='12' height='12' className="arrow-button__name" alt="sort"></Image>
            </button>
          </th>
          <th className="dashboard__head-row--cell">
            <p>SELLER</p>
          </th>
          <th className="dashboard__head-row--cell">AMOUNT
            <button
              type="button"
            />
          </th>
        </tr>
      </thead>
      <tbody className="dashboard-body">
        {sortedPayments.map((payment:string[], index:number) =>
          <TableRow payment={payment} key={index} index={index} className='dashboard__body-row' />
        )}
      </tbody>
    </TableWrapper>
  );
};

export default Table;