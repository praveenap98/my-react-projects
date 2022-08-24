import React from 'react';
import './App.css';
import ProjectList from './components/ProjectList'

const App = () => {
    const projects = 
        [
            {
                name:'Expense Tracker', 
                description:'User can track expenses using this app. Context and Reducer hook is included to manage the state globally and creating custom logics for state.',
                appLink:'https://rtc-expense-track-app.netlify.app/', 
                githubLink:'https://github.com/praveenap98/expense-tracker-app', 
                id:Math.random()*100
            },
            {
                name:'Budget Tracker', 
                description:'User can track budget using this app. Context and Reducer hook is included to manage the state globally and creating custom logics for state.',
                appLink:'https://budget-track-rapp.netlify.app/', 
                githubLink:'https://github.com/praveenap98/budget-app', 
                id:Math.random()*100
            },
            {
                name:'Notes', 
                description:'User can save notes using this app. Includes local storage for keeping the notes.',
                appLink:'https://notes-reactjs-app.netlify.app', 
                githubLink:'https://github.com/praveenap98/notes-app', 
                id:Math.random()*100
            },

            {
                name:'Find the recipe', 
                description:'This app will list all the recipes which user searched for and provide relavent links for that recipe.',
                appLink:'https://recipelist-app.netlify.app', 
                githubLink:'https://github.com/praveenap98/recipe-app', 
                id:Math.random()*100
            },

            {
                name:'Contact List', 
                description:'This app will fetch some random folks details.',
                appLink:'https://cont-app.netlify.app', 
                githubLink:'https://github.com/praveenap98/contact-list-app', 
                id:Math.random()*100
            },

            {
                name:'ToDo List', 
                description:'User can add, delete and track the task status.',
                appLink:'https://tlist-app.netlify.app', 
                githubLink:'https://github.com/praveenap98/todo-list-app', 
                id:Math.random()*100
            },

            {
                name:'Basic Calculator', 
                description:'User can do basic arithmetic calculations.',
                appLink:'https://basic-calcr-app.netlify.app', 
                githubLink:'https://github.com/praveenap98/calc-app', 
                id:Math.random()*100
            },

            {
                name:'Simple Shopping List', 
                description:'User can add or remove items.',
                appLink:'https://shopg-list.netlify.app', 
                githubLink:'https://github.com/praveenap98/shopping-list-app-basic', 
                id:Math.random()*100
            },

            {
                name:'Basic Temperature Controller', 
                description:'User can increase or decrease the temperature. Based the temperature value, the background will change in the display.',
                appLink:'https://temp-control-app.netlify.app', 
                githubLink:'https://github.com/praveenap98/temp-control-app', 
                id:Math.random()*100
            }
        ];
    return(
        <div className='main-container'> 
            <h2>My React Projects</h2>
            <ProjectList projects={projects}/>
        </div>
    )
}

export default App;