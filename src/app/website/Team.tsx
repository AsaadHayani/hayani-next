import { itemsTeam } from "@/app/exports";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Team = () => (
  <section>
    <h2 className="my-title py-10 text-center">Our Team</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {itemsTeam.map((item) => (
        <div
          key={item.name}
          className="my-bg rounded-xl shadow-lg overflow-hidden"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-40 object-cover hover:scale-110 transition duration-300"
          />

          <div className="p-3 space-y-3">
            <h3 className="text-xl text-white">{item.name}</h3>
            <p className="text-gray-300 text-sm">{item.description}</p>
            <div className="flex justify-around">
              {item.social.map((link) => {
                const icons = {
                  facebook: <FaFacebook size={23} />,
                  linkedin: <FaGithub size={23} />,
                  github: <FaLinkedin size={23} />,
                };
                return (
                  <a
                    key={link.type}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#941600] transition"
                  >
                    {icons[link.type]}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Team;
