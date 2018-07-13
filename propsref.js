import React from 'react';
import axios from "axios";
import '../App.css';
export default function Display(props) {
   const {fullName,parkCode} = props
   return (
   <div>
       {fullName}
       <button style={{opacity: .6}} onClick={ () => props.getPost(parkCode)}>get</button>
       <button style={{opacity: .6}} onClick={ () => props.deletePost(parkCode)}>delete</button>
       
   </div>
 )
}

//PROPS PASSED FROM HERE (BINDING NOT SHOWN, DON'T FORGET!!!)

//________________________________________________

//TO HERE

getHistory(){

       let window = [];
       for(let i = 0; i< this.state.history.length;i++)
       {
           const {parkCode,fullName} = this.state.history[i];
           window.push(
               <Display
               history key = {i}
               parkCode = {parkCode}
                fullName = {fullName}
                getPost = {this.getPost}
                deletePost = {this.deletePost}
                />)
       }
       return window
   }