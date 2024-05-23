import "./Filter.css"

// eslint-disable-next-line react/prop-types
const Filter = ({filterData}) => {

    const filter = filterData;

  return (
    <div className="filter-data">
       { filter.map((data) => (
            <button className="btn" key={data.id}>{data.title}</button>
        ))}
      
    </div>
  )
}

export default Filter
