import axios from 'axios';

const API = 'http://localhost:3000';

export const fetchTasks = () => axios.get(`${API}/tasks`);
export const updateTaskStatus = (id, status_id) =>
    axios.put(`${API}/tasks/status`, { id, status_id });
