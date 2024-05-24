import { apiUrl, filterData } from "./data";
import Header from "./components/Header";
import Filter from "./components/Filter";
import AllCards from "./components/AllCards";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";
import "./App.css"

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category , setCategory] = useState(filterData[0].title);
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
        <Filter
        filterData={filterData}
        category={category}
        setCategory={setCategory} />
      </div>
      <div className="AllCards">
        {loading  ? (<Spinner/>) : ( <AllCards category={category} courses={courses} />)  }
       
      </div>
    </div>
  );
};

export default App;
