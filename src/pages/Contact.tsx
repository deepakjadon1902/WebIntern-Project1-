import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Crown,
  Shield,
  Clock,
  Users,
} from "lucide-react";

const navyBlue = "#1A237E";
const navyBlueLight = "#3F51B5";
const navyBlueLighter = "#C5CAE9";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    serviceType: "",
    platform: "",
    message: "",
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hr10cr9", // ✅ Your EmailJS service ID
        "template_k7xmpof", // ✅ Your EmailJS template ID
        formRef.current!,
        "hRvRaFAOHU2s1ZEeZ" // ✅ Your EmailJS public key
      )
      .then(
        (result) => {
          alert(
            `Thank you, ${formData.user_name}! Your request has been sent.\nWe'll reach out to you at ${formData.user_email}.`
          );
          setFormData({
            user_name: "",
            user_email: "",
            serviceType: "",
            platform: "",
            message: "",
          });
        },
        (error) => {
          alert("Oops! Something went wrong. Please try again later.");
          console.error(error.text);
        }
      );
  };

  const platformSpecialties = [
    { name: "YouTube Growth", expertise: "Subscriber & View Optimization" },
    { name: "Instagram Excellence", expertise: "Follower & Engagement Enhancement" },
    { name: "LinkedIn Authority", expertise: "Professional Network Expansion" },
    { name: "Twitter Influence", expertise: "Thought Leadership Development" },
    { name: "TikTok Mastery", expertise: "Viral Content Amplification" },
    { name: "Spotify Prominence", expertise: "Artist Profile Development" },
  ];

  const supportServices = [
    {
      icon: <Crown className="h-8 w-8" style={{ color: navyBlueLight }} />,
      title: "VIP Account Management",
      description: "Dedicated account managers for our distinguished clientele.",
    },
    {
      icon: <Shield className="h-8 w-8" style={{ color: navyBlue }} />,
      title: "Premium Security Consultation",
      description: "Expert guidance on maintaining account safety.",
    },
    {
      icon: <Clock className="h-8 w-8" style={{ color: "#3949AB" }} />,
      title: "24/7 Elite Support",
      description: "Round-the-clock assistance from our specialists.",
    },
    {
      icon: <Users className="h-8 w-8" style={{ color: navyBlueLight }} />,
      title: "Strategy Consultation",
      description: "Recommendations for optimizing your engagement strategy.",
    },
  ];

  const contactMethods = [
    {
      icon: <Mail className="h-7 w-7" style={{ color: navyBlue }} />,
      title: "Royal Correspondence",
      lines: ["nobility@engagesphere.com", "concierge@engagesphere.com"],
      description: "For distinguished inquiries and premium service requests",
    },
    {
      icon: <Phone className="h-7 w-7" style={{ color: navyBlue }} />,
      title: "Executive Hotline",
      lines: ["+1 (800) NOBLE-01", "24/7 Premium Support"],
      description: "Direct access to our senior consultation specialists",
    },
    {
      icon: <MapPin className="h-7 w-7" style={{ color: navyBlue }} />,
      title: "Distinguished Address",
      lines: [
        "The EngageSphere Tower",
        "1 Digital Aristocracy Plaza",
        "Beverly Hills, CA 90210",
      ],
      description: "Our headquarters in the heart of digital excellence",
    },
    {
      icon: <MessageSquare className="h-7 w-7" style={{ color: navyBlue }} />,
      title: "Live Concierge",
      lines: ["Instant premium chat support available"],
      description: "Connect with our dedicated account specialists immediately",
    },
  ];

  return (
    <div
      className="min-h-screen p-6 md:p-12"
      style={{
        background:
          "linear-gradient(90deg, #E8EAF6 0%, #C5CAE9 50%, #E8EAF6 100%)",
      }}
    >
      <div
        className="max-w-7xl mx-auto rounded-3xl shadow-2xl border overflow-hidden"
        style={{ borderColor: navyBlueLighter, backgroundColor: "white" }}
      >
        <div className="grid md:grid-cols-12 gap-10 p-8 md:p-16">
          {/* Contact Methods */}
          <section className="md:col-span-4 space-y-10">
            <h2
              className="text-3xl font-semibold font-serif mb-6 border-b-2 pb-2"
              style={{ borderColor: navyBlue, color: navyBlue }}
            >
              Contact Methods
            </h2>
            {contactMethods.map((method, idx) => (
              <div
                key={idx}
                className="p-6 border rounded-xl shadow-md hover:shadow-lg transition-shadow hover:bg-gray-100"
                style={{ borderColor: navyBlueLighter }}
              >
                <div className="flex items-center space-x-4 mb-3">
                  <div
                    className="p-3 rounded-full"
                    style={{
                      background:
                        "linear-gradient(135deg, #C5CAE9 0%, #9FA8DA 100%)",
                    }}
                  >
                    {method.icon}
                  </div>
                  <h3
                    className="text-xl font-semibold font-serif"
                    style={{ color: navyBlue }}
                  >
                    {method.title}
                  </h3>
                </div>
                <div className="text-gray-700 font-medium space-y-1 mb-2">
                  {method.lines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                <p className="text-sm italic text-gray-500">
                  {method.description}
                </p>
              </div>
            ))}
          </section>

          {/* Form */}
          <section className="md:col-span-8 space-y-10">
            <div
              className="rounded-2xl shadow-lg p-10 border"
              style={{
                borderColor: navyBlueLighter,
                backgroundColor: "#F5F7FF",
              }}
            >
              <h2
                className="text-3xl font-serif font-bold mb-6 text-center"
                style={{ color: navyBlue }}
              >
                Request Royal Consultation
              </h2>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6 max-w-3xl mx-auto"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <label className="block">
                    <span
                      className="text-gray-700 font-semibold font-serif mb-1 block"
                      style={{ color: navyBlue }}
                    >
                      Distinguished Name
                    </span>
                    <input
                      type="text"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full rounded-lg border px-4 py-3 font-serif"
                      style={{ borderColor: navyBlueLighter, color: navyBlue }}
                    />
                  </label>

                  <label className="block">
                    <span
                      className="text-gray-700 font-semibold font-serif mb-1 block"
                      style={{ color: navyBlue }}
                    >
                      Email Address
                    </span>
                    <input
                      type="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-lg border px-4 py-3 font-serif"
                      style={{ borderColor: navyBlueLighter, color: navyBlue }}
                    />
                  </label>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <label className="block">
                    <span
                      className="text-gray-700 font-semibold font-serif mb-1 block"
                      style={{ color: navyBlue }}
                    >
                      Service Interest
                    </span>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border px-4 py-3 font-serif bg-white"
                      style={{ borderColor: navyBlueLighter, color: navyBlue }}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option value="growth">Premium Growth Services</option>
                      <option value="consultation">Strategy Consultation</option>
                      <option value="management">Account Management</option>
                      <option value="security">Security Assessment</option>
                      <option value="custom">Custom Package</option>
                    </select>
                  </label>

                  <label className="block">
                    <span
                      className="text-gray-700 font-semibold font-serif mb-1 block"
                      style={{ color: navyBlue }}
                    >
                      Primary Platform
                    </span>
                    <select
                      name="platform"
                      value={formData.platform}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border px-4 py-3 font-serif bg-white"
                      style={{ borderColor: navyBlueLighter, color: navyBlue }}
                    >
                      <option value="" disabled>
                        Select platform
                      </option>
                      {platformSpecialties.map(({ name }, idx) => (
                        <option key={idx} value={name}>
                          {name}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span
                    className="text-gray-700 font-semibold font-serif mb-1 block"
                    style={{ color: navyBlue }}
                  >
                    Your Message
                  </span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe your goals or ask a question"
                    className="w-full rounded-lg border px-4 py-3 font-serif resize-none"
                    style={{ borderColor: navyBlueLighter, color: navyBlue }}
                  />
                </label>

                <div className="text-center">
                  <button
                    type="submit"
                    className="text-white font-semibold px-12 py-3 rounded-full shadow-lg transition"
                    style={{
                      backgroundColor: navyBlue,
                      boxShadow: `0 4px 15px ${navyBlueLight}`,
                    }}
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>

            {/* Support Services */}
            <div
              className="rounded-2xl p-8 shadow-inner border"
              style={{
                borderColor: navyBlueLighter,
                backgroundColor: navyBlueLighter,
              }}
            >
              <h3
                className="text-2xl font-serif font-bold mb-6 text-center"
                style={{ color: navyBlue }}
              >
                Elite Support & Services
              </h3>
              <ul className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
                {supportServices.map(({ icon, title, description }, idx) => (
                  <li
                    key={idx}
                    className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-gray-200 transition"
                  >
                    <div>{icon}</div>
                    <h4
                      className="font-serif text-lg font-semibold"
                      style={{ color: navyBlue }}
                    >
                      {title}
                    </h4>
                    <p className="text-gray-700 text-sm">{description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Platform Specialties */}
        <section
          className="border-t p-10 rounded-b-3xl max-w-6xl mx-auto my-12"
          style={{ borderColor: navyBlueLighter }}
        >
          <h2
            className="text-3xl font-serif font-bold mb-10 text-center"
            style={{ color: navyBlue }}
          >
            Platform Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {platformSpecialties.map(({ name, expertise }, idx) => (
              <div
                key={idx}
                className="rounded-xl p-6 shadow-md border hover:border-opacity-90 transition-colors cursor-default"
                style={{
                  borderColor: navyBlueLighter,
                  backgroundColor: navyBlueLighter,
                }}
              >
                <h3
                  className="font-serif text-xl font-semibold mb-3"
                  style={{ color: navyBlue }}
                >
                  {name}
                </h3>
                <p className="text-gray-700 italic">{expertise}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
