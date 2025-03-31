import { Button } from '../Button';
import cls from './QuestionCard.module.css';



export const QuestionCard = () => {
    return (
        <div className={cls.card}>
            <div className={cls.cardLabels}>
                <div>Level: </div>
                <div>Not completed: </div>
            </div>
            <h5 className={cls.cardTitle}>Что такое JSX?</h5>
            <div className={cls.cardAnswers}>
                <label>Short answer: </label>
                <p className={cls.cardAnswer}>Далеко-далеко за, словесными горами в стране гласных и согласных живут рыбные тексты.</p>
            </div>
            <Button onClick={() => {}}>View</Button>
        </div>
    )
}