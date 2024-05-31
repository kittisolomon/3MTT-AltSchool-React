import { React, useState, useEffect, useContext, createContext } from "react";

function Heading() {
  return <h1>React Hooks - useSate, useEffect, useContext</h1>;
}

const Hooks = () => {
  // useState
  const [count, setCount] = useState(0);

  const handleIncrement = (event) => {
    setCount(count + 1);
  };

  const [counter, setCounter] = useState(0);
  // useEffect
  useEffect(() => {
    if (counter > 0) {
      console.log(`count: ${counter}`);
    }
  }, [counter]);

  const Increment = (event) => {
    setCounter(counter + 1);
  };

  // create a context for our app
  const AuthContext = createContext({
    user: {
      username: "@jondoe",
      name: "Jon Doe",
      email: "jondoe@gmail.com",
    },
    verified: false,
  });

  //define a context provider
  function AuthProvider(props) {
    // updating our global state
    const [user, setUser] = useState({
      username: "@dre",
      name: "Andre Solomon",
      email: "dre@gmail.com",
      bio: "Andre loves to code in React.",
    });

    return (
      <AuthContext.Provider
        value={{
          user: user,
          verified: true,
          setUser: setUser,
        }}
      >
        {props.children}
      </AuthContext.Provider>
    );
  }

  // user bio component
  function UserBio() {
    const { user, setUser } = useContext(AuthContext);
    // update the user bio on click
    const handleBioUpdate = (event) => {
      event.preventDefault();
      setUser((prev) => {
        return {
          ...prev,
          bio: "React is an interesting framework, i recommend!",
        };
      });
    };

    return (
      <div>
        <h1>User Biography</h1>
        <div>{user.bio}</div>
        <button onClick={handleBioUpdate} className="action-btn">
          Update Bio
        </button>
      </div>
    );
  }
  // define user profile component
  function UserProfile() {
    const { user, verified } = useContext(AuthContext);
    // console.log(user);
    return (
      <div>
        <h1>User Profile</h1>
        <div>Username: {user.username}</div>
        <div>Name: {user.name}</div>
        <div>Email: {user.email}</div>
        <div>Verified: {verified ? "Yes" : "No"}</div>
        <UserBio />
      </div>
    );
  }

  // create a custom hook
  const useGetData = (type) => {
    const [data, setData] = useState([]);

    // useEffect hook here
    useEffect(() => {
      const cars = [
        {
          id: 1,
          name: "Toyota",
          year: 2022,
        },
        {
          id: 2,
          name: "Honda",
          year: 2024,
        },
      ];
      const books = [
        {
          id: 1,
          name: "Half of a yellow sun",
          year: 2017,
        },
        {
          id: 2,
          title: "Animals farm",
          year: 1968,
        },
      ];

      // set state
      if(type === "cars"){
        setData(cars);
      }else if(type === "books"){
        setData(books);
      }else{
        setData([]);
      }
     
     
      

    }, [type]);

    return [data];
  };

  const [data] = useGetData("cars");
 
  const renderItems = data.map((item) => {
   return <div key={item.id}>
      <span>ID: {item.id}</span>
      <br />
      <span>Name: {item.name}</span>
      <br />
      <span>Year: {item.year}</span>
    </div>
  })
  
  return (
    
    <section>
      <Heading />
      <div className="hooks-container">
        <div className="hook-column" style={{ textAlign: "center" }}>
          <h2> useState: </h2>
          <button onClick={handleIncrement} className="action-btn">
            Count: {count}
          </button>
        </div>

        <div className="hook-column" style={{ textAlign: "center" }}>
          <h2> useEffect: </h2>
          <button onClick={Increment} className="action-btn">
            Click Me
          </button>
          <h2>Count: {counter}</h2>
        </div>

        <AuthProvider>
          <div className="hook-column" style={{ textAlign: "center" }}>
            <h2>useContext</h2>
            <UserProfile />
          </div>
        </AuthProvider>

        <div className="hook-column" style={{ textAlign: "center" }}>
          <h2>Custom Hooks</h2>
         {renderItems}
        </div>
      </div>
    </section>
  );
};

export default Hooks;
