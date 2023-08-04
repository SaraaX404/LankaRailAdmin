import { React, useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'


 
let schema = yup.object().shape({
  name: yup.string().required("Train name is Required"),
  startStation: yup.string().required("Start destination is Required"),
  endStation: yup.string().required("End destination is Required"),
  startTime: yup.string().required("Start time is Required"),
  endTime: yup.string().required("End time is Required"),
  price: yup.number().required("Price is Required"),
  numberOfSeats: yup.number().required("Number of seats is Required"),
});

const Addproduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [color, setColor] = useState([]);
  const [images, setImages] = useState([]);
  console.log(color);
 
   
   

   
  const formik = useFormik({
    initialValues: {
    name: "",
    startStation:"",
    endStation: "",
    startTime: "",
    status:"unpaid",
    endTime: "",
    numberOfSeats: "",
    price: ""
    },
    validationSchema: schema,
    onSubmit: (values) => {
    
      axios.post('http://localhost:4000/trains', values)
      formik.resetForm()
      
      
    },
  });
  const handleColors = (e) => {
    setColor(e);
    console.log(color);
  };
  return (
    <div>
      <h3 className="mb-4 title">Add Trains</h3>
      {console.log(formik.errors)}
      <div>
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex gap-3 flex-column"
        >
          <CustomInput
            type="text"
            label="Enter Train Name"
            name="name"
            onChng={formik.handleChange("name")}
            onBlr={formik.handleBlur("name")}
            val={formik.values.name}
          />
          <div className="error">
            {formik.touched.name && formik.errors.name}
          </div>
           
          <select
            name="startStation"
            onChange={formik.handleChange("startStation")}
            onBlur={formik.handleBlur("startStation")}
            value={formik.values.startStation}
            className="form-control py-3 mb-3"
            id=""
          >
            <option value="" disabled>Select Start Destination</option>
            <option value="1">Colombo Fort</option>
            <option value="2">Galle</option>
            <option value="3">Matara</option>
            <option value="4">belliatta</option>
          </select>
          <div className="error">
            {formik.touched.startStation && formik.errors.startStation}
          </div>
          <select
            name="endStation"
            onChange={formik.handleChange("endStation")}
            onBlur={formik.handleBlur("endStation")}
            value={formik.values.endStation}
            className="form-control py-3 mb-3"
            id=""
          >
            <option value="" disabled>Select End Destination</option>
            <option value="1">Colombo Fort</option>
            <option value="2">Galle</option>
            <option value="3">Matara</option>
            <option value="4">belliatta</option>
          </select>
          <div className="error">
            {formik.touched.endStation && formik.errors.endStation}
          </div>
          <select
            name="startTime"
            onChange={formik.handleChange("startTime")}
            onBlur={formik.handleBlur("startTime")}
            value={formik.values.startTime}
            className="form-control py-3 mb-3"
            id=""
          >
            <option value="" disabled>
              Select Start Time
            </option>
            <option value="1">5.00AM</option>
            <option value="2">9.00AM</option>
            <option value="3">1.30PM</option>
          </select>
          <div className="error">
            {formik.touched.startTime && formik.errors.startTime}
          </div>
          <select
            name="endTime"
            onChange={formik.handleChange("endTime")}
            onBlur={formik.handleBlur("endTime")}
            value={formik.values.endTime}
            className="form-control py-3 mb-3"
            id=""
          >
            <option value="" disabled>
              Select End Time
            </option>
            <option value="1">9.30AM</option>
            <option value="2">12.00PM</option>
            <option value="3">6.30PM</option>
          </select>
          <div className="error">
            {formik.touched.endTime && formik.errors.endTime}
          </div>
          <CustomInput
            type="number"
            label="Number of Seats"
            name="numberOfSeats"
            onChng={formik.handleChange("numberOfSeats")}
            onBlr={formik.handleBlur("numberOfSeats")}
            val={formik.values.numberOfSeats}
          />
          <div className="error">
            {formik.touched.numberOfSeats && formik.errors.numberOfSeats}
          </div>
          <CustomInput
            type="number"
            label="Enter Product Price"
            name="price"
            onChng={formik.handleChange("price")}
            onBlr={formik.handleBlur("price")}
            val={formik.values.price}
          />
          <div className="error">
            {formik.touched.price && formik.errors.price}
          </div>
 
          <button
            className="btn btn-primary border-0 rounded-3 my-5"
            type="submit"
          >
            Add Train
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
