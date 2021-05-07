import React from 'react'
import styled from 'styled-components'; 
import moment from 'moment';


export const PostItem = ({post, ...restProps}) => {
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
                            {console.log(post.photos)}
                            {post.photos.map((photo,index) => {
                                return <img key={index} src={photo.url} alt="" />
                            })}
                        </MainPostImage>
                    ): ("")}
                    
                </MainPostContent>
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