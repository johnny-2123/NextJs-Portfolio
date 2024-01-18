export default function CurrentRole() {
  return (
    <div className="flex flex-col items-start justify-between w-4/5 mt-10 ml-auto lg:3/5 md:w-full first:mt-0 last:mb-0">
      {" "}
      <h3 className="mx-auto text-2xl font-bold capitalize w-fit">
        {"Software Developer"}&nbsp;
        <a
          href={"https://www.vdggroup.com/"}
          target="_blank"
          className="capitalize text-primary"
        >
          @{"The VDG Group"}
        </a>
      </h3>
      {[
        "Leveraged Vercel AI SDK to develop interactive coding interview practice platform with live evaluation and feedback.",
        "Built reusable, responsive, and optimized client and server components using React for complex user flows.",
        "Migrated site from Wordpress to NextJS, enhancing performance and scalability with SSR and SSG. ",
        "Developed a robust user authentication and authorization system, allowing users to securely sign up and sign in via Google, GitHub, Facebook, or passwordless email.",
        "Architected a headless CMS solution by integrating content from Strapi, allowing for content editing, post scheduling, and management.",
      ].map((bullet, index) => (
        <li
          key={index}
          className="pl-4 mx-auto  my-1 font-medium list-disc sm:w-full max-w-[40rem]"
        >
          {bullet}
        </li>
      ))}
    </div>
  );
}
