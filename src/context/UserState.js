import React, {useReducer} from 'react';
import axios from 'axios';
import UserReducer from './UserReducer';
import UserContext from './UserContext';
import Buffer from "buffer";

var client_id = '4b50f832cc374ca29901df6f4df73c46';
var client_secret = 'f94f529e173345c3870b41ed15de4b77';
var redirect_uri = 'http://localhost:8888/callback';
var state = Math.random().toString(36).substring(2,7);

const UserState = (props) =>  {

    const initialState = {
        user:null,
    }

    const [state, dispatch] = useReducer(UserReducer, initialState);

    const setUsuario = (datos) => {
        dispatch({
            type:'SET_USER',
            payload:datos
        })
    }

    const getUsuario = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('usuario')
            const parseJson = await JSON.parse(jsonValue)
            dispatch({
                type:'GET_USER',
                payload:parseJson
            })
            return parseJson;
        } catch(e) {
            return null;
        }
    }
    
    return(
        <UserContext.Provider
        value={{
            user:state.user,
            getUsuario,
            setUsuario,
        }}>
        {props.children}
    </UserContext.Provider>
)
}

export default UserState