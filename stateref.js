import React, {Component} from 'react'
import NewsCard from './../newsCard/NewsCard'
import axios from 'axios'

let apiStart1 = "https://newsapi.org/v2/top-headlines?q="
let apiStart2 = "https://newsapi.org/v2/everything?q="
const apiEnd = "&apiKey=890966d216064af5975cc3819e586259"
const newsUrl = 'https://newsapi.org/v2/top-headlines?' +
                'country=us&' +
                'apiKey=890966d216064af5975cc3819e586259'

class SearchBar extends Component{
    constructor(){
        super()
        this.state={
            data:[],
            articles:[],
            stuff:[],
            urls:[],
            imgArr:[],
            userInput:"",
            searchArr:[],
            apiSearchDefault:false
        }
        
    }

    componentDidMount(){
        axios.get(newsUrl).then((response)=>{
        console.log(response)
            this.setState({data:response.data.articles})
        })
      }

        changeHandler(val){
            this.setState({userInput:val})
        }
        apiToggle(){
            if(this.state.apiSearchDefault === false){this.setState({apiSearchDefault:true})}
            else{this.setState({apiSearchDefault:false})} console.log(this.state.apiSearchDefault)
        }


        getNewHeadlines(){
            if(this.state.apiSearchDefault===false){
            axios.get(apiStart1+this.state.userInput+apiEnd).then((response)=>{
            this.setState({data:response.data.articles})
            })}
            else if(this.state.apiSearchDefault===true){axios.get(
            apiStart2+this.state.userInput+apiEnd).then((response)=>{
            this.setState({data:response.data.articles})
            })}
        }
        
        render(){
            return(
                <div>
                    <div className="searchBar">
                        <div className="searchDiv">
                            <input onChange={(e)=>this.changeHandler(e.target.value)} type="text" placeholder="Search Here..."/>
                            <button onClick={()=>{this.getNewHeadlines()}}>Search</button>
                            <button onClick={()=>{this.apiToggle()}}>Widen Search</button>
                        </div>
                    </div>
                        <div className="newsCardHolder">
                            <div className="renderOuter">
                                <div className="renderInner">
                                {this.state.data.map((val,i)=>{
                                    return(
                                    <NewsCard title={val.title} url={val.url} img={val.urlToImage} index={i}/>
                                )})}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    
    }
export default SearchBar