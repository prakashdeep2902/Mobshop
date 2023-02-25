import React from 'react' 
import './sort.css'
import { BsFillGridFill } from 'react-icons/bs';
import { BsList } from 'react-icons/bs';
import { useFilterContext } from '../../context/filter_context';
const Sort = () => {

  const { grid_view, setGridView, setListView } = useFilterContext();
  return (
    <div className='short_container'> 
      <div className='view_button'>
        <button className={grid_view ? 'active sort-btn' : 'sort-btn'}
          onClick={setGridView}>
          <BsFillGridFill />
        </button>
        <button className={grid_view ? 'sort-btn' : 'active sort-btn'} onClick={setListView}>
          <BsList />
        </button>
      </div>
      <div className='numofpro'>
        <p>number of products</p>
      </div>
      <div className='dropdown'>
        <input type="text" />
      </div>
    </div>
  )
}

export default Sort
