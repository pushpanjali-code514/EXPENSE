import React from "react";
import { Users, Rocket, Sparkles } from "lucide-react";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-green-300 px-6 py-16 text-gray-800">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <section className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold text-teal-900 drop-shadow-sm">
            Who Are We?
          </h1>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            We’re a team of curious minds building the smartest way to manage your money — with the power of AI and simplicity at heart.
          </p>
        </section>

        {/* Info Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-center border-t-4 border-teal-400">
            <Rocket className="mx-auto text-teal-500 w-8 h-8 mb-3" />
            <h2 className="text-xl font-semibold text-gray-800">Our Mission</h2>
            <p className="text-sm text-gray-600 mt-2">
              To revolutionize personal finance by making expense tracking smart, automatic, and delightful.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-center border-t-4 border-green-400">
            <Sparkles className="mx-auto text-green-500 w-8 h-8 mb-3" />
            <h2 className="text-xl font-semibold text-gray-800">Why AI?</h2>
            <p className="text-sm text-gray-600 mt-2">
              AI allows us to learn your habits and help you save smarter — predicting expenses before they surprise you.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-center border-t-4 border-indigo-400">
            <Users className="mx-auto text-indigo-500 w-8 h-8 mb-3" />
            <h2 className="text-xl font-semibold text-gray-800">The Team</h2>
            <p className="text-sm text-gray-600 mt-2">
              Built with ❤️ by final-year students passionate about design, tech & problem solving.
            </p>
          </div>
        </section>

        {/* 👥 Meet the Team */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-teal-900 text-center">Meet the Team</h2>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 font-medium text-center">
            <li className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              🧠 <span className="text-teal-600 font-semibold">Deeksha Dewangan</span><br />
              <span className="text-sm text-gray-600">Backend & Database Engineer</span>
            </li>
            <li className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
            🌸 <span className="text-indigo-600 font-semibold">Vasundra Thakur</span><br />
              <span className="text-sm text-gray-600">UI Designer</span>
            </li>
            <li className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
            🧠 <span className="text-sky-600 font-semibold">Pushpanjali</span><br />
              <span className="text-sm text-gray-600">Frontend Developer</span>
            </li>
            <li className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              💻 <span className="text-green-600 font-semibold">Ayush Pradhan</span><br />
              <span className="text-sm text-gray-600">AI & Automation Specialist</span>
            </li>
            <li className="bg-white p-4 rounded-xl shadow hover:shadow-md transition col-span-full sm:col-span-2 md:col-span-1">
              🧠 <span className="text-emerald-600 font-semibold">Aditya Prakash Nathan</span><br />
              <span className="text-sm text-gray-600">Frontend Developer</span>
            </li>
          </ul>
        </section>

        {/* Footer Note */}
        <section className="text-center">
          <p className="text-md text-gray-700 max-w-2xl mx-auto">
            Whether you're a student, a freelancer, or a full-time dreamer — <br />
            <span className="font-medium text-teal-600">AI Expense Tracker</span> is your friendly sidekick for smarter money moves.
          </p>
        </section>

        <footer className="text-center pt-10 text-sm text-gray-500">
          Made with 🌿 caffeine & creativity — by Team MoneyMate.
        </footer>
      </div>
    </main>
  );
}
