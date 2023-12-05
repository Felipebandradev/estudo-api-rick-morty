import styled from "styled-components";

const StyledConteudo = styled.main`

h2{
    font-size: 2rem ;
    text-align: center;
    color: #afeeee;
    text-shadow: black 5px 5px 10px;
}

.cardContainer{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
}
`;

const StyledArtigo = styled.article`
background: rgb(220,255,255);
background: linear-gradient(342deg, rgba(220,255,255,1) 36%, rgba(196,211,247,1) 69%);
border-radius: 15px;
width: 450px;
margin: 10px;
padding: 1rem;
box-shadow:  inset black 0 0 10px;
display: flex;
flex-flow: row nowrap ;
justify-content: space-evenly;
align-items: center;

h3, p{
    margin: 10px auto;
    padding: 3px;
}

img{
    max-width: 150px;
    width: 100%;
    clip-path: circle(50% at 50% 50%);
    
}

b{
    color: #99c332;
    margin: 10px;
    
}







@media screen and (min-width: 750px)  {
    flex-direction: column;
    width: 260px;
    background: rgb(220,255,221);
    background: linear-gradient(342deg, rgba(220,255,221,1) 36%, rgba(173,252,128,1) 69%);
    align-items: start;

     img {
        align-self: center;        
    }
    
    b{
        color: blueviolet;
    }

   
   

} 



`;



export {StyledArtigo, StyledConteudo} 