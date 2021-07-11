import { useDrag } from 'react-dnd';
import { ItemTypes } from '../utils/items';
import './ItemCard.css'

export default function ItemCard({ item={0:{'attributes':{},'id':0,'tierLetter':'','type':'genre'}},imgUrl }) {
    const [{ opacity }, dragRef] = useDrag(
      () => ({
        type: ItemTypes.CARD,
        item:{
          type:ItemTypes.CARD,
          id: item.id,
          item:item
        },
        collect: (monitor) => ({
          opacity: monitor.isDragging() ? '0' : '1'
        })
      }),
      []
    )
    return (
      <img className="animeImg" src={imgUrl} ref={dragRef}style={{opacity}}/>
    )
  }
