"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

type EnquireFormProps = {
  open: boolean;
  onClose: () => void;
};

const domainOptions = [
  "Technology",
  "Data Science",
  "Finance",
  "Leadership",
  "Operations",
];

const deliveryOptions = ["Online", "Offline", "Hybrid"];

export default function EnquireForm({ open, onClose }: EnquireFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "idle" | "success" | "error";
    text: string;
  }>({ type: "idle", text: "" });

  useEffect(() => {
    if (!open) {
      return;
    }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onEscape);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onEscape);
    };
  }, [open, onClose]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitMessage({ type: "idle", text: "" });
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      company: String(formData.get("company") ?? ""),
      courseDomain: String(formData.get("courseDomain") ?? ""),
      candidates: Number(formData.get("candidates") ?? 0),
      mode: String(formData.get("mode") ?? ""),
      location: String(formData.get("location") ?? ""),
    };

    try {
      const response = await fetch("/api/enquire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        setSubmitMessage({
          type: "error",
          text: data.message ?? "Unable to submit the enquiry right now.",
        });
        return;
      }

      form.reset();
      setSubmitMessage({
        type: "success",
        text: data.message ?? "Enquiry submitted successfully.",
      });
    } catch {
      setSubmitMessage({
        type: "error",
        text: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-100 flex items-center justify-center p-4 transition-all duration-300 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!open}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/45 backdrop-blur-[1px]"
        onClick={onClose}
        aria-label="Close enquire form"
      />

      <div
        className={`relative bg-white rounded-lg shadow-lg w-full max-w-3xl flex flex-col sm:flex-row transform transition-all duration-300 ${
          open ? "translate-y-0 scale-100" : "translate-y-6 scale-95"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquire-now-title"
      >
        <div className="hidden sm:flex w-1/2 bg-blue-100 items-center justify-center rounded-l-lg overflow-hidden">
          <Image
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/business-v2.webp"
            alt="Quote Request"
            width={600}
            height={900}
            className="w-full h-full object-cover"
          />
        </div>

        <div
          id="scrollbar2"
          className="font-circular w-full md:w-1/2 p-6 max-h-[90vh] overflow-y-auto"
        >
          <div className="flex justify-between items-center pb-2">
            <h2
              id="enquire-now-title"
              className="text-xl md:text-2xl font-bold text-gray-900 leading-tight"
            >
              Enquire Now
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800 text-2xl"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>

          <form onSubmit={onSubmit}>
            <div className="text-black space-y-4 mt-4">
              <div>
                <input
                  className="w-full px-4 py-3 font-normal text-sm border-b-2 outline-none transition pl-2 mt-2 border-neutral-200 focus:border-blue-500"
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Enter Name"
                  required
                />
              </div>

              <div>
                <input
                  className="w-full px-4 py-2 font-normal text-sm bg-white border-b-2 outline-none transition pl-2 mt-2 border-neutral-300 focus:border-blue-500"
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                  required
                />
              </div>

              <div>
                <input
                  className="w-full px-4 py-2 font-normal text-sm bg-white border-b-2 outline-none transition pl-2 mt-2 border-neutral-300 focus:border-blue-500"
                  name="phone"
                  id="phone"
                  type="tel"
                  placeholder="Phone number is required"
                  defaultValue="+91"
                  required
                />
              </div>

              <div>
                <input
                  className="w-full px-4 py-2 font-normal text-sm bg-white border-b-2 outline-none transition pl-2 mt-2 border-neutral-300 focus:border-blue-500"
                  name="company"
                  id="company"
                  type="text"
                  placeholder="Enter company name"
                  required
                />
              </div>

              <div>
                <select
                  name="courseDomain"
                  defaultValue=""
                  className="w-full px-2 py-2 font-normal text-sm bg-white border-b-2 outline-none transition mt-2 border-neutral-300 focus:border-blue-500"
                  required
                >
                  <option value="" disabled>
                    Select Domain
                  </option>
                  {domainOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <input
                  type="number"
                  min={1}
                  name="candidates"
                  placeholder="Enter No. of candidates"
                  className="w-full px-4 py-2 font-normal text-sm bg-white border-b-2 outline-none transition pl-2 mt-2 border-neutral-300 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <select
                  name="mode"
                  defaultValue=""
                  className="w-full px-2 py-2 font-normal text-sm bg-white border-b-2 outline-none transition mt-2 border-neutral-300 focus:border-blue-500"
                  required
                >
                  <option value="" disabled>
                    Select Mode of Delivery *
                  </option>
                  {deliveryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <input
                  type="text"
                  name="location"
                  placeholder="Eg: Gurgaon, Delhi, India"
                  className="w-full px-4 py-2 font-normal text-sm bg-white border-b-2 outline-none transition pl-2 mt-2 border-neutral-300 focus:border-blue-500"
                  required
                />
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 transition text-white rounded-lg flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>

              {submitMessage.type !== "idle" ? (
                <p
                  className={`text-sm ${
                    submitMessage.type === "success"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {submitMessage.text}
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
