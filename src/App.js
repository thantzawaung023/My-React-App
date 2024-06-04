import React, { useState , useEffect } from 'react';
import "./App.css";

class Item extends React.Component{
  render(){
    return(
      <li>
        {this.props.name},
        ${this.props.price}
      </li>
    );
  }
}

class App extends React.Component{
  state = {
    items:[
      { id:1,name:'Apple',price:'0.99'},
      {id:2,name:'Orange',price:'0.85'}
    ]
  }

  nameRef = React.createRef();
  priceRef = React.createRef();

  add = () =>{
    let id=this.state.items.length +1;
    let name =this.nameRef.current.value;
    let price =this.priceRef.current.value;

    this.setState({
      items:[
        ...this.state.items,
        {id,name,price}
      ]
    })
  }

  render(){
    return (
      <div>
      <h1>Hello React</h1>
      <ul>
       {
        this.state.items.map(i =>{
          return(
            <Item key={i.id} name={i.name} price={i.price} />
          );
        })
       }
      
      </ul>
      <label>Name</label>
      <input type='text' ref={this.nameRef} /><br/>
      <label>Price</label>
      <input type='text' ref={this.priceRef} /><br/>
      <button onClick={this.add}>Add</button>
      </div>
     
    );
  }
}


App = (prop)=>{
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const url = "https://api.github.com/users"
  async function getUsers (){
    const response = await fetch(url);
    const users = await response.json();
    console.log(users);
    if(response.status>300){
      setIsError(true);
      setIsLoading(false);
    }
    setUsers(users);
    setIsLoading(false);
  }

  useEffect(()=>{
    getUsers();
  },[]);

  if(isLoading){
    return <h1>Loading...</h1>
  }
  else if(isError){
    return <h1>Error is Found...</h1>
  }

    return (
      <div>
      <h1>Github Users</h1>
      <div className='card-container' >
       {
        users.map(user =>{
          return(
         
              <div className='card' key={user.id}>
                <img src={user.avatar_url}  className='avatar'/>
                <div>
                  <h2 className='user-name'>{user.login}</h2>
                  <a href={user.html_url} className='git-profile'>Profile</a>
                </div>
              </div>
          );
        })
       }
      
      </div>
      </div>
     
    );
  

}

export default App;