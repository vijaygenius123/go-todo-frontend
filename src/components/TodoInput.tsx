import React, {FormEvent, useState} from "react";
import {Form, Input} from "semantic-ui-react";

const TodoInput = () => {

    const [task, setTask] = useState('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
    }

    return (
        <div className="row">
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="task"
                    fluid
                    placeholder="Task Title"
                    value={task}
                    onChange={event => setTask(event.target.value)}
                />
            </Form>
        </div>
    )
}

export default TodoInput
