import React, {useState}from 'react'
import styled from 'styled-components'; 
import moment from 'moment';
import {useDispatch} from 'react-redux';
import commentActions from '../redux/actions/comment.actions';


export const PostItem = ({post, ...restProps}) => {
    const [commentBody,setCommentBody] = useState("");
    const dispatch = useDispatch();
    const handleSubmitComment = (e) => {
        e.preventDefault();
        if(commentBody){
            dispatch(commentActions.createComment( post, commentBody ));
            setCommentBody("");
        }
        

    }
    return (
        <div>
            <MainPost key={post.id}>
                <MainPostUser>
                    <MainPostUserContent>
                        <div>
                            {moment(post.createdAt).fromNow()}
                        </div>
                    </MainPostUserContent>
                    <MainPostUserIcon>
                        <i class="fas fa-ellipsis-h"></i>
                    </MainPostUserIcon>
                </MainPostUser>
                <MainPostContent >
                    <MainPostText>
                        <div>
                            {post.body}
                        </div>
                    </MainPostText>
                    {post.photos ? (
                        <MainPostImage>
                            {post.photos.map((photo,index) => {
                                return <img key={index} src={photo.url} alt="" />
                            })}
                        </MainPostImage>
                    ): ("")}
                    
                </MainPostContent>
                <MainPostCommentList>
                    {post && post.comments.map(comment => {
                        return <div key={comment.id}>{comment.body}</div>
                    })}
                </MainPostCommentList>
                <MainPostCommentInput onSubmit={handleSubmitComment}>
                    <img src="https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/129109903_3337231159720670_3970948972836275145_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=BT8wnB4VFuQAX-Yn5Gz&_nc_ht=scontent-xsp1-3.xx&oh=687c5f6c487c611cf62c425e228bc766&oe=60B8929F" alt="avartar" style={{width: "40px", height: "40px"}} />
                    <input 
                        value={commentBody}
                        onChange={(e) => setCommentBody(e.target.value)}
                        type="text" placeholder="Write comment" />
                </MainPostCommentInput>
            </MainPost>
        </div>
    )
}



const MainPost= styled.div`
    width: 100%;
    margin-top: 5px;
    height: auto;
    background: #242526;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MainPostUser = styled.div`
    width: 100%;
    height: 50px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`

const MainPostUserContent = styled.div`
    >div{
        color: #ccc;
        font-size: 13px;
    }
`

const MainPostUserIcon = styled.div`
    width: 40px;
    height: 40px;
    background: #3A3B3C;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover{
        background: #787878;
    }

    >i{
        color: #ccc;
    }


`


const MainPostContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    height: auto;
    overflow: hidden;
    overflow-y: auto;
    padding: 10px 20px;
    

`

const MainPostText = styled.div`
    width: 100%;
    >div{
        text-align: left;
        color: #ccc;
    }
`;

const MainPostImage = styled.div`
    display: flex;
    flex-direction: row;
    
    >img{
    width: 50%;
    height: 300px;
    }
`;

const MainPostCommentList = styled.div`
    width: 90%;
    max-height: 100px;
    min-height: 0px;
    border-bottom: 1px #353637 solid;
    border-top:1px #353637 solid;
    overflow: hidden;
    overflow-y: auto;
    >div{
        text-align: left;
        color: #ccc;
    }
`;

const MainPostCommentInput = styled.form`
    height: 60px;
    width: 100%;
    display: flex;
    padding: 5px 20px;
    justify-content: space-between;
    align-items: center;
    >img{
        border-radius: 50%;
    }

    >input{
        border: none;
        background: #3A3B3C;
        width: 92%;
        height: 40px;
        padding: 0 20px;
        color: #ccc;
        overflow: hidden;
        overflow-y: auto;
        border-radius: 20px;
    }

    >input:focus{
        outline:none;
    }
`;