import { useState, useEffect } from "react";
import TodoItem from "../Todoitem/TodoItem";
import "./Todolist.css"; // Importar el archivo CSS para estilos personalizados

const Todolist = () => {
    const [inputValue, setInputValue] = useState("");

    const [todos, setTodos] = useState(() => {
    const guardadoTodos = localStorage.getItem("todos");

    if (guardadoTodos) {
        return JSON.parse(guardadoTodos);
    } else {
        return [];
    }
    });

    const borrarTodo = (todoABorrar) => {
        const actualizarTodos = todos.filter((tarea) => tarea !== todoABorrar);
        setTodos(actualizarTodos);
    };

    const agregarTodo = (texto) => {
        const nuevoTodo = { text: texto };
        setTodos([...todos, nuevoTodo]);
    };

    const manejadorSubmit = (e) => {
        e.preventDefault();

    if (inputValue.trim()) {
        agregarTodo(inputValue);
        setInputValue("");
    }
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="container mt-5">
            <h1 className="text-center">Lista de tareas pendientes</h1>
            <form onSubmit={manejadorSubmit} className="mt-4">
                <div className="row">
                    <div className="col-4">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Ingrese una tarea"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                        />
                    </div>
                    <div className="col-4 boton">
                        <button type="submit" className="btn btn-primary">
                        Agregar
                        </button>
                    </div>
                </div>
            </form>
            <ul className="list-group mt-4">
                {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} borrarTodo={borrarTodo} />
                ))}
            </ul>
        </div>
    );
};

export default Todolist;