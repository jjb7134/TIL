import React from "react";
import Card from "../UI/Card";
import classes from './Adduser.module.css'

const AddUser = (props) =>{
    const addUserHandler = (event) => {
        event.preventDefault();
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>  
            {/* 괄호X, 파싱되면 바로 실행해버림. */}
                {/* jsx에선 for 을 htmlfor로 사용한다. */} 
                <label htmlFor="username">사용자</label>
                <input id="username" type='text'/>
                <label htmlFor="age">나이</label>
                <input id="age" type='number'/>
                <button type="submit">추 가</button>
            </form>
        </Card>
    );
};

export default AddUser;