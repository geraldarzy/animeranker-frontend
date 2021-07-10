import { useDrag } from 'react-dnd';
import { ItemTypes } from '../utils/items';
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
      <div ref={dragRef} style={{ backgroundColor }}>
        <img src={imgUrl} ref={dragRef} style={{ backgroundColor }}/>
      </div>
    )
  }
