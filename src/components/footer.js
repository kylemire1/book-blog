import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <>
      <h3>Want more?</h3>
      <Link className='btn btn-nobg' to='/all-reviews'>
        See All Reviews
      </Link>
    </>
  );
};

export default Footer;
