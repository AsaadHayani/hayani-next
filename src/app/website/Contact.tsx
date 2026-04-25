"use client";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "29aa4a51-257d-4ae8-bdb8-33ba45792408");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="text-center py-10 space-y-3">
      <h2 className="my-title">Contact Us</h2>

      <form onSubmit={onSubmit} className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="name" required placeholder="First name *" />

          <input type="text" name="bcc" placeholder="Last name" />

          <input
            type="email"
            name="email"
            required
            placeholder="Email *"
            className="md:col-span-2"
          />

          <input
            type="number"
            name="subject"
            placeholder="Phone"
            className="md:col-span-2"
          />

          <textarea
            name="message"
            required
            rows={6}
            placeholder="Message *"
            className="md:col-span-2"
          ></textarea>
        </div>

        {result && <p className="my-text text-2xl text-center">{result}</p>}

        <button type="submit" className="my-bg w-full">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
