import React from 'react';
import './TaskCard.css'; // Si necesitas estilos adicionales para las tarjetas.

const TaskCard = ({ task, onEdit, onDelete, provided, snapshot }) => {
  return (
    <div
      className={`task-card ${snapshot.isDragging ? 'dragging' : ''}`}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
    >
      <h3>{task.title}</h3>
      <p>{task.description}</p>

      {/* Botones de acción para editar o eliminar la tarea */}
      <div className="task-actions">
        <button className="edit-btn" onClick={() => onEdit(task.id)}>
          Editar
        </button>
        <button className="delete-btn" onClick={() => onDelete(task.id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
