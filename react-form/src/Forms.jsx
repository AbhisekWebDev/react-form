import React, { useState, useRef } from 'react';

function Forms() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');

  const fnameRef = useRef();
  const lnameRef = useRef();

  // For controlled inputs (useState)
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh
    console.log("useState → First Name:", fname);
    console.log("useState → Last Name:", lname);
  };

  // For uncontrolled inputs (useRef)
  const myComponent = (e) => {
    e.preventDefault();
    const fnameVal = fnameRef.current.value;
    const lnameVal = lnameRef.current.value;

    console.log("useRef → First Name:", fnameVal);
    console.log("useRef → Last Name:", lnameVal);
  };

  return (
    <div>
      <h2>Form with useState (Controlled)</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First name:</label><br />
        <input
          type="text"
          id="fname"
          name="fname"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        /><br />

        <label htmlFor="lname">Last name:</label><br />
        <input
          type="text"
          id="lname"
          name="lname"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        /><br /><br />

        <input type="submit" value="Submit" />
      </form>

      <br />
      <hr />
      <br />

      <h2>Form with useRef (Uncontrolled)</h2>
      <form onSubmit={myComponent}>
        <label htmlFor="fname">First name:</label><br />
        <input
          type="text"
          id="fname"
          ref={fnameRef}
        /><br />

        <label htmlFor="lname">Last name:</label><br />
        <input
          type="text"
          id="lname"
          ref={lnameRef}
        /><br /><br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Forms;
