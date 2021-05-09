import React from 'react';
import styled from 'styled-components';
import {ProfileContent} from '../components/ProfileContent';
import {useSelector} from 'react-redux';

export default function ProfilePage () {
    const authState = useSelector(state => state.auth);
    return (
        
        <ProfileContainer>
            <ProfileInfo>
                <ProfileCover>
                    <ProfileImageCover src={"https://scontent.fdad2-1.fna.fbcdn.net/v/t1.18169-9/523569_358448530932296_1532626330_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=e3f864&_nc_ohc=PZjFB_PrP0IAX9f-CFK&_nc_ht=scontent.fdad2-1.fna&oh=b9c688557add01977716b4c74cf67665&oe=60BBAF8C"} alt="cover" /> 
                    <ProfileImageAvatar src={authState.avatarUrl} alt="avatar" /> 
                </ProfileCover>
                <ProfileName>
                    <h3>{authState.username}</h3>
                </ProfileName>
                <ProfileButton>
                    <ProfileButtonLeft>
                        <LeftOptionPost>
                            <div>
                                Posts
                            </div>
                        </LeftOptionPost>
                        <LeftOptionOne>
                            <div>
                                Friends
                            </div>
                        </LeftOptionOne>
                        <LeftOptionOne>
                            <div>
                                Photos
                            </div>
                        </LeftOptionOne>
                        <LeftOption>
                            <div>
                                About
                            </div>
                        </LeftOption>
                        <LeftOption>
                            <div>
                                More
                            </div>
                        </LeftOption>
                    </ProfileButtonLeft>
                    <ProfileButtonRight>   
                        <RightOptionAdd>
                            <i class="fas fa-plus-circle"></i>
                            <div>Add to Story</div>
                        </RightOptionAdd>
                        <RightOptionEdit>
                            <i class="fas fa-pen"></i>
                            <div>Edit Profile</div>
                        </RightOptionEdit>  
                        <RightOptionIcon>
                            <i class="fas fa-ellipsis-h"></i>
                        </RightOptionIcon>
                    </ProfileButtonRight>
                </ProfileButton>
            </ProfileInfo>
            <ProfileContent />
        </ProfileContainer>
    )
}


const ProfileContainer = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    top: 60px;
`

const ProfileInfo = styled.div`
    height: auto;
    width: 100%;
    background: linear-gradient(to bottom, #EBE3E2 , #7A6D6F, #272829,  #242526);
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
`

const ProfileCover = styled.div`
    width: 65%;
    height: 350px;
    border-radius: 20px;
    
    @media (max-width:950px){
        width: 100%;
        height: 350px;
        
    }

    @media (max-width:600px){
        width: 100%;
        height: 36vw;
        
    }
`

const ProfileImageCover = styled.img`
    width: 100%;
    height: 350px;
    border-radius: 20px;
    @media (max-width:950px){
        width: 100%;
        height: 36vw;
        
    }

`


const ProfileImageAvatar = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 3px solid black;
    position: absolute;
    top: 250px;
    left: 46vw; 
    
    @media (max-width:950px){
        top: 25vw;
        left: 44vw
    }
    @media (max-width:600px){
        top: 16vw;
        left: 42vw
    }

`

const ProfileName = styled.div`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    >h3{
        font-size: 40;
        font-weight:700;
        color: white;
    }
`

const ProfileButton = styled.div`
    height: 60px;
    width: 63%;
    border-top: 1px #353637 solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width:800px){
        width: 100%;        
    }
`

const ProfileButtonLeft = styled.div`
    width: 60%;
    height: 100%;
    padding: 5px;
    display: flex;
    align-items: center;

    @media (max-width:1100px){
        width: 30%;
    }
    

`

const LeftOptionOne = styled.div`
    border-radius: 10px;
    height: 100%;
    color: #ccc;
    display: flex;
    align-items: center;
    padding: 0 20px;
    :hover{
        background: #353637;
    }
    @media (max-width:983px){
        display: none;    
    }
`


const LeftOption = styled.div`
    border-radius: 10px;
    height: 100%;
    color: #ccc;
    display: flex;
    align-items: center;
    padding: 0 20px;
    :hover{
        background: #353637;
    }
    @media (max-width:1118px){
        display: none;    
    }
`

const LeftOptionPost = styled.div`
    border-radius: 10px;
    height: 100%;
    color: #ccc;
    display: flex;
    align-items: center;
    padding: 0 20px;
    :hover{
        background: #353637;
    }
`   

const ProfileButtonRight = styled.div`
    width: 40%;
    height: 100%;
    padding: 5px;
    display: flex;
    justify-content: flex-end;
    align-items:center;
    @media (max-width:1130px){
        width: 70%;    
    }
    @media (max-width:800px){
        width: 85%;        
    }
    
`

const RightOptionIcon = styled.div`
    display: flex;
    height: 100%;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    :hover{
        background: #353637;
    }
    >i{
        color: #ccc;
    }
`


const RightOptionEdit = styled.div`
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    height: 100%;

    :hover{
        background: #353637;
    }
    >i{
        color: #ccc;
        margin-right: 5px;
    }
    >div{
        color: #ccc;
    }
`


const RightOptionAdd = styled.div`
    background: #2E87F7;
    border-radius: 10px;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    :hover{
        background: blue;
    }
    >i{
        color: white;
        margin-right: 5px;
    }
    >div{
        color: white;
    }
`