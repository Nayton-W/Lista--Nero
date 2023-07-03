import { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");
    const[email,setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category|| !email) return;
        addTodo(value,email, category);
        setValue("");
        setCategory("");
        setEmail("");
    };

    return (
        <div className='todo-form'>
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input required
                    type="text"
                    placeholder='Digite o título'
                    value={value}
                    onChange={(e) => setValue(e.target.value)} />
                <input required
                    type="email"
                    placeholder='Digite email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                 

                <select required value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button className="b" type="submit">Criar tarefa</button>
            </form>
        </div>
    );
};

export default TodoForm