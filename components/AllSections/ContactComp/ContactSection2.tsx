"use client";

import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

export default function ContactSection2() {

  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          toast.success('✅ Message envoyé avec succès !')
          form.current?.reset()
        },
        (error) => {
          toast.error("❌ Une erreur s'est produite. Veuillez réessayer.")
          console.error(error)
        }
      )
  }

  return (
    <div className="w-full h-screen bg-white rounded-t-none md:rounded-t-[120px] flex flex-wrap justify-around items-center gap-10">
      <div>
      <form ref={form}
      onSubmit={sendEmail}
      className="mx-auto rounded-xl p-8 space-y-6">
        <h2 className="text-2xl md:text-4xl font-bold  text-gray-800">
          Contactez-moi
        </h2>
        <div className="max-w-[650px] 2xl:max-w-[1040px]  h-auto">
          <div className="flex gap-2.5 flex-wrap mb-3">
            <div>
              <input
                id="name"
                type="text"
                name="user_name"
                placeholder="Your name"
                className="p-3 bg-[#F2F8FC] w-xs 2xl:w-[500px]
               h-[55px] 2xl:h-[70px] border border-none placeholder-black/50
             text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD23E3]"
                required
              />
            </div>

            <div>
              <input
                id="name"
                type="text"
                name="user_email"
                placeholder="Your email"
                className="p-3 bg-[#F2F8FC] w-xs 2xl:w-[500px]
               h-[55px] 2xl:h-[70px] border border-none placeholder-black/50
               text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD23E3]"
                required
              />
            </div>
          </div>

          <div className="flex flex-col mb-3">
            <textarea
              id="message"
              rows={5}
              name="message"
              placeholder="Describe your project in a few lines..."
              className="p-3 00px] placeholder-black/50 text-black bg-[#F2F8FC] w-full 2xl:w-[1040px] 
            h-[255px] border border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD23E3]"
              required
            ></textarea>
          </div>
          <div className="w-full flex justify-end items-center">
            <button
              type="submit"
              className="w-fit h-fit px-10 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#FD23E3] via-[#8021E8] to-[#0619EA] hover:opacity-90 transition duration-300 focus"
            >
              Envoyer
            </button>
          </div>
        </div>
      </form>
      </div>


      <div>
          <img src="/images/Contact_Images/real1.png" alt="Description" className="max-w-[600px]  h-auto" />
      </div>
    </div>
  );
}
