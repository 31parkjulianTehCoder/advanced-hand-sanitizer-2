function QuestionDisplay({ data }) {
  return (
    <>
      {data.courseModules.map((module) => (
        <>
          <h2>{module.moduleTitle}</h2>
          <ol>
            {Object.keys(module.moduleLessons).map((n) => (
              <li>
                <button>{n}</button>
              </li>
            ))}
          </ol>
        </>
      ))}
    </>
  );
}
