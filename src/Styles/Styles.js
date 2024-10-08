import styled from 'styled-components';

export const Container = styled.div`
background: linear-gradient(to bottom, var(--primary-color), var(--secondary-color));
background-size: cover;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
`
export const Image = styled.img`
width: 200px;
margin-top: 30px;
`
export const ContainerItens = styled.div`
background: linear-gradient(
157.46deg,
rgba(255,255,255,0.6)0.84%,
rgba(255,255,255, 0.6)0.85%,
rgba(255,255,255,0.15)100%
);
border-radius: 61px 61px 61px 61px ;
padding: 50px 36px;
display: flex;
flex-direction: column;
height: auto;
margin-bottom: 220px;
`

export const H1 = styled.h1`
font-style: normal;
font-weight: bold;
font-size: 34px;
line-height: 40px;
text-align: center;
color: #FFFF;
margin-bottom: 80px;

`

export const InputLabel = styled.p`
letter-spacing: -0.408px;
color: #FFFF;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
padding-left: 25px;
`

export const Input = styled.input`
background: rgba(255,255,255,0.25);
box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
border-radius: 14px;
border: none;
outline: none;
width: 100% ;
max-width: 500px; 
min-width: 300px;
height: 58px;
padding-left: 25px;
font-size: 15px;
color: #FFFF;
margin-bottom:34px;
`

export const ButtonCadaster = styled.button`
width: 342px;
height: 74px;
background: rgba(0,0,0,0.8);
border-radius: 14px;
color: #FFFF;
border: none;
font-style: normal;
font-weight: bold;
font-size: 17px;
line-height: 28px;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.5;
}
`
export const Arrow = styled.img`
width: 40px;
height: 40px;

`
export const Trash = styled.img`
width: 30px;
height: 30px;
`

export const User = styled.li`
display: flex;
justify-content: space-around;
align-items: center;
background: rgba(255,255,255,0.25);
box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
border-radius: 14px;
border: none;
outline: none;
width: 342px;
height: auto;
margin-top: 20px;
padding: 10px;
gap: 10px;

p{
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 28px;
    color: #FFFF;
}
button{
    background: none;
    border: none;
    cursor: pointer;
}
`