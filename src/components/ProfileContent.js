import React from 'react';
import styled from 'styled-components';
import follow from '../images/follow.png';
import {PostListProfile} from './PostListProfile';
export const ProfileContent = () => {
    return (
        <Content>
            <ContentContainer>
                <ContentLeft>
                    <ContentLeftIntro>
                        <ContentLeftTitle>
                            Intro
                        </ContentLeftTitle>
                        <ContentLeftText>
                            <i class="fas fa-map-marker-alt"></i>
                            <div>From Quang Nam, Quang Nam-Da Nang, Vietnam</div>
                        </ContentLeftText>
                        <ContentLeftText>
                            <i class="fas fa-heart"></i>
                            <div>In an open relationship</div>
                        </ContentLeftText>
                        <ContentLeftText>
                            <img src={follow} alt="follow" />
                            <div>Followed by  31 people</div>
                        </ContentLeftText>
                        <ContentLeftButton>
                            Edit Details
                        </ContentLeftButton>
                        <ContentLeftButton>
                            Add Hobbies
                        </ContentLeftButton>
                        <ContentLeftButton>
                            Add Features
                        </ContentLeftButton>

                    </ContentLeftIntro>
                    <ContentLeftPhotos>
                        <ContentLeftPhotosTitle>
                            <h4> Photos</h4>
                            <a href="#">See all Photos</a>
                        </ContentLeftPhotosTitle>
                    </ContentLeftPhotos>
                    <ContentLeftFriends>
                        <ContentLeftPhotosTitle>
                            <h4> Friends</h4>
                            <a href="#">See all Friends</a>
                        </ContentLeftPhotosTitle>
                    </ContentLeftFriends>
                </ContentLeft>
                <ContentPost>
                    <PostListProfile />
                </ContentPost>
            </ContentContainer>
        </Content>
    )
}


const Content = styled.div`
    width: 100%;
    height: 150vh;
    background: #18191A;    
    display: flex;
    justify-content: center;
`

const ContentContainer = styled.div`
    width: 900px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    @media (max-width: 900px){
        flex-direction: column;
        width: 60%;
    }
`

const ContentLeft = styled.div`
    width: 40%;
    height: 100%;
    padding: 10px;
    display:flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 900px){
        width: 100%;
    }
`
const ContentLeftIntro = styled.div`
    width: 100%;
    height: 350px;
    background: #242526;
    padding: 10px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`
const ContentLeftTitle = styled.h4`
    color: #ccc;
`

const ContentLeftText = styled.div`
    display: flex;
    >i{
        color: #ccc;
        margin-right: 10px;
    }
    >img{
        margin-right: 10px;
        background: #ccc;
        border-radius: 5px;
    }
    >div{
        color: #ccc;
    }
`

const ContentLeftButton = styled.button`
    color: #ccc;
    background: #3A3B3C;
    border-radius: 10px;
    padding: 5px;
    width: 100%;
    border: none;

    :hover{
        background: #787878;
    }

`

const ContentLeftPhotos = styled.div`
    margin: 10px 0;
    width: 100%;
    height: 350px;
    background: #242526;
    padding: 10px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`

const ContentLeftFriends = styled.div`
    width: 100%;
    height: 350px;
    background: #242526;
    padding: 10px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`

const ContentLeftPhotosTitle = styled.div`
    width: 100%;
    color: #ccc;
    display: flex;
    justify-content: space-between;
    align-items:center;
`

const ContentPost = styled.div`
    width: 60%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    @media (max-width: 900px){
        width: 100%;
    }
`