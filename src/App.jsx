import { useSelector } from 'react-redux';
import './App.css'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import TotalSummary from './components/TotalSummary'
import React, { Suspense } from 'react';
import StoreFronts from './components/graphs/StoreFronts';
import Trends from './components/graphs/Trends';
import BiggestChanges from './components/tables/BiggestChanges';
const LazyFilter = React.lazy(()=>import("./components/Filter"));
const LazyTopList = React.lazy(() => import("./components/tables/TopList"));

function App() { 
  const {showFilterModal} = useSelector((state) =>state.app); 
  
  return (
    <>
    <div className='flex gap-10' >
      <Sidebar />
      <div className='w-full'>
        <TopBar />
        <div className='p-4 my-4 inset-shadow-sm inset-shadow-gray-200/40'>
          <TotalSummary />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 px-4">          
          <StoreFronts />
          <Trends />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 px-4">          
          <LazyTopList /> 
          <BiggestChanges />
        </div>
        
      </div>
    </div>
    <Suspense fallback={<div>Loading...</div>}>
      {showFilterModal && <LazyFilter />}
    </Suspense>
    </>
  )
}

export default App
