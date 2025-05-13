const Qualifications = () => {
  return (
    <section id="qualifications" class="container">
      <h2>Qualifications</h2>
      <div class="h2Underline"></div>
      <div id="programs">
        {programs.map((program) => {
          return <Programs programdata={program} />;
        })}
      </div>
    </section>
  );
};

export default Qualifications;
