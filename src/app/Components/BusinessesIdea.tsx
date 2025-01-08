import Image from 'next/image'
import Link from 'next/link'
import Arrow from "../../../public/Images/Arrow.png"
import { contactCards } from "@/constant/data"
export default function ContactSection() {
  return (
    <div>
    <section className="w-full px-4 md:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-[#252B42] mb-2">VISIT OUR OFFICE</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#252B42] max-w-2xl mx-auto">
            We help small businesses with big ideas
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {contactCards.map((card, index) => {
            const Icon = card.icon
            return (
              <div
                key={index}
                className={`flex flex-col items-center p-8 md:p-12 ${
                  card.variant === 'dark'
                    ? 'bg-[#252B42] text-white'
                    : 'bg-white text-[#252B42]'
                }`}
              >
                <Icon
                  size={72}
                  className={card.variant === 'dark' ? 'text-white' : 'text-[#23A6F0]'}
                  strokeWidth={1}
                />
                <div className="mt-4 space-y-2 text-center">
                  {card.emails.map((email, emailIndex) => (
                    <Link
                      key={emailIndex}
                      href={`mailto:${email}`}
                      className={`block text-sm hover:underline ${
                        card.variant === 'dark' ? 'text-white' : 'text-[#252B42]'
                      }`}
                    >
                      {email}
                    </Link>
                  ))}
                </div>
                <p
                  className={`mt-4 font-bold  ${
                    card.variant === 'dark' ? 'text-white' : 'text-[#252B42]'
                  }`}
                >
                  Get Support
                </p>
                <button
                  className={`mt-4 px-8 py-3 rounded-full border text-sm font-bold transition-colors ${
                    card.variant === 'dark'
                      ? 'border-white text-white hover:bg-white hover:text-[#252B42]'
                      : 'border-[#23A6F0] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white '
                  }`}
                >
                  Submit Request
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>


    <section className="w-full md:py-24">
      <div className='flex justify-center pb-5'>
      <Image src={Arrow} alt=''/>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <h2 className="text-sm font-bold text-[#252B42] mb-2">
            WE Can't WAIT TO MEET YOU
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#252B42] mb-8">
            Let's Talk
          </h3>
          <button className="px-10 py-4 bg-[#23A6F0] text-white rounded-md font-bold text-sm hover:bg-blue-600 transition-colors">
            Try it free now
          </button>
        </div>
      </div>
    </section>
    </div>
  )
}

