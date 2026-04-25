import { BiLinkExternal } from "react-icons/bi";
import { itemsAbout } from "@/app/exports";

const About = () => (
  <div className="py-10 space-y-7">
    <h2 className="my-title">About Me</h2>

    <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6">
      <div className="md:col-span-8">
        <p className="mb-4 leading-relaxed">
          Very organized and hard working I am looking for a responsible
          position to gain some work experience. I have solid experience in
          Bootstrap, Jquery, Javascript, PHP, MySQL and procient with framework
          Laravel for Backend (Platform Study Learning Project), React.Js for
          frontend, and I have many projects. I learned developed mobile apps
          using Flutter. I have minimal experience with NodeJs, ExpressJs and
          MongoDB. I have a program similar to Word, a program to print invoices
          in the store, and Todolist by C# WinForms.
        </p>

        <ul className="space-y-2">
          {itemsAbout.map((item) => (
            <li key={item.text} className="flex items-center gap-2 flex-wrap">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <BiLinkExternal size={25} className="my-text" />
              </a>

              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:col-span-4 text-center">
        <img
          src="https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Asaad Hayani"
          className="mx-auto w-70 h-67 hover:scale-110 transition duration-300 object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
);

export default About;
