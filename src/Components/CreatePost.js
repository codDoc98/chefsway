//form


import React , { useState,useEffect} from "react";
import axios from "axios";

function CreatePost() {

  const[post,setPost]=useState({recipeName:"",type:"",ingrediants:[],method:[]})

 
  const loadPost=async(e) =>
  {
    e.preventDefault();
    console.log(post);
    const result=await axios.post("http://localhost:8083/post",post) 
    console.log(result.data);
   }

  const handleinputs=(e)=>
  {const {name,value}=e.target;
   setPost({...post,[name]:value});
   console.log(post);
  }



  return (
    <div>

    <form className="form border shadow">
  <div class="form-group">
    <label for="exampleFormControlInput1">Recipe Name</label>
    <input type="recipename" class="form-control" name = "recipeName" value={post.recipeName} id="exampleFormControlInput1" placeholder="Name" required onChange={handleinputs}></input>

    
  </div>
  <div class="form-group">
    {

      <label class="radio-inline">Type<br></br>
      <input type="radio" name="type" value="veg" onChange={handleinputs}></input>
        veg
        </label>
        }
        </div>

        <div class="form-group">
          {
            <label class="radio-inline">
            <input type="radio" name="type" value="non-veg" onChange={handleinputs} ></input>
            non-veg
            </label>}
          

          </div>


      
  
 
  {/* <div class="form-group">
    {/* <label for="exampleFormControlTextarea1">Ingrediants</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" required></textarea> */}
    {/* <label for="exampleFormControlTextarea1">Ingrediants</label>
  <input type="text" class="form-control" placeholder="Ingrediants" aria-label="Ingrediants"  required aria-describedby="button-addon2"></input>
  <button class="btn btn-outline-secondary" type="button" id="button-addon2">Add</button> */} 

  {/* </div>
  <div class="form-group">
    {/* <label for="exampleFormControlTextarea1">Method</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" required></textarea> */}
  {/* <label for="exampleFormControlTextarea1">Methods</label>
  <input type="text" class="form-control" placeholder="Method" aria-label="Method"  required aria-describedby="button-addon2"></input>
  <button class="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
  </div> */}
  {/* <div class="form-group">
    <label for="exampleFormControlFile1">Upload image</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
  </div> */} 
  <button type="submit" onClick={(e)=>{loadPost(e)}} class="btn btn-primary">Submit</button>
  {/* { {
    post.map((post,index)=>(
      
 
    ))
} } */}

  
</form>
</div>
  )
}

export default CreatePost

