import {useState} from 'react';
import TaskCard from './TaskCard';
const Tasks = () => {
    const [taskList,setTaskList] = useState([
        {
            id:((Math.random()*100).toFixed(0)),
            status: 'wip',
            category:'chores',
            title:'buy dog food'
        },        
        {
            id:((Math.random()*100).toFixed(0)),
            status: 'wip',
            category:'shopping',
            title:'buy new clothes
        },        
        {
            id:((Math.random()*100).toFixed(0)),
            status: 'wip',
            category:'chores',
            title:'clean garage'
        },        
        {
            id:((Math.random()*100).toFixed(0)),
            status: 'wip',
            category:'shopping',
            title:'buy some socks'
        },        
    ]);

    const markAsDone = (id) =>{
        const task = taskList.filter(task=>task.id===id);
        task[0].status='done';
        setTaskList(taskList.filter((task)=>task.id!=id).concat(task[0]))
    }
    return (
        <>
        <div> wip tasks
            <div>
                {
                taskList
                .filter((task,i)=>task.status==='wip')
                .map((task,i)=>(
                    <TaskCard id={task.id} status={task.status} category={task.category} title={task.title} />
                ))
                }
            </div>
        </div>
        <div>done Tasks
            <div>
            {
                taskList
                .filter((task,i)=>task.status==='done')
                .map((task,i)=>(
                    <TaskCard id={task.id} status={task.status} category={task.category} title={task.title} />
                ))
            }
            </div>
        </div>
        </>
    )
}

export default Tasks;
