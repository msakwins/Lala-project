import React, { useState } from 'react';
import Image from 'next/image';
import { TableRowWrapper, Status } from './TableRowWrapper';
import moment from 'moment';
import eye from '../../public/eye.svg'
import eyeColor from '../../public/eyeColor.svg'

type TableRowProps = {
  payment: {
    status: string;
    id: number;
    created: string;
    customer_name: string;
    merchant: {
      name: string;
    }
    amount: number;
    installmentsCount: number;
    paymentPlan: {
      id: number;
      due_date: string;
      status: string;
      amount: number;
      fee: number;
    };
  }
  index: number
  className: string
}

const TableRow = ({payment, index, className}: TableRowProps) => {
  const [openedRow, setOpenedRow] = useState<number>(-1);
  const [paymentDetails, setPaymentDetails] = useState<any>({});

  const handleClick = (index:number) => {
    fetch(`https://cloudrun-frontend-recruitment-test-5hhyjiivra-ew.a.run.app/payments/${payment.id}`)
      .then(res => res.json())
      .then(result => {
        setPaymentDetails(result);
      });
    setOpenedRow(openedRow === index ? -1 : index)
  };

  const paymentPlanDetails = paymentDetails.paymentPlan;

  const formatAmount = (amount: number) => {
    return ((amount / 100).toLocaleString("fr-FR", {style:"currency", currency:"EUR"}));
  };

  return (
    <TableRowWrapper open={index === openedRow} className={`${className}`}>
      <td className="dashboard__body-row--cell cell_status">
        <Status statusColor={payment.status} />
        {payment.status}
      </td>
      <td className="dashboard__body-row--cell">
        {payment.customer_name}
      </td>
      <td className="dashboard__body-row--cell">{payment.merchant.name}</td>
      <td className="dashboard__body-row--cell">{formatAmount(payment.amount)}</td>
      <td className="dashboard__body-row--cell see-more__button">
        <button onClick={() => handleClick(index)} className="eye-button"><Image src={index === openedRow ? eyeColor : eye} width='20' height='20' className="arrow-button" alt="sort"></Image></button>
      </td>
      <td>

        { index === openedRow &&
        <table className="details">
          <tbody>
            <tr className="details__row">
              <th className="details__row-head">ID Paiement :</th>
              <td className="details__row-cell">{paymentDetails.id}</td>
            </tr>
            <tr>
              <th>Date de création :</th>
              <td>{moment(new Date(paymentDetails.created)).format("DD/MM/YYYY")}</td>
            </tr>
            <tr>
              <th>Montant :</th>
              <td>{paymentDetails.amount && formatAmount(paymentDetails.amount)}</td>
            </tr>
            <tr className="details__row plan-details">
              <th>Plan de paiement :</th>
              <td>
                <table className="plan">
                  <thead className="plan__head">
                    <tr className="plan__head-row">
                      <th className="plan__head-row--cell">id</th>
                      <th className="plan__head-row--cell">due date</th>
                      <th className="plan__head-row--cell">status</th>
                      <th className="plan__head-row--cell">amount</th>
                      <th className="plan__head-row--cell">fee</th>
                    </tr>
                  </thead>
                  <tbody className="plan__body">
                    {paymentPlanDetails && paymentPlanDetails.map((plan: {id: string, due_date: string, status: string, amount: number, fee: number}, index:number) =>
                      <tr key={index} className="plan__body-row">
                        <td className="plan__body-row--cell"><span className="plan__mobile-head">id</span>{plan.id}</td>
                        <td className="plan__body-row--cell"><span className="plan__mobile-head">due date</span>{moment(new Date(plan.due_date)).format("DD/MM/YYYY")}</td>
                        <td className="plan__body-row--cell"><span className="plan__mobile-head">status</span>{plan.status}</td>
                        <td className="plan__body-row--cell"><span className="plan__mobile-head">amount</span>{plan.amount && formatAmount(plan.amount)}</td>
                        <td className="plan__body-row--cell"><span className="plan__mobile-head">fee</span>{plan.fee && formatAmount(plan.fee)}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        }
      </td>
    </TableRowWrapper>
  );
};
          
export default TableRow;