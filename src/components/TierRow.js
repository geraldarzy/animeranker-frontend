import React from 'react'
import './TierRow.css'
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../utils/items';
const TierRow = (props) => {
    const [{ isOver }, drop] = useDrop({
		accept: ItemTypes.CARD,
		drop: (item, monitor) => console.log(item.id),
		collect: monitor => ({
			isOver: !!monitor.isOver(),
		}),
	});
    return (
        <div className="tierContainer" ref={drop}>
            <div className='tierRank' style={{backgroundColor:`${props.color}`}}><p className="tierLetter">{props.letter}</p></div>
            <div className="tier" style={isOver?{backgroundColor:'#7d7d7d'}:{backgroundColor:'#373737'}}></div>
        </div>
    )
}

export default TierRow
