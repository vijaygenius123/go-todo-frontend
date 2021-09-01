import React from 'react';
import {Container, Header} from "semantic-ui-react"
import TodoList from "./components/TodoList";
function App() {
    return (
        <Container >
            <Header className="header" as="h2" color="blue">Todo App</Header>
            <TodoList/>
        </Container>
    );
}

export default App;
