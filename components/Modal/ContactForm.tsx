"use client";

import React, { useState } from "react";
import {
  X,
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  PenTool,
  CheckCircle2,
} from "lucide-react"; // Optional: lucide-react for icons
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  headerText: String;
};

export default function ContactForm({
  open,
  onClose,
  headerText = "Get in touch",
}: Props) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const toastId = toast.loading("Sending message...");

    try {
      const result: EmailJSResponseStatus = await emailjs.send(
        "service_n85a26r",
        "template_74ozj4c",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        "HQn9xmQ5mqq6yhzQt"
      );

      if (result.text === "OK") {
        toast.success("Message sent successfully!", { id: toastId });

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        toast.error("Something went wrong", { id: toastId });
      }
    } catch (error: unknown) {
      toast.error("Failed to send message", { id: toastId });
      console.error(error);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <Toaster position="top-right" />
      <div
        className="bg-white w-full max-w-lg rounded-3xl p-8 relative shadow-2xl border border-slate-100 animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight">
            {headerText}
          </h2>
          <p className="text-slate-500 mt-2">
            Have a question? We'd love to help you out.
          </p>
        </div>

        {isSubmitted && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <p className="text-emerald-700">
              Message sent successfully! We'll contact you soon.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 ml-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 ml-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 ml-1">
                Phone (Optional)
              </label>
              <input
                type="number"
                name="phone"
                placeholder="+91 12345 67890"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
              >
                <option value="">Select a subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Admissions Guidance">Admissions Guidance</option>
                <option value="Visa Assistance">Visa Assistance</option>
                <option value="Scholarship Information">
                  Scholarship Information
                </option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 ml-1">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Tell us more about your project..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none placeholder:text-slate-400"
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-linear-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-2xl transition-all font-semibold flex items-center justify-center gap-2 group shadow-lg shadow-slate-200 active:scale-[0.98]"
          >
            Send Message
            <Send
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </form>
      </div>
    </div>
  );
}
