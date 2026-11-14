function QuestionDisplay({ data }) {
  return (
    <>
      <h1>{data.courseTitle}</h1>
      <button onClick={() => setPage(<CourseSelection/>)}>Back</button>
      <hr />
      {data.courseModules.map((module) => (
        <>
          <h2>{module.moduleTitle}</h2>
          <ol>
            {Object.keys(module.moduleLessons).map((n) => (
              <li>
                <button onClick={() => setPage(<>
                  <h1>{n}</h1>
                  <button onClick={() => setPage(<QuestionDisplay data={data}/>)}>Back</button>
                  <LessonDisplay lesson={module.moduleLessons[n]}/>
                </>)}>{n}</button>
              </li>
            ))}
          </ol>
        </>
      ))}
    </>
  );
}
