import "./styles.css";
import InfiniteScroll from "./InfiniteScroll";

export default function App() {
  return <InfiniteScroll />;
}

//Step 1 : Load the data for 20 items
//Ste 2: Load the next 20 items with button click and add a state to
//skip value
//Step 3: Create an observer with useRef
//Step 4 : Add the observer at the bottom of the div
//Step 5 : Inside a new useEffect
//i:Create an IntersectionObserver
//ii:If its intersecting do something
//iii:Observee the observer
//iv:CleanUp with Observer.disconnect
//Step 6: To prevent this infinite scroll calling api twice
//just create an loading state and set it true bfeor fetch and false after
//fetch in finally block
//Step 7:similarly create an your loading Ref as well
//Step 8: To stop API calls use hasMore as a state as well as ref this is to prevent stale closures
//Step 9 : Also and hasMoreState variable has to be created
