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
            <div
            style={isOver?{backgroundColor:'red'}:{backgroundColor:'blue'}}
            >hello test</div>
            <div className='tierRank' style={{backgroundColor:`${props.color}`}}><p className="tierLetter">{props.letter}</p></div>
            <div className="tier"></div>
        </div>
    )
}

export default TierRow
