import React, { useEffect, useState } from 'react';
import { fetchTasks, updateTaskStatus } from '../api';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TaskBoard = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks().then((res) => setTasks(res.data));
    }, []);

    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const taskId = result.draggableId;
        const newStatusId = parseInt(result.destination.droppableId);

        updateTaskStatus(taskId, newStatusId).then(() =>
            fetchTasks().then((res) => setTasks(res.data))
        );
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <div className="board">
                {['Pendiente', 'En Proceso', 'Finalizada'].map((status, index) => (
                    <Droppable droppableId={`${index + 1}`} key={status}>
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="column"
                            >
                                <h3>{status}</h3>
                                {tasks
                                    .filter((task) => task.status_id === index + 1)
                                    .map((task, idx) => (
                                        <Draggable
                                            key={task.id}
                                            draggableId={`${task.id}`}
                                            index={idx}
                                        >
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className="task-card"
                                                >
                                                    {task.title}
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                ))}
            </div>
        </DragDropContext>
    );
};

export default TaskBoard;
