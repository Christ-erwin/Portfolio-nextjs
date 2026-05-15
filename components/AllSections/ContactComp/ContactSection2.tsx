"use client";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export default function ContactSection2() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      form.current!,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    ).then(
      () => { toast.success('Message sent successfully!'); form.current?.reset(); },
      () => { toast.error('Something went wrong. Please try again.'); }
    );
  };

  return (
    <section className="w-full bg-white px-6 py-16">
      <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-12 items-start">

        {/* Left — form */}
        <div className="md:col-span-3">
          <h2 className="text-2xl font-bold text-black mb-6">Send a message</h2>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" name="user_name" placeholder="Your name" required
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-black placeholder-black/30 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition" />
              <input type="email" name="user_email" placeholder="Your email" required
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-black placeholder-black/30 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition" />
            </div>
            <input type="text" name="subject" placeholder="Subject (e.g. Remote contract, Freelance project)" required
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-black placeholder-black/30 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition" />
            <textarea rows={6} name="message" placeholder="Tell me about your project, timeline, and budget..." required
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-black placeholder-black/30 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition resize-none"></textarea>
            <button type="submit"
              className="w-full grad-bg text-white font-semibold py-4 rounded-xl text-sm hover:opacity-90 transition-opacity">
              Send message →
            </button>
          </form>
        </div>

        {/* Right — info */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <div>
            <p className="section-tag">Direct contact</p>
            <div className="flex flex-col gap-3">
              <a href="mailto:framchristerwintl@gmail.com"
                className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3.5 hover:bg-gray-100 transition-colors group">
                <span className="text-xl">✉️</span>
                <div>
                  <p className="text-xs text-black/40">Email</p>
                  <p className="text-sm font-medium text-black">framchristerwintl@gmail.com</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/christ-erwin-fram-696a69257/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3.5 hover:bg-gray-100 transition-colors">
                <span className="text-xl">💼</span>
                <div>
                  <p className="text-xs text-black/40">LinkedIn</p>
                  <p className="text-sm font-medium text-black">Christ Erwin Fram</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-black rounded-2xl p-6">
            <p className="text-white font-semibold mb-1">Response time</p>
            <p className="text-white/50 text-sm">I reply within 24 hours on business days.</p>
            <div className="mt-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-green-400 text-xs font-medium">Available for new projects</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-5">
            <p className="font-semibold text-black mb-3 text-sm">I&apos;m open to</p>
            {["Remote contracts (part or full time)","Freelance missions (short or long term)","Full-time remote roles","Collaborations with agencies"].map(t => (
              <p key={t} className="text-black/60 text-xs mb-1.5">→ {t}</p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
