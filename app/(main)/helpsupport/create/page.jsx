import React from "react";
import { MessageCircle, Mail, Bot, Phone } from "lucide-react";

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-green-300 px-6 py-16 text-gray-800">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            Need Help?
          </h1>
          <p className="text-lg text-gray-600">
            We’ve got you covered. Whether it's a bug or a budgeting doubt — we're here for you.
          </p>
        </header>

        {/* Support Options */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <MessageCircle className="text-green-600 w-7 h-7" />
              <h2 className="text-xl font-semibold">Live Chat</h2>
            </div>
            <p className="text-gray-600 mb-2">Talk to our AI assistant for instant answers.</p>
            <button className="mt-2 text-green-600 font-semibold hover:underline">
              Start Chat
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <Mail className="text-green-600 w-7 h-7" />
              <h2 className="text-xl font-semibold">Email Us</h2>
            </div>
            <p className="text-gray-600 mb-2">Stuck somewhere? Drop us a detailed message.</p>
            <a href="mailto:support@aiexpensetracker.com" className="mt-2 text-green-600 font-semibold hover:underline">
              support@aiexpensetracker.com
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <Bot className="text-green-600 w-7 h-7" />
              <h2 className="text-xl font-semibold">Smart Help</h2>
            </div>
            <p className="text-gray-600 mb-2">Let our AI suggest help articles based on your issue.</p>
            <button className="mt-2 text-green-600 font-semibold hover:underline">
              Try AI Assistant
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <Phone className="text-green-600 w-7 h-7" />
              <h2 className="text-xl font-semibold">Call Support</h2>
            </div>
            <p className="text-gray-600 mb-2">Talk to a real human, Mon-Fri, 10am–6pm IST.</p>
            <p className="mt-2 text-green-600 font-semibold">+91 7828678975</p>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-white rounded-xl p-4 shadow-sm">
              <summary className="font-medium cursor-pointer text-gray-800">How do I connect my bank account?</summary>
              <p className="mt-2 text-gray-600">
                Currently, our app supports manual entries and receipt scanning. Bank integration is coming soon.
              </p>
            </details>
            <details className="bg-white rounded-xl p-4 shadow-sm">
              <summary className="font-medium cursor-pointer text-gray-800">Is my data secure?</summary>
              <p className="mt-2 text-gray-600">
                Absolutely. We use secure authentication with Clerk and encrypted storage via Supabase.
              </p>
            </details>
            <details className="bg-white rounded-xl p-4 shadow-sm">
              <summary className="font-medium cursor-pointer text-gray-800">How does AI predict expenses?</summary>
              <p className="mt-2 text-gray-600">
                Our AI looks at your past entries and uses pattern recognition to predict your future spending habits.
              </p>
            </details>
          </div>
        </section>

        <footer className="text-center pt-12 text-sm text-black">
          Built with care by the AI Expense Tracker Team. You matter to us.
        </footer>
      </div>
    </main>
  );
}
