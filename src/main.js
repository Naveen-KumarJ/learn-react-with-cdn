const containerStyles = {
    backgroundColor:"red",
    width:'50%',
    padding:'20px 50px',
    fontFamily:"Poppins, sans-serif",
    backgroundColor:"ghostwhite"
}

const marginTop = {
    marginTop:'20px'
}

const heading = React.createElement('h1', null, 'Learn Web Development');
const firstDiv = React.createElement('div',null, 'Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.');
const secondDiv = React.createElement('div',{style:marginTop}, 
    ['The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from ',
    React.createElement('a',{href:'https://developer.mozilla.org/en-US/docs/Learn'},'the rest of MDN'),
    ', and other intermediate to advanced resources that assume a lot of previous knowledge.']
);
const thirdDiv = React.createElement('div',{style:marginTop}, 'If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.');

const container = React.createElement('div', 
    {
        style:containerStyles
    }, 
    [heading, firstDiv, secondDiv, thirdDiv]
);

ReactDOM.render(container, document.getElementById('root'));