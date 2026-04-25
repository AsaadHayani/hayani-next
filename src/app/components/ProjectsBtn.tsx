"use client";
import { useState } from "react";
import { ModalProjects } from "../exports";

interface ProjectProps {
  name: string;
  description: string;
  github: string;
  link: string;
  caption: string;
  type: string;
}

const ProjectsBtn = (link: ProjectProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = async () => setOpen(!open);

  return (
    <>
      {open && <ModalProjects {...{ link, setOpen }} />}
      <div className="text-lg underline cursor-pointer" onClick={handleClick}>
        {link.name}
      </div>
    </>
  );
};

export default ProjectsBtn;
