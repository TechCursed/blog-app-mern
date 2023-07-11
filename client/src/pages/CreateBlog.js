import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const CreateBlog = () => {

    const id = localStorage.getItem("userId");
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
      title: "",
      description: "",
      image: "",
    });

    // input change
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };

    //FORM
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post("/api/v1/blog/create-blog", {
          title: inputs.title,
          description: inputs.description,
          image: inputs.image,
          user: id,
        });
        if (data?.success) {
          toast.success("Blog Created");
          navigate("/my-blogs");
        }
      } catch (error) {
        console.log(error);
      }
    };

    return (
        <>
        </>
    )

}

export default CreateBlog;