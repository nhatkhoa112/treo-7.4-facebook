import React, {useEffect, useState} from 'react';
import styled from 'styled-components'; 
import {useSelector, useDispatch} from 'react-redux';
import postsActions from '../redux/actions/posts.actions';
import {PostItem} from './PostItem';
import {ModalBoxPost} from './ModalBoxPost';

export const Main = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const postsState = useSelector(state => state.posts)
    const dispatch = useDispatch();
    const {loading, posts} = postsState
    console.log({loading, posts})
    useEffect(() => {
        dispatch(postsActions.getPosts())
    }, [dispatch])

    return (
        <MainContainer>
            <MainStory>
                <ModalBoxPost modalOpen={modalOpen} setModalOpen={setModalOpen}  />
                <MainStoryInput>
                    <img src="https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/129109903_3337231159720670_3970948972836275145_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=BT8wnB4VFuQAX-Yn5Gz&_nc_ht=scontent-xsp1-3.xx&oh=687c5f6c487c611cf62c425e228bc766&oe=60B8929F" alt="avartar" style={{width: "40px"}} />
                    <input 
                            onClick={()  => setModalOpen(!modalOpen)}
                            type="button" 
                            value="What's on your mind, Khoa?"
                            className="primary-btn col-xs-11 text-left" />
                </MainStoryInput>
                <MainStoryIcons>
                    <MainStoryIcon>
                        <i style={{color: "red"}} className="fas fa-video"></i>
                        <div> Live Video</div>
                    </MainStoryIcon>
                    <MainStoryIcon>
                        <i style={{color: "green"}} className="fas fa-images"></i>
                        <div> Photo/Video</div>
                    </MainStoryIcon>
                    <MainStoryIcon>
                        <i style={{color: "yellow"}} className="far fa-laugh"></i>
                        <div> Feeling/Activity</div>
                    </MainStoryIcon>
                </MainStoryIcons>
            </MainStory>
            <MainPosts>
                {posts.reverse().map(post => {
                    return(
                        <PostItem key={post.id} post={post} />
                    )   
                })}

            </MainPosts>
        </MainContainer>
    )
}


const MainContainer = styled.div`
    flex: 2;
    width: 100%;
    height: 100%;
    padding: 10px;
    background: #18191A;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    overflow-y: auto;
`

const MainStory = styled.div`
    width: 100%;
    height: 150px;
    background: #242526;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding: 10px 20px;

`
const MainStoryInput = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px rgba(255, 255, 255, 0.3) solid;
    >img{
        border-radius: 50%;
        margin-right: 10px
    };

    >input {
        border: none;
        background: #3A3B3C;
        color: #ccc;
        padding: 8px 20px;
        width: 93%;
        border-radius: 50px 50px;
    }

    >input:hover{
        background: #787878;
    }


`

const MainStoryIcons = styled.div`
    flex: 1;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 5px;
`

const MainStoryIcon = styled.div`
    width: 33%;
    height: 100%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
        background: gray;
    }
    >i{
        font-size: 25px;
        margin-right: 10px;
    }

    >div{
        color: #ccc;
    }
    

`

const MainPosts = styled.div`
    overflow: hidden;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    width: 100%;
`
