import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] =useState(true);
  const [tours, setTours] = useState([]);

  const removeTour =(id)=>{
    setTours(tours.filter((tour)=>tour.id !== id))

  }

  const fetchTours = async() =>{
    setIsLoading(true);
   try {
    const response = await fetch(url);
    const tours = await response.json();
    setTours(tours);
    
    console.log(tours)
   } catch (error) {
    console.log(error)
    
   }
   setIsLoading(false)

  }
  useEffect(()=>{
   
    fetchTours();
  },[])
  // return <Loading />


  if(isLoading){
    return <Loading />
  }

  // if no Tours
  if(tours.length ===0){
    return <div>

    <h2>No Tours Left</h2>
    <button className="btn" onClick={()=>fetchTours()}>Refresh</button>
    </div>
  }

  return(
    
    <main >
     <Tours  tours={tours} removeTour={removeTour}/>
     
    </main>
  )
};
export default App;
