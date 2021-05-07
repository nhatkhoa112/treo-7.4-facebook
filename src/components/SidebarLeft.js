import React from 'react';
import styled from 'styled-components'; 

export const SidebarLeft = () => {
    return (
        <SidebarLeftContainer>
            <SidebarLeftContainerOption>
                <img src="https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/129109903_3337231159720670_3970948972836275145_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=BT8wnB4VFuQAX-Yn5Gz&_nc_ht=scontent-xsp1-3.xx&oh=687c5f6c487c611cf62c425e228bc766&oe=60B8929F" alt="avartar" style={{width: "40px"}} />
                <div>Khoa tin</div> 
            </SidebarLeftContainerOption>
            <SidebarLeftContainerOption>
                <i className="fas fa-user-friends"></i>
                <div>Friends</div> 
            </SidebarLeftContainerOption> 
            <SidebarLeftContainerOption>
                <i style= {{ color: "blue" , opacity: ".5"}} className="fas fa-history"></i>
                <div>Memories</div>
            </SidebarLeftContainerOption>
            <SidebarLeftContainerOption>
                <i style= {{ color: "gray" , opacity: "1"}} className="fas fa-users"></i>
                <div>Groups</div>
            </SidebarLeftContainerOption>
            <SidebarLeftContainerOption>
                <i style={{opacity: ".7"}} className="fas fa-store"></i>
                <div>Marketplace</div>
            </SidebarLeftContainerOption>
            <SidebarLeftContainerOption>
                <i style={{color: "green"}} className="fas fa-tv"></i>
                <div>Watch</div>
            </SidebarLeftContainerOption>
            <SidebarLeftContainerOption>
                <i style={{color: "tomato"}} className="far fa-calendar-check"></i>
                <div>Event</div>
            </SidebarLeftContainerOption>
            <SidebarLeftContainerOption>
                <i style={{color: "purple"}} className="fas fa-bookmark"></i>
                <div>Saved</div>
            </SidebarLeftContainerOption>
            <SidebarLeftContainerOption>
                <i style={{color: "orange"}} className="fas fa-flag"></i>
                <div>Pages</div>
            </SidebarLeftContainerOption>
            <SidebarLeftContainerOption>
                <SidebarLeftContainerOptionIcon>
                    <i  className="fas fa-caret-down"></i>
                </SidebarLeftContainerOptionIcon>
                <div>See Mores</div>
            </SidebarLeftContainerOption>
            <Break />
        </SidebarLeftContainer>
    )
}

const SidebarLeftContainer = styled.div`
    flex: 1;
    background: black;
    background: #18191A;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    @media (max-width: 850px){
        display: none;
    }
`

const SidebarLeftContainerOption  = styled.div`
    padding: 0 20px;
    width: 100%;
    height: 50px;
    margin-bottom: 5px;
    border-radius: 10px;
    display: flex;
    justify-content: flex-start;
    align-items:center;

    :hover{
        background:  #3A3B3C;
    }

    >img{
        border-radius: 50%;
        margin-right: 20px;
    }

    >i{
        width: 40px;
        color:  blue;
        margin-right: 20px;
    }
    

    >div{
        color: white;
        font-weight: 600;
    }
`

const SidebarLeftContainerOptionIcon = styled.div`
    display: flex;
    width: 40px;
    height: 40px;
    background: #3A3B3C;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 20px;

    :hover{
        background: gray;
    }
    
    >i{
        color: #ccc;
    }
`

const  Break = styled.div`
    margin: 10px 0;
    width: 100%;
    height: 1px;
    background: gray;
`
