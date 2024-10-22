import React, { useEffect, useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import styled from 'styled-components';

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const heightToHidden = 200;

    const goToBtn = () => {
        const scrollStep = -window.scrollY / (500 / 15);
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    };

    const listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        setIsVisible(winScroll > heightToHidden);
    };

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        return () => window.removeEventListener('scroll', listenToScroll);
    }, []);

    return (
        <Wrapper>
            <div className={`top-btn ${isVisible ? 'visible' : ''}`} onClick={goToBtn}>
                <IoIosArrowUp className='icon text-[40px]' />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    .top-btn {
        font-size: 1.8rem;
        width: 3.3rem;
        height: 3.3rem;
        color: white;
        background-color: #80A102;
        border-radius: 50%;
        position: fixed;
        bottom: 6rem;
        right: 1.1rem;
        z-index: 100px;
        display: flex;
        justify-content: center;
        cursor: pointer;
        transition: transform 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
        box-shadow: 0px 8px 16px rgba(3, 4, 28, 0.3);
        opacity: 0;
        visibility: hidden;
        transform: translateY(20px);
        animation: gototop 1s infinite alternate;
    }
    .top-btn.visible {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
    .top-btn .icon {
        padding-top: 15px;
    }
    .top-btn:hover {
        transform: translateY(-7.5px);
        background-color: #80A102;
    }
    @keyframes gototop {
        0% {
            transform: translateY(-0.5rem);
        }
        100% {
            transform: translateY(0);
        }
    }
`;

export default GoToTop;