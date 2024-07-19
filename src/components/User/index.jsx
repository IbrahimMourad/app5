import { useState, useContext, createContext } from 'react';
const UserContext = createContext();

export default function Component1() {
  const [user, setUser] = useState('Jesse Hall');
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}
function Component4() {
  const { setUser } = useContext(UserContext);

  return (
    <>
      <h1>Component 4</h1>

      <button onClick={() => setUser('Ibrahim')}>Change name</button>
      <Component5 />
    </>
  );
}
function Component5() {
  const data = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1> <h2>{`Hello ${data.user} again!`}</h2>
    </>
  );
}
