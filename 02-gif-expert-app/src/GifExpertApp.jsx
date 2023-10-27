import { useState } from "react"
import { AddCategory,GifGrid } from "./components"

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['Star Wars'])

  const onAddCategory = (newCategory) =>{

    if(categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories])
      
  }
  return (
    <>
        {/* title */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
        //setCategories={setCategories} 
          onNewCategory={ onAddCategory }
        />
        {/* Gif list*/} 
        
        {
          categories.map(category =>(
            <GifGrid 
            key={category} 
            category={ category } />
          ))
        }
        
        {/* Gif Item */}
    </>
  )
}
