import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
 
const columns = [
  {
    title: "Expense ID",
    dataIndex: "key",
  },
  {
    title: "Expense Detail",
    dataIndex: "detail",
  },
  {
    title: "Expense amount",
    dataIndex: "amount",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
  
];

const Expense = () => {
  

  const data1 = [
    {
      key: "001",
      detail: "Employee salary",
      amount:"500000",
      date:"12.03.23"
    },
    {
      key: "002",
      detail: "Government Tax",
      amount:"120000",
      date:"12.03.23"
    },
    {
      key: "003",
      detail: "Administrative Expenses ",
      amount:"40000",
      date:"12.03.23"
    },
    {
      key: "004",
      detail: "Employee Training",
      amount:"12000",
      date:"12.03.23"
    },
    {
      key: "005",
      detail: "Maintenance fee",
      amount:"60000",
      date:"12.03.23"
    },
    {
      key: "006",
      detail: "Lanka Rail bank -fixed deposit bank charge",
      amount:"12000",
      date:"12.03.23"
    },
    {
      key: "007",
      detail: "Other expenses",
      amount:"12000",
      date:"12.03.23"
    },
    {
      key: "008",
      detail: "Administrative Expenses",
      amount:"12000",
      date:"12.03.23"
    },



  ];



  return (
    <div>
    <h3 className="mb-4 title">Expense Report</h3>
    <div>{<Table columns={columns} dataSource={data1} />}</div>
  </div>
  );
};

export default Expense;