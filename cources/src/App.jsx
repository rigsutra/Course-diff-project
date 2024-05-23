import { apiUrl, filterData } from "./data";
import Header from "./components/Header";
import Filter from "./components/Filter";
import AllCards from "./components/AllCards";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";
import "./App.css"

const App = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data);
      } catch (error) {
        toast.error("something went wrong");
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="app-box">
      <div>
        <Header />
      </div>
      <div>
        <Filter filterData={filterData} />
      </div>
      <div className="AllCards">
        {loading  ? (<Spinner/>) : ( <AllCards courses={courses} />)  }
       
      </div>
    </div>
  );
};

export default App;
