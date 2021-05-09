import React, {useState}from 'react'
import styled from 'styled-components'; 
import moment from 'moment';
import {useDispatch,  useSelector} from 'react-redux';
import commentActions from '../redux/actions/comment.actions';


export const PostItem = ({post, ...restProps}) => {
    const [commentBody,setCommentBody] = useState("");
    const dispatch = useDispatch();
    const {auth} = useSelector(state=> state)
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
                        <img src={auth.avatarUrl || "data:image/png;base64,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"} alt="avartar" style={{width: "40px"}} />
                        <div>
                            <div>{auth.username || "anymous"}</div> 
                            <div>
                                {moment(post.createdAt).fromNow()}
                            </div>
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
                    <img src={auth.avatarUrl || "data:image/png;base64,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"} alt="avartar" style={{width: "40px", height: "40px"}} />
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
    display: flex;
    align-items: center;
    >img{
        border-radius:50%;
        margin-right: 20px;
    }

    >div{
        color: #ccc;
        font-size: 14px;
        display: flex;
        flex-direction: column;
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