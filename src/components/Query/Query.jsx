import { useState } from "react";
import Swal from "sweetalert2";

import "./query.css"; // CSS

// import Components
import SectionHeader from "../SectionHeader/SectionHeader";

const Query = () => {
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", "8b0fd863-b428-49cb-b895-421774e03632");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      Swal.fire({
        title: "Thank You!",
        text: "Your Query has been submitted successfully",
        icon: "success",
      });
    } else console.log("Error", data);

    e.target.reset();
  };

  return (
    <section className="query_section" id="query">
      <main className="query_main">
        <SectionHeader title="Submit Your Query" subtitle="Let's Discuss" />

        <form onSubmit={handleFormSubmit}>
          <div className="name_contact">
            <input
              type="text"
              name="name"
              placeholder="Enter Full Name"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Enter Contact Number"
              required
            />
          </div>
          <input type="email" name="email" placeholder="Enter Email" required />
          <textarea
            name="query"
            placeholder="Please Enter Your Query"
            required
          />

          <button type="submit">Submit</button>

          <div className="query_note">
            <span>Note:</span> 24 Chambers shall endeavour to contact you within
            24 hours in response to your query.
          </div>
        </form>
      </main>
    </section>
  );
};

export default Query;
