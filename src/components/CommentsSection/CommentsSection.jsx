import React, { useContext, useState } from 'react';
import { authContext } from '../../contexts/AuthContext';
import { commentsContext } from '../../contexts/CommentsContext';
import './CommentsSection.css';

const CommentsSection = ({id}) => {
    const { 
        setComments, 
        comments
        } = useContext(commentsContext);
    const { loginUser }=useContext(authContext)
    const[item, setItem] = useState('')

    const handleInput = (e) => {
        const commentsDetails = {
            ...item,
            [e.target.name]: e.target.value
        }
        setItem(commentsDetails)
    }
    // let name = loginUser[0]?.email
    // const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return (
        <div className="comment-section">
            <h4>Оставьте ваш комментарий к продукту</h4>
            <div className="comment-input">
                <input 
                    name="name"
                    onChange={handleInput}
                    type="text" 
                    placeholder="Ваше имя или почта"
                />
                <input 
                    name="comments"
                    onChange={handleInput}
                    type="text" 
                    placeholder="Ваш комментарий"
                />
            </div>
            <div className className="comment-add">
                <button 
                    onClick={() => setComments(id, item)}
                    className="comment-add__btn"
                >Оставить комментарий</button>
            </div>
        
            {comments.map(item => (
            <div key={item.id} className="comment-inner">
                <div className="comment-guest">
                    <span className="comment-name">{item.name}</span>
                </div>
                <div className="comment-message">
                    <span>{item.comments}</span>
                </div>
                    <span className="comment-date"> {item.date}</span>
            </div>
            ))}
        </div>
    );
};

export default CommentsSection;