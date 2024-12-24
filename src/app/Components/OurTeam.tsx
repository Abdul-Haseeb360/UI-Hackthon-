import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    image: "/Images/Memeber1.png", // Replace with actual image path
    name: "Username",
    profession: "Profession",
  },
  {
    id: 2,
    image: "/Images/Memeber2.png", // Replace with actual image path
    name: "Username",
    profession: "Profession",
  },
  {
    id: 3,
    image: "/Images/Memeber3.jpg", // Replace with actual image path
    name: "Username",
    profession: "Profession",
  },
];

function TeamSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
        <p className="mt-2 text-gray-600">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="text-center">
            {/* Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-72 object-cover mb-4"
            />
            {/* Name and Profession */}
            <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
            <p className="text-gray-600">{member.profession}</p>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;