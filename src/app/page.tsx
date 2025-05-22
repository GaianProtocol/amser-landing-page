import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans">
      {/* Header */}
      <header className="w-full flex justify-between items-center py-6 px-4 md:px-16 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 relative">
            <Image
              src="/amser-logo-new.svg"
              alt="AMSER Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
          <span className="text-2xl font-bold tracking-tight">AMSER</span>
        </div>
        <nav className="hidden md:flex gap-8 text-base font-medium">
          <a href="#about" className="hover:text-[#97EF86] transition-colors">About</a>
          <a href="#features" className="hover:text-[#97EF86] transition-colors">Features</a>
          <a href="#contact" className="hover:text-[#97EF86] transition-colors">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-16 py-12 md:py-24 bg-white">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            <span className="whitespace-normal">Payment on Behalf Service</span> for Modern Businesses
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            AMSER is your trusted payment gateway, simplifying transactions and empowering your business to focus on what matters most.
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
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="30" width="100" height="60" rx="12" fill="#97EF86" />
              <rect x="30" y="50" width="60" height="20" rx="6" fill="white" />
              <circle cx="60" cy="60" r="8" fill="#97EF86" stroke="white" strokeWidth="3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 md:px-16 bg-[#F8FFF6]">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose AMSER?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-[#97EF86]">
            <span className="text-4xl mb-4">💳</span>
            <h3 className="font-semibold text-xl mb-2">Seamless Payments</h3>
            <p className="text-gray-700">Fast, secure, and reliable payment processing for your business and your customers.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-[#97EF86]">
            <span className="text-4xl mb-4">🔒</span>
            <h3 className="font-semibold text-xl mb-2">Top-tier Security</h3>
            <p className="text-gray-700">Your transactions are protected with industry-leading security and compliance standards.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-[#97EF86]">
            <span className="text-4xl mb-4">⚡</span>
            <h3 className="font-semibold text-xl mb-2">Instant Settlements</h3>
            <p className="text-gray-700">Receive your funds quickly with our instant settlement feature, keeping your cash flow healthy.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 md:px-16 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About AMSER</h2>
          <p className="text-lg text-gray-700 mb-4">
            AMSER is dedicated to making payments effortless for businesses of all sizes. Our Payment on Behalf Service streamlines your financial operations, reduces manual work, and ensures every transaction is smooth and secure.
          </p>
          <p className="text-lg text-gray-700">
            Whether you&apos;re a startup or an enterprise, AMSER adapts to your needs, providing a robust payment gateway that grows with your business.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 md:px-16 bg-[#F8FFF6]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-8">
            Ready to get started or have questions? Reach out to our team and we&apos;ll get back to you soon.
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
