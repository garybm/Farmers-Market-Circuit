import React from "react";
import Story from './Story';

const storyData=[
{color:'tan',title:'lorem ipsum',text:'Hey, heres a story'},
{color:'teal',title:'lorem ipsum',text:'Hey, heres another story'},
{color:'tan',title:'lorem ipsum',text:'Hey, heres a different story'},
{color:'blue',title:'lorem ipsum',text:'Wow, so many stories!'},
{color:'green',title:'lorem ipsum',text:'Hey, heres a story'},
{color:'tan',title:'lorem ipsum',text:'Hey, heres a story'},
{color:'tan',title:'lorem ipsum',text:'Hey, heres a story'},
]


function StoryList(){
  return (
  	<div>
  	{storyData.map((story, i)=>{
  		return <Story color={story.color} title={story.title} text={story.text}/>
  	})}
  	</div>
  	)
}

export default StoryList;