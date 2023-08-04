import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
 
const columns = [
  {
    title: "Income ID",
    dataIndex: "key",
  },
  {
    title: "Income Detail",
    dataIndex: "detail",
  },
  {
    title: "Income amount",
    dataIndex: "amount",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
  
];

const Revenue = () => {
  
   
  const data1 = [
    {
      key: "001",
      detail: "Stock market investment",
      amount:"12000",
      date:"12.03.23"
    },
    {
      key: "002",
      detail: "Lanka Rail bank -fixed deposit interest",
      amount:"12000",
      date:"12.03.23"
    },
    {
      key: "003",
      detail: "Ticket sales profit",
      amount:"12000",
      date:"12.03.23"
    },
    {
      key: "004",
      detail: "Lanka Rail bank -fixed deposit interest",
      amount:"12000",
      date:"12.03.23"
    },
    {
      key: "005",
      detail: "Stock market investment",
      amount:"12000",
      date:"12.03.23"
    },
    {
      key: "006",
      detail: "Lanka Rail bank -fixed deposit interest",
      amount:"12000",
      date:"12.03.23"
    },
    {
      key: "007",
      detail: "Stock market investment",
      amount:"12000",
      date:"12.03.23"
    },
    {
      key: "008",
      detail: "Lanka Rail bank -fixed deposit interest",
      amount:"12000",
      date:"12.03.23"
    },



  ];

   


  return (
    <div>
    <h3 className="mb-4 title">Revenue Report</h3>
    <div>{<Table columns={columns} dataSource={data1} />}</div>
  </div>
  );
};

export default Revenue;