import { useEffect, useState } from "react"
import React from 'react'
import axios from 'axios'


function Api() {

  const [data, setData] = useState([])

  useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/posts/1/comments').then((item) => {
      setData(item.data)
    })
  }, [])
  console.log(data);


  return (
    <>
      <div> Get Api</div>
      <table border={1}>
        <tr>
          
          <td>id</td>
          <td>name</td>
          <td>email</td>
          <td>body</td>
        </tr>


        {
          data.map((royal) => 

            <tr>
           
              <td>{royal.id}</td>
              <td>{royal.name}</td>
              <td>{royal.email}</td>
              <td>{royal.body}</td>
            </tr>

          )
        }
      </table>
    </>

  )
}

export default Api;