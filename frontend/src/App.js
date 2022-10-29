import React, { useState } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { addItem } from './redux/addItemSlice';

import { fetchItems} from './redux/itemSlice';



function App() {

	
	
  const [value, setValue] = useState('');
  const {todos,loading,error} = useSelector((state) => state.item)

  const dispatch = useDispatch()
  React.useEffect(() => {
	 if(error){
		alert(error)
	 }
	dispatch(fetchItems());

	}, [dispatch])

	useSelector((state)=>  console.log(state))
//   console.log('====================================');

//   console.log('====================================');

	const onSubmit = (event) => {
		event.preventDefault();
		if (value) {
			dispatch(
				addItem({text : value})
			);
		}
  };



  return (
<React.Fragment>
<div className="TodoApp" style={{height:"100vh",display:"flex",alignItems:"center",justifyItems:"center",flexDirection:"column"}}>
      <section className="add-todo">
      <h1 style={{textAlign:"center",fontSize:"4rem"}}>Todo App</h1>
      <form onSubmit={onSubmit} >
			<input
			style={{padding:"1rem 4rem",marginRight:"1rem",fontSize:"1rem"}}
				type='text'
				placeholder='Add a todo'
				value={value}
				onChange={(event) => setValue(event.target.value)}>

			</input>

			<button type='submit' style={{padding:"1rem 2rem"}}>
				Add
			</button>
		</form>
      </section>
<section className='todos'>
	<h1 style={{backgroundColor:"#efefef" }}>----- Todos -----</h1>
	<ul>
      {!loading && todos.data && todos.data.map((el,index)=>{
return <li key={index} >{el.text}</li>
	  })}
	  </ul>
</section>

    </div>
</React.Fragment>
  );
}

export default App;
