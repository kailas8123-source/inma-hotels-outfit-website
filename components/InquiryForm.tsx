"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const productOptions = [
  "Hotel outfitting",
  "Branded toiletries & amenities",
  "Luxury towels & bath linen",
  "Bedsheets & room linen",
  "Guest room accessories",
  "Lobby accessories",
  "Hygiene products",
  "Same-day / 48-hour delivery",
];

export function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  return (
    <form
      className={compact ? "inquiry-form compact" : "inquiry-form"}
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <label>
        Company
        <input required name="company" placeholder="Company name" />
      </label>
      <label>
        Contact
        <input required name="contact" placeholder="Name / phone" />
      </label>
      <label>
        Requirement
        <select name="requirement" defaultValue="Hotel outfitting">
          {productOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label>
        Quantity / Timeline
        <input name="timeline" placeholder="Example: 250 rooms, Q3 delivery" />
      </label>
      <label className="full">
        Project Notes
        <textarea name="notes" placeholder="Share item list, location, preferred brands, and delivery schedule." />
      </label>
      <button className="form-submit" type="submit">
        Submit RFQ <ArrowRight size={16} />
      </button>
      {sent ? (
        <p className="form-note success">
          <CheckCircle2 size={16} /> Request captured. INMA will respond through the procurement desk.
        </p>
      ) : (
        <p className="form-note">For urgent procurement, use the WhatsApp inquiry button.</p>
      )}
    </form>
  );
}
