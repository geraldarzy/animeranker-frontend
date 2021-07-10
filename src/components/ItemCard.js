import { useDrag } from 'react-dnd';
import { ItemTypes } from '../utils/items';
import './ItemCard.css'
// const ItemCard = (props) => {
    
//     const [{ isDragging }, drag] = useDrag({
// 		item: {
// 			type: ItemTypes.CARD,
// 			id: props._id,
// 		},
// 		collect: monitor => ({
// 			isDragging: !!monitor.isDragging(),
// 		}),
// 	});
//     return (
//         <div
//         // ref={drag}
//         // opacity={isDragging ? '0.5': '1'}
//         >
//             <img src={props.imgUrl}/>
//         </div>
//     )
//     }
// export default ItemCard;

export default function ItemCard({ key,imgUrl, isDragging }) {
    const [{ backgroundColor }, dragRef] = useDrag(
      () => ({
        type: ItemTypes.CARD,
        item: key ,
        collect: (monitor) => ({
          backgroundColor: monitor.isDragging() ? 'red' : 'blue'
        })
      }),
      []
    )
    return (
      <img className="animeImg" src={imgUrl} ref={dragRef}/>
    )
  }
