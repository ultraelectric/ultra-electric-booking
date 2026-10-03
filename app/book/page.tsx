"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const serviceOptions = [
  "Electrical Installation",
  "Electrical Repair",
  "Plumbing Maintenance",
  "Woodworking",
  "Landscaping",
  "General Home Maintenance",
];

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Electrical Installation",
    date: "",
    time: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Your service request has been submitted. We will contact you shortly.");
  };

  return (
    <main className="booking-page-shell">
      <div className="container booking-wrap">
        <div className="booking-intro">
          <p className="section-kicker">Booking</p>
          <h1>Book a service</h1>
          <p>
            Request a visit for electrical work, plumbing, landscaping, woodworking, or home maintenance.
          </p>
        </div>

        <div className="booking-layout">
          <aside className="booking-info">
            <h2>Why book with Ultra Electric?</h2>

            <div className="info-stack">
              <div>
                <p className="small-label">Fast response</p>
                <p>We respond quickly and help you plan the right service for your needs.</p>
              </div>

              <div>
                <p className="small-label">Transparent pricing</p>
                <p>Clear quotes and no hidden charges before work begins.</p>
              </div>

              <div>
                <p className="small-label">Reliable team</p>
                <p>Skilled professionals with attention to detail and quality workmanship.</p>
              </div>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-grid">
              <div>
                <label>Full name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label>Email address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label>Phone number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label>Service type</label>
                <select name="service" value={formData.service} onChange={handleChange}>
                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label>Preferred date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label>Preferred time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="textarea-wrap">
              <label>Project details</label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                rows={6}
                placeholder="Tell us about the work you need done..."
              />
            </div>

            <button type="submit" className="primary-btn full-width booking-submit">
              Submit booking request
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
