import React, { useEffect, useState } from "react";
import Head from 'next/head';
import Table from '../src/components/Table';
import dynamic from 'next/dynamic';

type Props = {
  paymentsData: string[];
}

const Home: React.FC<Props> = () => {
  const [paymentsData, setPaymentsData] = useState<string[]>([]);
	
  // fetch data from api and store
  useEffect(() => {
    fetch('https://cloudrun-frontend-recruitment-test-5hhyjiivra-ew.a.run.app/payments')
      .then(res => res.json())
      .then(result => {
        setPaymentsData(result);
      });
  }, []);

  return (
    <div>
      <Head>
        <title>Lala</title>
        <meta name="description" content="Lala is payment tracking page" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto:wght@100;300;400&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <header>Lala</header>
        <div className="fake-breadcrumb"><span className="fake-breadcrumb__route">Home</span>{'>'}<span><p className="fake-breadcrumb__path">Tracking</p></span></div>
        <h1>Payment tracker</h1>
        <p className="payments-total">Total transactions: {paymentsData.length}</p>
        <Table paymentsData={paymentsData} />
      </main>
    </div>
  );
};

export default dynamic(()=> Promise.resolve(Home), {ssr: false});