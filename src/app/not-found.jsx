import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h2>Not found</h2>
      <p>Sorry</p>
      <Link href="/">Return to Home page</Link>
    </div>
  );
};

export default NotFound;
