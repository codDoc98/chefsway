//form


import React from 'react'

function CreatePost() {
  return (
    <div>
    <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Recipe Name</label>
    <input type="recipename" class="form-control" id="exampleFormControlInput1" placeholder="Name"></input>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Type</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>veg</option>
      <option>non-veg</option>
      
    </select>
  </div>
 
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Ingrediants</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Method</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
  </div>
  <div class="form-group">
    <label for="exampleFormControlFile1">Example file input</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
  </div>
</form>
</div>
  )
}

export default CreatePost

