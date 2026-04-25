import ModalLayout from "./ModalLayout";

interface ProjectProps {
  name: string;
  description: string;
  github: string;
  link: string;
  caption: string;
  type: string;
}

interface ModalProjectsProps {
  link: ProjectProps;
  setOpen: (isOpen: boolean) => void;
}

const ModalProjects = ({ setOpen, link }: ModalProjectsProps) => (
  <ModalLayout setOpen={setOpen}>
    <h2 className="text-2xl">{link.name}</h2>
    <p>Description: {link.description}</p>
    <p>
      Host Link:
      <span className="my-text ms-2">
        {link.link === null ? (
          "Not Available"
        ) : (
          <a href={link.link} target="_blank" className="underline">
            Site
          </a>
        )}
      </span>
    </p>
    <p>Type: {link.type.toUpperCase()}</p>
    <p>Caption: {link.caption}</p>
    <p>
      Github Link:
      <span className="my-text ms-2">
        {link.github === null ? (
          "Not Available"
        ) : (
          <a href={link.github} target="_blank" className="underline">
            Account
          </a>
        )}
      </span>
    </p>
  </ModalLayout>
);

export default ModalProjects;
