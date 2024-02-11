import React, { useEffect, useState } from 'react'
import ProjCard from './ProjCard'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spinner } from '@chakra-ui/react';

const GridProjects = ({projects, fetchData, prev, originalProjs, loading}: any) => {

  return (

    <InfiniteScroll
    className='relative'
    
    dataLength={projects.length} //This is important field to render the next data
    next={fetchData}
    hasMore={!(prev >= originalProjs.length)}
    loader={<></>}
    endMessage={
      <p style={{ textAlign: 'center' }}>
        <b>Yay! You have seen it all</b>
      </p>
    }
    // below props only if you need pull down functionality
    // refreshFunction={() => {console.log('refresh')}}
    // pullDownToRefresh
    // pullDownToRefreshThreshold={50}
    // pullDownToRefreshContent={
    //   <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
    // }
    // releaseToRefreshContent={
    //   <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
    // }
  >
    <div className='grid gap-4 overflow-x-hidden'
    style={{
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))"
    }}
    >
    {
      projects?.length
      ?(
        projects.map((el:any) => (
          <ProjCard
          key={el.id}
          item={el}
          />
        ))
      ):''
    }

    </div>
  </InfiniteScroll>
    // <div
    // className='
    // grid gap-4
    // '
    // style={{
    //   gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))"
    // }}
    // >
    //   {
    //     projects?.length
    //     ?(
    //       projects.map((el:any) => (
    //         <ProjCard
    //         key={el.id}
    //         item={el}
    //         />
    //       ))
    //     ):''
    //   }
    // </div>
  )
}

export default GridProjects