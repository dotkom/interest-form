import React, { FC } from "react";
import Category from "../Category";
import BaseTextField from "./BaseTextField";
import Yup from "yup";

interface FormData {
  companyName: string;
  /*contactName: string;
  contactMail: string;
  phone: string;
  semesters: string[];
  interests: string[];*/
}

const CompanySection = () => {
  return (
    <Category title="Bedrift" description="Navn på bedriften du representerer">
      <BaseTextField name="companyName" label="Bedriftsnavn" placeholder="Bedrift AS"/>
    </Category>
  );
};

export default CompanySection;
