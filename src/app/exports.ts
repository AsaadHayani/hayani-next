import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import z from "zod";

export { default as AppWrapper } from "@/app/components/AppWrapper";
export { default as Error } from "@/app/components/Error";
export { default as Footer } from "@/app/website/Footer";
export { default as Loading } from "@/app/components/Loading";
export { default as Navbar } from "@/app/components/Navbar";
export { default as OneProduct } from "@/app/components/OneProduct";
export { default as PostsCards } from "@/app/components/PostsCards";
export { default as PostsTable } from "@/app/components/PostsTable";
export { default as ThemeSwitcher } from "@/app/components/ThemeSwitcher";
export { default as About } from "@/app/website/About";
export { default as Contact } from "@/app/website/Contact";
export { default as Work } from "@/app/website/Work";
export { default as Testimo } from "@/app/website/Testimo";
export { default as Team } from "@/app/website/Team";
export { default as Hero } from "@/app/website/Hero";
export { default as ModalProjects } from "@/app/components/ModalProjects";
export { default as ProjectsBtn } from "@/app/components/ProjectsBtn";
export { supabase } from "@/lib/supabase";
export { default as ModalLayout } from "@/app/components/ModalLayout";
export { QuizQuestions } from "@/app/quiz/data";

export { axios, toast, z, useQuery, useMutation, useQueryClient };

interface ItemsAboutProps {
  text: string;
  link?: string;
  linkText?: string;
}
const itemsAbout: ItemsAboutProps[] = [
  {
    text: "Whatsapp",
    link: "https://wa.me/+306993352454",
  },
  {
    text: "Email",
    link: "mailto:asaad99hayani@gmail.com",
  },
  {
    text: "LinkedIn Account",
    link: "https://www.linkedin.com/in/as3d-7ayani/",
  },
  {
    text: "Github Account",
    link: "https://github.com/AsaadHayani",
  },
];

interface SocialItem {
  type: "facebook" | "linkedin" | "github";
  url: string;
}
interface ItemsTeamProps {
  name: string;
  image: string;
  description: string;
  social: SocialItem[];
}
const itemsTeam: ItemsTeamProps[] = [
  {
    name: "Asaad Hayani",
    image: "https://i.pravatar.cc/300",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    social: [
      { type: "facebook", url: "https://facebook.com" },
      { type: "linkedin", url: "https://linkedin.com" },
      { type: "github", url: "https://github.com" },
    ],
  },
  {
    name: "Sami Khalil",
    image: "https://i.pravatar.cc/301",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    social: [
      { type: "facebook", url: "https://facebook.com" },
      { type: "linkedin", url: "https://linkedin.com" },
      { type: "github", url: "https://github.com" },
    ],
  },
  {
    name: "Ahmed Ismaeel",
    image: "https://i.pravatar.cc/302",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    social: [
      { type: "facebook", url: "https://facebook.com" },
      { type: "linkedin", url: "https://linkedin.com" },
      { type: "github", url: "https://github.com" },
    ],
  },
];

interface ItemsTestimoProps {
  name: string;
  image: string;
  desc: string;
}
const itemsTestimo: ItemsTestimoProps[] = [
  {
    image: "https://i.pravatar.cc/300",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, numquam saepe maiores animi harum error inventore amet incidunt cumque, excepturi a architecto aliquid ex vitae explicabo asperiores repellat! Assumenda, magnam.",
    name: "Asaad Hayani",
  },
];

const imagesWork: string[] = [
  "https://picsum.photos/180/101",
  "https://picsum.photos/180/102",
  "https://picsum.photos/180/103",
  "https://picsum.photos/180/104",
];

const headerItems: { text: string; link: string }[] = [
  { text: "Website", link: "" },
  { text: "Projects", link: "projects" },
  { text: "Posts", link: "posts" },
  { text: "Products", link: "products" },
  { text: "Quiz", link: "quiz" },
  { text: "Gallery", link: "gallery" },
  { text: "Todos", link: "todos" },
  { text: "Qoutes", link: "qoutes" },
];

const imagesGalley: { id: number; src: string }[] = [
  {
    id: 1,
    src: "https://picsum.photos/200/100",
  },
  {
    id: 2,
    src: "https://picsum.photos/201/100",
  },
  {
    id: 3,
    src: "https://picsum.photos/202/100",
  },
  {
    id: 4,
    src: "https://picsum.photos/203/100",
  },
  {
    id: 5,
    src: "https://picsum.photos/204/100",
  },
  {
    id: 6,
    src: "https://picsum.photos/205/100",
  },
];

export {
  imagesGalley,
  itemsAbout,
  imagesWork,
  itemsTeam,
  itemsTestimo,
  headerItems,
};
