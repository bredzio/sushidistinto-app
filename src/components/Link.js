import React from 'react';
import styled from 'styled-components';

export default function Link(props){
    let textColorMain= "#fff";
    let hoverColor="#A25768";    

    const {page} = props;
    
    const MyPage = styled.a`
        color:${textColorMain};
        line-height:30px;
        font-size:20px;
        font-weight:bold;
        -webkit-transition:all 500ms ease;
        -o-transition:all 500ms ease;
        transition:all 500ms ease;

        &:hover{
            color:${hoverColor};
            text-decoration: underline;
        }

    `;

    
    return(
        <>
            <li className='nav-item'>
                <MyPage className="nav-link" href={'./'+page.toLowerCase()+'.html'}>{page}</MyPage>
            </li>
        </>
    );
}