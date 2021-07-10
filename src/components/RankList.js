import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import ItemCard from "./ItemCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchCards } from "../actions/fetchCards";
import TierRows from "./TierRows";
import { Spinner } from "react-bootstrap";

function RankList(props) {
  // const [list, setList] = useState([])
  const rankedList = useSelector((data) => data.cards.data);
  const loading = useSelector((data) => data.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    // fetch('https://anime-rankr.herokuapp.com/genres/Movie').then(resp=>resp.json()).then(data=>{
    //     console.log(data.data.slice(0,20));
    //     setList(data.data.slice(0,20));
    // }) now we dispath action => to fetch data => to dispatch to store => then we useSelect to get that info here to us
    dispatch(fetchCards(props.genre));
  }, []);
  return (
    <>
      <TierRows />
      {rankedList !== undefined ? (
        rankedList.map((item) => (
          <ItemCard key={item.id} imgUrl={item.attributes.image_url} />
        ))
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
      {/* {loading ? 
                 <h1>Loading...</h1> :
                rankedList.map(item=>(
                <ItemCard key={item.id}imgUrl={item.attributes.image_url}/>
            )) 
            } */}
    </>
  );
}

export default RankList;
