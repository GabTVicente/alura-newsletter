import ArticleList from "./components/ArticleList/ArticleList.jsx"
import Form from "./components/Form/Form.jsx";
import Header from "./components/Header/Header.jsx";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState();
  const hasUser = Boolean(user)
  return (
    <div className="h-screen">
      <Header user={user} />
      {hasUser && <ArticleList />}
      {hasUser || <Form onSubmit={setUser}/>}
    </div>
  )
}

export default App