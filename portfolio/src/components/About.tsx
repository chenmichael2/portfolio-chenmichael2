export default function About() {
  return (
    <section id="about" className="flex flex-col items-center justify-center w-full bg-gray-50 border-t-1 border-b-1 animate__animated animate__fadeIn
      sm:-mt-0
      md:-mt-0">
      <h1 className="text-gray-700 text-2xl">About me</h1>
      <div className="flex flex-col items-around justify-around gap-10">
        <div className="border-1 border-red-800 rounded-md ">Small profile picture w/ information</div>
        <div>Description Right?</div>
      </div>
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