
import { useState,useEffect } from 'react';


import {db} from '../firebase-config';
import {collection, getDocs,updateDoc,doc} from "firebase/firestore";

const Bottles = ()=>{
    
  const [items,setItems] =  useState([]);
  const itemsCollectionRef = collection(db, 'Bottled beers ciders')
  const decrementCount = async (id,count)=>{
       const itemDoc =doc(db,"Bottled beers ciders",id)
      const newFields = {count: count - 1}
      await updateDoc(itemDoc,newFields)
  } 
  const incrementCount = async (id,count)=>{
      const itemDoc= doc(db,"Bottled beers ciders",id)
      const newF ={count: count + 1}
      await updateDoc(itemDoc,newF)
  }
  useEffect(()=>{
      
      const getItems = async ()=>{
          const data = await getDocs(itemsCollectionRef)
          setItems(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
      }
      getItems()
  })
  
      return (
        <div className="items">
         
         {items.map((item) =>{return <div>
          <h3>{item.name}</h3>
          <p>{item.count}</p>
          <div className='buttons'>
          <button className='button' onClick={()=>{decrementCount(item.id, item.count)}}>-</button>
          <button className='button' onClick={()=>{incrementCount(item.id, item.count)}}>+</button>
          </div>
         </div>})}
        </div>
      );
      }

export default Bottles