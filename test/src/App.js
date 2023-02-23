import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchDraws, fetchMoreDraws } from './store';
import KinoGrid from './component/KinoGrid';
import {Spinner} from 'react-bootstrap'
import './App.css';

function App() {
  const dispatch = useDispatch();
  const {data, loading, hasMore} = useSelector((state) => state.draws);

  // Fetch Initial Draws when the components mounts
  useEffect(() => {
    dispatch(fetchDraws());
  }, [dispatch]);

  // Fetch more draws when the user scrolls to the bottom of the page.
  useEffect(() => {
    function handleScroll() {
      if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight && hasMore && !loading) {
        dispatch(
          fetchMoreDraws({
            drawNumber: data[data.length - 1].drawNumber,
            number: 5,
            sort: 'DESC'
          })
        );
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll',handleScroll);
    };
  }, [dispatch, data, hasMore, loading]);

  return (
    <div className="App container">
      {loading && (
        <div className='text-center mt-3'>
          <Spinner animation='border' role='status'/>
        </div>
      )}
      <KinoGrid draws={data} /> 
    </div>
  );
}

export default App;
