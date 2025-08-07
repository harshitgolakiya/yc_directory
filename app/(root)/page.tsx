import React from 'react'
import SearchForm from '../../components/SearchForm'
 import { auth } from '@/auth';
import StartupCardType, { StartupTypeCard } from '@/components/StartupCardType';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';
import { sanityFetch, SanityLive } from '@/sanity/lib/live';



const page = async ({searchParams}:{
  searchParams: Promise<{query?: string}>
}) => {
  const query = (await searchParams).query;
  const params = {search:query || null}
   const {data: posts} = await sanityFetch({query: STARTUPS_QUERY, params });

  return (
    <>
      <section className='pink_container !bg-[#EE2B69]'>
        <h1 className='heading'>Pitch Your Startup, <br /> Connect With Entrepreneurs</h1>

        <p className='sub-heading !max-w-3xl '>
          Submit Ideas, Vote on Pitches, and Get Noriced in Virtual Competitions.
        </p>
        <SearchForm query={query} />
      </section>    
      <section className='section_container'>
        <p className='text-30-semibold'>
          {query ? `search result for "${query}"` : "Explore Startups"}
        </p>
        <ul className='mt-7 card_grid'>
          {posts?.length>0 ? (
            posts.map((post : StartupTypeCard)=>(
              <StartupCardType key={post?._id} post={post}/>
            ))
          ):
            (
              <p className='no-results'>No Startups found</p>
            )
          }
        </ul>

      </section>
          <SanityLive/>
    </>
  )
}

export default page