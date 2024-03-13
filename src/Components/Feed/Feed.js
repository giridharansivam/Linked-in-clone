import React, { useEffect, useState } from 'react'
import './Feed.css'
import profile from '../../assets/profile.jpg'
import CreateIcon from '@mui/icons-material/Create';
import InputOptions from '../InputOptions/InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from '../Post/Post';
import FlipMove from 'react-flip-move';
import { getFirestore, collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore/lite';
import { db } from './firebase';
import { useSelector } from 'react-redux';
import { selectedUser } from '../../redux/reducer';
function Feed() {
    const user = useSelector(selectedUser)
    console.log(user)
    const [posts,setPosts] = useState([]);
    const [postInput, setPostInput] = useState('');

    const sendPosts = async (e) =>{
        e.preventDefault();
        try{
            const docRef  = await addDoc(collection(db,'posts'),{
                name:user.displayName || "",
                message:postInput,
                photoUrl: user.photoUrl ||"",
                timestamp : serverTimestamp()

            });
            console.log(docRef.id)
            setPostInput('');
        }
        catch(error)
        {
            console.error("Error adding document",error)
        }
    }
    useEffect(() => {
        const fetchPosts = async () => {
            const postsCol = collection(db, 'posts');
            const postSnapShot = await getDocs(postsCol);
            const postList = postSnapShot.docs.map(doc => doc.data());
            postList.sort((a,b)=>b.timestamp - a.timestamp)
            console.log(postList)
            setPosts(postList)

        };

        fetchPosts(); // Call the async function
    }, [postInput]);
  return (
    
    <div className="feed">
        <div className="feed_inputContainer">
            <div className="feed_input">
                <CreateIcon />
                <form>
                    <input type="text" placeholder='start a post, try writing it with AI' value={postInput} onChange={(e)=> setPostInput(e.target.value)}/>
                    <button style={{"display" : "none"}} onClick={sendPosts}type="submit">Send</button>
                </form>
            </div>
            <div className="feed_inputOptions">
                <InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                <InputOptions Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                <InputOptions Icon={EventNoteIcon} title="Events" color="#C0CBCD"/>
                <InputOptions Icon={CalendarViewDayIcon} title="Write Article" color="#7FC15E"/>
            </div>
        </div>
        <FlipMove>
       {posts.map((post,index)=>
        (
            <Post 
            key={index}
            name={user.displayName || ""}
            description="This is a test message"
            message={post.message}
            photoUrl={user.photoUrl || user.email[0]}
            />
        )
       )}
       </FlipMove>
    </div>
  )
}

export default Feed
