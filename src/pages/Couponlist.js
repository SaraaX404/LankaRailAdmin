import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
 
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },

  {
    title: "Name",
    dataIndex: "name",
   
  },
  {
    title: "Discount",
    dataIndex: "discount",
    
  },
  {
    title: "Expiry",
    dataIndex: "expiry",
    render:(text)=><span>{new Date(text).toLocaleDateString()}</span>
  },
  {
    title: "Action",
    dataIndex: "action",
    render:(text)=>(
      <>
      <Link
       
        className=" fs-3 text-danger"
      >
        <BiEdit />
      </Link>
      <button
        className="ms-3 fs-3 text-danger bg-transparent border-0"
      
      >
        <AiFillDelete />
      </button>
    </>
    )
  },
];

const Couponlist = () => {

  const [data, setData] = useState([])

  const fetch = async ()=>{

    const res = await axios.get('http://localhost:4000/coupon')

    if(res.data){
      setData(res.data.map((x)=>{
        return{
          key: x?._id,
          name: x?.name,
          discount: x?.price,
          expiry: x?.exp,
        }
      }))
    }

  }

  useEffect(()=>{
    fetch()
  },[])
  

  useEffect(()=>{console.log(data)},[data])

  


   
  return (
    <div>
      <h3 className="mb-4 title">Coupons</h3>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
      
    </div>
  );
};

export default Couponlist;
