import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) { // Utiliser window.scrollY à la place de pageYOffset
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <ScrollToTopButtonStyled className="scroll-to-top">
            {isVisible && 
                <div onClick={scrollToTop}>
                    <FaArrowUp className="scroll-to-top-icon" />
                </div>
            }
        </ScrollToTopButtonStyled>
    );
}

export default ScrollToTopButton;
const ScrollToTopButtonStyled = styled.div`
  position: fixed;
  bottom: 40px;
  right: 2px;
  z-index: 1000;
  cursor: pointer;
  .scroll-to-top-icon {
    font-size: 34px;
    color: #fff;
    background-color: #007bff;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background 0.3s, transform 0.3s;
    &:hover {
    background: #535bf2;
    color: #fff;
    transform: scale(1.1);
    }
}
`;