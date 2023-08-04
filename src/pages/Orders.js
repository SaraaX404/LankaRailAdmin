import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
 
const columns = [
  {
    title: "Booking ID",
    dataIndex: "bookingid",
  },
  {
    title: "Customer ID",
    dataIndex: "cid",
  },
  {
    title: "Customer Name",
    dataIndex: "Cname",
  },
  {
    title: "Train Name",
    dataIndex: "Tname",
  },
  {
    title: "Start Destination",
    dataIndex: "Sdestination",
  },
  {
    title: "End Destination",
    dataIndex: "Edestination",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Date",
    dataIndex: "date",
  },

  {
    title: "Action",
    dataIndex: "action",
  },
];



const Orders = () => {
  

  const data1 = [
    {
      bookingid: "001",
      cid: "006",
      Cname:"Kevin",
      Tname:"Ruhunu Kumari",
      Sdestination:"Colombo Fort",
      Edestination:"Matara",
      amount:"Rs.450",
      date:"20.05.23",
      action:(
        <>
          {/* <Link to="/" className=" fs-3 text-danger">
            <BiEdit />
          </Link> */}
          <Link className="ms-3 fs-3 text-danger" to="">
            <AiFillDelete />
          </Link>
        </>
      ),
    },
    {
      bookingid: "002",
      cid: "010",
      Cname:"Nipun",
      Tname:"Sagarika",
      Sdestination:"Galle",
      Edestination:"Matara",
      amount:"Rs.350",
      date:"20.05.23",
      action:(
        <>
          {/* <Link to="/" className=" fs-3 text-danger">
            <BiEdit />
          </Link> */}
          <Link className="ms-3 fs-3 text-danger" to="">
            <AiFillDelete />
          </Link>
        </>
      ),
    },
  ]

  
  return (
    <div>
      <h3 className="mb-4 title">Train Ticket Sales</h3>
      <div>{<Table columns={columns} dataSource={data1} />}</div>
    </div>
  );
};

export default Orders;
