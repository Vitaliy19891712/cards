import { Star, StarOutline } from '../../../assets/icons'
import s from './rating.module.scss'

export type RadingProps = {
  rating: number
}

export const Rating: React.FC<RadingProps> = ({ rating }) => {
  return (
    <div className={s.flex}>
      {[...Array(5)].map((_, index) => (
        <span key={index}>{index < Math.floor(rating) ? <Star /> : <StarOutline />}</span>
      ))}
    </div>
  )
}
