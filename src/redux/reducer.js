

export default function reducer(state={user:{}},action)
{
    if(action.type==="logIn")
    {
        return{
            ...state,
            user : {
            email: action.payload.email,
            displayName: action.payload.displayName,
            photoUrl: action.payload.photoUrl,
            uid: action.payload.uid
    }
    }
    }
            
    else if(action.type === "logOut")
    {
        return ({user:{}})
    }
    return state;
}
export const selectedUser = (state) => state.user