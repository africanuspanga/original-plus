"use client";

import { useState, type FormEvent } from "react";
import { whatsappLink } from "@/lib/site";

/** Contact form that hands the message off to WhatsApp. */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = [
      "Hello Original Plus!",
      "",
      `Name: ${name}`,
      phone && `Phone: ${phone}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "w-full rounded-2xl border border-ink/15 bg-white px-5 py-3.5 text-sm text-ink placeholder:text-ink/40 outline-none transition-colors focus:border-gold-dark focus:ring-2 focus:ring-gold/40";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-ink">
          Your name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Aisha Juma"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium text-ink">
          Phone number <span className="font-normal text-ink/40">(optional)</span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="e.g. 0756 533 452"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How can we help you?"
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-gold py-4 text-sm font-bold tracking-wide text-ink transition-colors hover:bg-gold-light"
      >
        Send via WhatsApp
      </button>
      <p className="text-center text-xs text-ink/50">
        Your message opens in WhatsApp. We usually reply within minutes.
      </p>
    </form>
  );
}
