export default function About() {
  return (
    <section id="about" className="flex flex-col items-center justify-center w-full bg-gray-50 border-t-1 border-b-1 animate__animated animate__fadeIn
      sm:-mt-0
      md:-mt-0">
      <h1 className="text-gray-700">About me</h1>
      <ul className="flex items-between justify-between gap-10">
        <li>Small profile picture w/ information</li>
        <li>Description Right?</li>
      </ul>
      <div>
        <h2>Skills</h2>
        <div className="flex ">
          <div>Front-end</div>
          <div>Back-end</div>
          <div>Tools</div>
          <div>Lanugages</div>
        </div>
      </div>
    </section>
  );
}