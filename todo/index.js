function Todo(){
    const [value, setValue]= React.useState("");
    const [todos, setTodos]= React.useState([]);

    function handleChange(e){
        setValue(e.target.value);
    }

    function handleAdd(){
        setTodos([...setTodos, value]);
    }
    console.log(todos);
    return (
        <div>
            <h1>Todo List</h1>
            <input onChange={handleChange} type="text" placeholder="Enter Todo" />
            <button onClick={handleAdd}>Add todo</button>
        </div>
    );

};

ReactDOM.createRoot(document.querySelector("#root")).render(<Todo />)