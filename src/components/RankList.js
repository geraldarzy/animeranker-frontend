import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import ItemCard from "./ItemCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchCards } from "../actions/fetchCards";
import TierRows from "./TierRows";
import { Spinner } from "react-bootstrap";

const RankList = (props) => {
  // const [list, setList] = useState([])
  const rankedList = useSelector((data) => data.cards);
  const loading = useSelector((data) => data);
  console.log(loading,'ll')
  const dispatch = useDispatch();
  useEffect(() => {
    // fetch('https://anime-rankr.herokuapp.com/genres/Movie').then(resp=>resp.json()).then(data=>{
    //     console.log(data.data.slice(0,20));
    //     setList(data.data.slice(0,20));
    // }) now we dispath action => to fetch data => to dispatch to store => then we useSelect to get that info here to us
    if(!(rankedList[0])){
      console.log('getting new')
      dispatch(fetchCards(props.genre));
    }
    console.log('useEffect')
  },[]);
  return (
    <>
      <TierRows />
      {console.log('rerender')}
      {rankedList !== undefined ? (
        rankedList
        .filter((show, i) => show.tierLetter === ``)
        .map((item) => (
          <ItemCard item={item}key={item.id} imgUrl={item.attributes.image_url} />
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
