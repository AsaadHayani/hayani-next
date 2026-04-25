import { Loading, supabase, ProjectsBtn } from "../exports";

interface ProjectProps {
  id: number;
  name: string;
  description: string;
  github: string;
  link: string;
  caption: string;
  type: string;
}

const Page = async () => {
  const { data, error } = await supabase.from("links").select("*");
  if (error) console.log(error);

  return (
    <section className="my-width text-center">
      {error && <Loading />}

      <h2 className="my-title my-4">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.map((link: ProjectProps) => (
          <div
            key={link.id}
            className="border my-border p-4 space-y-4 rounded-md overflow-hidden"
          >
            <ProjectsBtn {...link} />
            <p className="text-sm line-clamp-1">{link.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
