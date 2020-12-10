import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName } from './store/actions';


const Todo = () => {
    const name = useSelector(state => state.userProfile);
    const dispatch = useDispatch();
    return(
        <>
            <div>
                This is a beginning
                <br></br>{name.name}
                <button onClick={()=>{dispatch(setName)}}>Change</button>
            </div>
        </>
    )
}

export default Todo;