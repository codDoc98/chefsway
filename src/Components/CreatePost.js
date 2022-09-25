//form


import React from 'react'

function CreatePost() {
  return (
    <div>
    <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Recipe Name</label>
    <input type="recipename" class="form-control" id="exampleFormControlInput1" placeholder="Name" required></input>
    
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Type</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>veg</option>
      <option>non-veg</option>
      
    </select>
  </div>
 
  <div class="form-group">
    {/* <label for="exampleFormControlTextarea1">Ingrediants</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" required></textarea> */}
    <label for="exampleFormControlTextarea1">Ingrediants</label>
  <input type="text" class="form-control" placeholder="Ingrediants" aria-label="Ingrediants"  required aria-describedby="button-addon2"></input>
  <button class="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>

  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Method</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" required></textarea>
  </div>
  <div class="form-group">
    <label for="exampleFormControlFile1">Upload image</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  
</form>
</div>
  )
}

export default CreatePost

