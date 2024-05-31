import { React, useState } from "react";

const ConRendering = () => {
  function Loader() {
    return <div className="loader"> Loading... </div>;
  }

  function Content() {
    return (
      <div className="content">
        <p className="content-text">
          React is a JavaScript library for building user interfaces. It is
          maintained by Facebook and a community of individual developers and
          companies. React can be used as a base in the development of
          single-page applications and large web applications. React is free and
          open-source.
        </p>
      </div>
    );
  }
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <section
      className="mouse-event-bg"
      style={{ textAlign: "justify", color: "white" }}
    >
      {isLoading ? <Loader /> : <Content />}
    </section>
  );
};

export default ConRendering;
