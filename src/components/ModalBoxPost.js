import React, {useState}  from 'react'
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';
import {useDispatch,  useSelector} from 'react-redux';
import postsActions from '../redux/actions/posts.actions';



export const ModalBoxPost = ({modalOpen, setModalOpen, ...restProps}) => {
    const [postBody, setPostBody] = useState("");
    const dispatch = useDispatch();
    const authState = useSelector(state => state.auth);
    const handleSubmitPost = (e) => {
        e.preventDefault();
        if(postBody){
            dispatch(postsActions.postPost(postBody))
            setPostBody("");
            setModalOpen(!modalOpen)
        }
    }

    return (
        <div>
            <Modal
                size="xl"
                show={modalOpen}
                onHide={() => setModalOpen(!modalOpen)}
                aria-labelledby="example-modal-sizes-title-xl"

            >
                
                <Modal.Body>
                    <ModalTitle>
                        <div>Create Post</div>
                        <ModalButtonClose onClick={() => setModalOpen(!modalOpen) }>
                            X
                        </ModalButtonClose>
                    </ModalTitle>
                    <ModalContent >
                        <ModalUser>
                            <img src={authState.avatarUrl} alt="avartar" style={{width: "40px"}} />
                            <div>{authState.username}</div>
                        </ModalUser>
                        <textarea 
                            onChange={(e) => setPostBody(e.target.value)} 
                            placeholder="What's on your mind, Khoa?" />
                        <ModalInfo>
                            <button>Add to Your post</button>
                            <ModalIcons>

                            </ModalIcons>
                        </ModalInfo> 
                    </ModalContent>
                    <ModalButton>
                        <button
                            onClick={handleSubmitPost}
                            >Post</button>
                    </ModalButton>
                </Modal.Body>
            </Modal>
        </div>
    )
}


const ModalTitle = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #343536;

    >div{
        color: White;
        font-weight: 800;
        font-size: 1.4rem;
    }
`;

const ModalButtonClose = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #343536;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 30px;
    color: #ccc;
    :hover{
        background: #787878;
        cursor: pointer;
    }

`

const ModalContent = styled.form`
    width: 100%;
    height:100%;
    flex: 4;
    display: flex;
    flex-direction: column;

    >textarea{
        flex:3;
        background: transparent;
        padding: 20px;
        border: none;
        color: white;
        font-size: 30px;
        overflow: hidden;
        overflow-y: auto;
    }

    >textarea:focus{
        outline: none;
    }

    >textarea::placeholder{
        color: white;   
        font-size: 30px;
        font-weight: 400;

    }
`;

const ModalUser = styled.div`
    flex:1;
    padding: 10px;
    display: flex;
    align-items: center;
    >div{
        padding: 5px;
        height: 100%;
        color: white;
        display: flex;
        align-items: flex-start;   
    }
    >img{
        border-radius: 50%;
        margin-right: 10px;
    }
`

const ModalInfo = styled.div`
    padding: 10px;
    flex: 1;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    border: 1px #353637 solid;
    display: flex;
    justify-content:space-between;
    align-items: center;

    >button{
        flex: 1;
        width: 30%;
        border: none;
        color: #787878;
        background: transparent;
        text-align: left; 

    }
`;

const ModalIcons = styled.div`
    flex: 1
`

const ModalButton = styled.div`
    width: 100%;
    height: 100%;   
    flex: 0.5;
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    >button{
        width: 100%;
        height: 100%;
        background: #505151;
        border: none;
        border-radius: 20px;
        color: #ccc;

        :hover{
            background: #787878;
        }
    }

`;
