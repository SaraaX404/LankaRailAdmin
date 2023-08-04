import { React, useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
 import {
  createCoupon,
  getACoupon,
  resetState,
  updateACoupon,
} from "../features/coupon/couponSlice";
import axios from "axios";

let schema = yup.object().shape({
  name: yup.string().required("Coupon Name is Required"),
  exp: yup.date().required("Expiry Date is Required"),
  price: yup.number().required("Discount Price is required"),
});
const AddCoupon = () => {
   const dispatch = useDispatch();
   const location = useLocation();
   const navigate = useNavigate();
   const getCouponId = location.pathname.split("/")[3];
   const newCoupon = useSelector((state) => state.coupon);

  const {
    isSuccess,
    isError,
    isLoading,
    createdCoupon,
    couponName,
    couponDiscount,
    couponExpiry,
    updatedCoupon,
  } = newCoupon;
  const changeDateFormet = (date) => {
    const newDate = new Date(date).toLocaleDateString();
    const [month, day, year] = newDate.split("/");
    return [year, month, day].join("-");
  };

  useEffect(() => {
    if (getCouponId !== undefined) {
      dispatch(getACoupon(getCouponId));
    } else {
      dispatch(resetState());
    }
  }, [getCouponId]);

  useEffect(() => {
    if (isSuccess && createdCoupon) {
      toast.success("Coupon Added Successfullly!");
    }
    if (isSuccess && updatedCoupon) {
      toast.success("Coupon Updated Successfullly!");
      navigate("/admin/coupon-list");
    }
    if (isError && couponName && couponDiscount && couponExpiry) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: couponName || "",
      exp: changeDateFormet(couponExpiry) || "",
      price: couponDiscount || "",
    },
    validationSchema: schema,
    onSubmit: async(values) => {
       if (getCouponId !== undefined) {
        const data = { id: getCouponId, couponData: values };
        dispatch(updateACoupon(data));
        dispatch(resetState());
      } else {
        console.log(values)
        const res = await axios.post('http://localhost:4000/coupon', values)
        formik.resetForm();
        window.location.href = '/admin/coupon-list'

       }
    },
  });

  return (
    <div>
      <h3 className="mb-4 title">
        {getCouponId !== undefined ? "Edit" : "Add"} Coupon
      </h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            name="name"
            onChng={formik.handleChange("name")}
            onBlr={formik.handleBlur("name")}
            val={formik.values.name}
            label="Enter Coupon Name"
            id="name"
          />
          <div className="error">
            {formik.touched.name && formik.errors.name}
          </div>
          <CustomInput
            type="date"
            name="exp"
            onChng={formik.handleChange("exp")}
            onBlr={formik.handleBlur("exp")}
            val={formik.values.exp}
            label="Enter Expiry Data"
            id="date"
          />
          <div className="error">
            {formik.touched.exp && formik.errors.exp}
          </div>
          <CustomInput
            type="number"
            name="price"
            onChng={formik.handleChange("price")}
            onBlr={formik.handleBlur("price")}
            val={formik.values.price}
            label="Enter Discount"
            id="discount"
          />
          <div className="error">
            {formik.touched.price && formik.errors.price}
          </div>
          <button
            className="btn btn-primary border-0 rounded-3 my-5"
            type="submit"
          >
            {getCouponId !== undefined ? "Edit" : "Add"} Coupon
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoupon;
