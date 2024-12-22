import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_81tw9xw",
        "template_m37okw1",
        form.current,
        "ao9Pnvt-EA8-h9gBU"
      )
      .then((result) => {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        toast.error("Failed to send message. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left side - Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <MapPin className="h-6 w-6 text-gray-900" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">
                  Zádiel 25, 044 02 Zádiel, Slovakia
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-gray-900" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+421 908 262 669</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-gray-900" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">info@zadiel-accommodation.sk</p>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#111827] focus:border-transparent"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#111827] focus:border-transparent"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full resize-none px-4 py-2 border border-gray-300 rounded-md focus:ring-[#111827] focus:border-transparent"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-gray-900 text-white py-2 px-4 rounded-md transition-colors duration-200 
                  ${
                    loading
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-gray-800"
                  }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1865.1718305314703!2d20.831887898370013!3d48.6146036347854!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473f05ef849c2bdb%3A0x400f7d1c69787f0!2s044%2002%20Z%C3%A1diel!5e0!3m2!1ssk!2ssk!4v1734883575748!5m2!1ssk!2ssk"
            className="w-full h-[400px] rounded-lg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <Toaster position="top-right" />
    </section>
  );
};

export default Contact;
