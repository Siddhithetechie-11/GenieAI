import React from "react";
import { useState } from "react";

const EmailGenerator = () => {
  const [recipentName, setRecipentName] = useState("");
  const [reasonForContact, setReasonForContact] = useState("");
  const [subjectDetails, setSubjectDetails] = useState("");
  const [email, setEmail] = useState("");

  const generateEmail = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/generate-email?recipentName=${recipentName}&reasonForContact=${reasonForContact}&subjectDetails=${subjectDetails}`
      );
      const data = await response.text();
      setEmail(data);
    } catch (e) {
      console.log("Error generating email: " + e);
    }
  };
  return (
    <div>
      <h2>Generate E-mail</h2>
      <input
        type="text"
        value={recipentName}
        onChange={(e) => setRecipentName(e.target.value)}
        placeholder="Enter receipent Name"
      />
      <input
        type="text"
        value={reasonForContact}
        onChange={(e) => setReasonForContact(e.target.value)}
        placeholder="Enter reason for contact"
      />
      <input
        type="text"
        value={subjectDetails}
        onChange={(e) => setSubjectDetails(e.target.value)}
        placeholder="Enter subject details"
      />
      <button onClick={generateEmail}>Generate</button>
      <div className="output">
        <pre className="email-text">{email}</pre>
      </div>
    </div>
  );
};

export default EmailGenerator;
