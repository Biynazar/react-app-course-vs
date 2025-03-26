import React from 'react'

const items = [
    {
        task: 'Выучи React',
        icon: '🟠',
        isCompleted: true,
    },
    {
        task: 'Закрепить JS',
        icon: '🟠',
        isCompleted: true,
    },
    {
        task: 'Не забивать на английский',
        icon: '🟠',
        isCompleted: false,
    },


]

const List = () => {
    return (
        <>

            {
                items.map((item, index) => {

                    return (
                        <section key={index} className={item.isCompleted ? 'completed' : ''}>
                            <span>{item.icon}</span>
                            <h4>{item.task}</h4>
                        </section>
                    )


                })
            }

        </>

    )
}

export default List
