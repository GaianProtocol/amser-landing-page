"use client";
import Image from "next/image";
import { AppHeader } from "./components/AppHeader";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans">
      {/* Header */}
      <AppHeader />

      {/* Hero Section */}
      <section className="flex-1 flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-16 py-12 md:py-24 bg-white">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-6 leading-tight">
            <span className="whitespace-normal">Track Your Employee</span>{" "}
            Spending on Business Trips
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Unlock human potential by removing financial and administrative
            barriers to innovation, creativity, and community progress.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#97EF86] text-black font-semibold px-8 py-3 rounded-full shadow hover:scale-105 transition-transform"
          >
            Get Started
          </a>
        </div>
        <div className="w-full max-w-md flex justify-center">
          {/* Placeholder illustration */}
          <div className="w-64 h-64 bg-[#97EF86]/20 rounded-3xl flex items-center justify-center">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="10"
                y="30"
                width="100"
                height="60"
                rx="12"
                fill="#97EF86"
              />
              <rect x="30" y="50" width="60" height="20" rx="6" fill="white" />
              <circle
                cx="60"
                cy="60"
                r="8"
                fill="#97EF86"
                stroke="white"
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 md:px-16 bg-[#F8FFF6]">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose AMSER?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-[#97EF86] group hover:shadow-lg transition-shadow duration-300">
            <span className="text-4xl mb-4 text-black">
              <Image
                src={"/icons/credit-card.svg"}
                alt="Credit Card"
                width={40}
                height={40}
              />
            </span>
            <h3 className="font-semibold text-xl mb-2">
              Built-in coaching <br />
              that wins
            </h3>
            <p className="text-gray-700">
              Our AI proposal assistant and peer-review loops polish your
              narrative, budget, and metrics, raising success rates up to 3×
              compared with DIY applications.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-[#97EF86]">
            <span className="text-4xl mb-4 text-black">
              <Image
                src={"/icons/padlock.svg"}
                alt="Credit Card"
                width={40}
                height={40}
              />
            </span>
            <h3 className="font-semibold text-xl mb-2">
              Lightning-fast from search to submit
            </h3>
            <p className="text-gray-700">
              Amser collapses weeks of grant hunting into a single, smart
              dashboard—auto-matching your project to open funds and pre-filling
              forms so you can hit “Apply” in minutes, not months.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-[#97EF86]">
            <span className="text-4xl mb-4">
              <Image
                src={"/icons/lightning.svg"}
                alt="Credit Card"
                width={40}
                height={40}
              />
            </span>
            <h3 className="font-semibold text-xl mb-2">
              Radical transparency, <br /> rock-solid trust
            </h3>
            <p className="text-gray-700">
              Track every review step in real time, keep your data encrypted
              end-to-end, and pay zero hidden fees—because funding should feel
              empowering, not mysterious.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 md:px-16 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About AMSER</h2>
          <p className="text-lg text-gray-700 mb-4">
            At AMSER, we believe the world changes when visionary people get the
            resources to act. Founded by former grant-seekers and funders who
            were frustrated by red tape, we set out to create a simpler, faster,
            and fairer path from <i>great idea to fully-funded project.</i>
          </p>
          <p className="text-lg text-gray-700">
            Whether you&apos;re a startup or an enterprise, AMSER adapts to your
            needs, providing a robust payment gateway that grows with your
            business.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 md:px-16 bg-[#F8FFF6]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-8">
            Ready to get started or have questions? Reach out to our team and
            we&apos;ll get back to you soon.
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 rounded border border-gray-200 focus:border-[#97EF86] outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 rounded border border-gray-200 focus:border-[#97EF86] outline-none"
              required
            />
            <textarea
              placeholder="Your Message"
              className="px-4 py-3 rounded border border-gray-200 focus:border-[#97EF86] outline-none resize-none"
              rows={4}
              required
            />
            <button
              type="submit"
              className="mt-2 bg-[#97EF86] text-black font-semibold px-8 py-3 rounded-full shadow hover:scale-105 transition-transform"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 px-4 md:px-16 text-center text-gray-500 text-sm bg-white border-t border-gray-100 mt-auto">
        <div>AM SERVICES CO., LTD</div>
        <div>&copy; {new Date().getFullYear()} AMSER. All rights reserved.</div>
      </footer>
    </div>
  );
}
