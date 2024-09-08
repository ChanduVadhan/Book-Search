import React ,{useState}from "react";
import Card from "./Card";
import axios from "axios";
const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        
        //https://www.googleapis.com/books/v1/volumes?q=Harry%20Potter
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        
    }
    return(
        <>
            
                    <div className="search">
                        <input  type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e => setSearch(e.target.value)}/>
                        
                        {/* onKeyPress={searchBook} */}
                        <button onClick={searchBook}>Search book</button>
                        {/* <button><i className="fas fa-search"></i></button> */}
                    </div>
                    <hr class="divideline"></hr>
                    {/* <img src="./images/bg2.png" alt="" /> */}
                

            <div className="container">
              {
                    <Card book={bookData}/>
              }  
            </div>
        </>
    )
}
export default Main;