import {Link} from 'react-router-dom'
import React, { Component, useState, useEffect } from 'react';
			function Gallery(){

        //useEffects HOOK
    		useEffect(()=>{
          //getData from server
            //fetchItems();

            getImages();
        },[])

    			//using setState HOOK
    			const [items, setItems] = useState([]);


          let img = [
            { 
              id:1,
              alt:'parlaiment',
              url:'https://images.unsplash.com/photo-1555958493-1380d49ac1ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=60'
            },
            {
              id:2,
              alt:'bounty, heaven...',
              url:'https://images.unsplash.com/photo-1578922746465-3a80a228f223?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60'

            },
            {
              id:3,
              alt:'bounty, heaven...',
              url:'https://images.unsplash.com/photo-1531955895395-7746706426e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60'
            },
            {
              id:4,
              alt:'alt',
              url:'https://images.unsplash.com/photo-1586254574632-55e4aaea7793?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60'
            },
            {
              id:5,
              alt:'alt',
              url:'https://images.unsplash.com/photo-1586194757644-5e29ec219533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60'
            },
            {
              id:6,
              alt:'alt',
              url:'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60'
            },

            {
              id:7,
              alt:'alt',
              url:'https://images.unsplash.com/photo-1586360967427-a0132892f5bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60'
            },
            {
              id:8,
              alt:'alt',
              url:'https://images.unsplash.com/photo-1547460719-5bb9d93c46e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60'
            },
            {
              id:9,
              alt:'alt',
              url:'https://images.unsplash.com/photo-1556624651-70ad2f7e8364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60'
            },
          ]

          const getImages = () =>{
            setItems(img);
          }


          //
          /*  const fetchItems= async()=>{
              //const data = await fetch('https://api.unsplash.com/search/photos?query=wanderlust');//API key
              //eUt_Ty3ujc_DYN946Sh5PzG1lwXXMrs5j0ubKoy30f4
              //const data = await fetch('https://picsum.photos/v2/list?page=2&limit=10');//CORS
              //const items = await data.json();
              setItems(items);
              console.log(items);
          }*/
          /*
                  <Link to={`/${item.id}`}>
                  {item.title}
                    <img src={item.url}/>
                  </Link>
          */

          return (
            <div>
              <div id='gallery'>
              {
               img.map(item=>(
             
                <div key={item.id} className={`image image${item.id}`}>
                    <img src={item.url} />
                </div>
      
                )
               )
              }

              </div>
            </div>
    			);
			}

			export default Gallery;