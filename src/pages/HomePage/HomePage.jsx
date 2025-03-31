import { QuestionCard } from '../../components/QuestionCard';
import cls from './HomePage.module.css';


export const HomePage = () => {
  return (
    <div className={cls}>
      Home Page
      <QuestionCard/>
    </div>
  )
}

