import { useState,useEffect } from 'react';


import {db} from '../firebase-config';
import {collection, getDocs} from "firebase/firestore";

const Soft = ()=>{
    
        const [items,setItems] =  useState([]);
        const itemsCollectionRef = collection(db, 'Soft')
        useEffect(()=>{
      
          const getItems = async ()=>{
            const data = await getDocs(itemsCollectionRef)
            setItems(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
          }
          getItems()
        },[])
        return (
          <div className="items">
           
           {items.map((item) =>{return <div>
            <h2>{item.name}</h2>
            <p>{item.count}</p>
            <div className='buttons'>
            <button className='button'>-</button>
            <button className='button'>+</button>
            </div>
           </div>})}
          </div>
        );
      }

      export default Soft