import React from 'react'
import './TierRow.css'
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../utils/items';
import { useSelector, useDispatch } from "react-redux";
import ItemCard from './ItemCard';
import { changeTierLetter } from "../actions/changeTierLetter";
const TierRow = (props) => {
    const dispatch = useDispatch();
    const list = useSelector((data) => data.cards);
    console.log(list)
    const [{ isOver, collectedProps }, drop] = useDrop({
		accept: ItemTypes.CARD,
		drop: (item, monitor) => {dispatch(changeTierLetter(props.letter,item.id));item.tierLetter=`${props.letter}`;return item},
		collect: monitor => ({
			isOver: !!monitor.isOver()
		}),
	});
    // const changeTierLetter = (id) =>{
    //     const item = list.filter(item=>item.id===id);
    //     item[0].tierLetter=`${props.letter}`;
    //     console.log(list)
    // }
    // const markAsDone = (id) =>{
    //     const show = list.filter(show=>show.id===id);
    //     show[0].status='done';
    //     setTaskList(taskList.filter((task)=>task.id!=id).concat(task[0]))
    // }
    return (
        <div className="tierContainer" ref={drop}>
            
            <div className='tierRank' style={{backgroundColor:`${props.color}`}}><p className="tierLetter">{props.letter}</p></div>
            <div className="tier" style={isOver?{backgroundColor:'#7d7d7d'}:{backgroundColor:'#373737'}}>
            {
              list
                .filter((show, i) => show.tierLetter === `${props.letter}`)
                .map((show, i) => (
                    <ItemCard
                        key={show.id}
                        imgUrl={show.attributes.image_url}
                    />
                ))  
            }
            </div>
        </div>
    )
}

export default TierRow;
