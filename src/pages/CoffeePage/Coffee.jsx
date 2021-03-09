import React from 'react'
import './Coffee.css'
import CoffeeList from '../../containers/ProductsLists/CoffeeList/CoffeeList'

const Coffee = () => {
    return (
        <>
            <div className='coffee-page'>
                <div className='coffee-p1'></div>
            </div>
            <div className='coffee-desc'>
                <div className='coffee-img2'>

                </div>
                <div className='desc-12'>
                    <p>The United States of America is considered to be a country of unlimited opportunities. Millions of people have arrived there to fulfill their American dream. Some of them dream to become Hollywood actors, others have a wish to live in cozy houses with white fences. Anyway, the USA attracts with its spirit of freedom and democracy. But what is real America really like?
</p>
                </div>
            </div>
            <div className='coffee-desc'>
                <div className='desc-12'>
                    <p>The national symbol of the USA is the Statue of Liberty. It accumulates the spirit of democracy and freedom. The Statue is located on an island in New York and it was the first thing that people saw arriving to America on the ferry.
Talking about America, it’s impossible not to mention Hollywood. It is a region in Los Angeles which is the center of American and world movie making industry. It is famous for its movie studios and locations as well as Hollywood Walk of Fame. The stars on this Walk are given as an award to the people for their contribute to the entertainment industry.
In my opinion America is just amazing. I admire its culture and the spirit. I have never been to the USA, but I’m looking forward to going there and seeing everything with my own eyes.
.</p>
                </div>
                <div className='coffee-img3'>

                </div>
            </div>
            <CoffeeList />
        </>
    )
}

export default Coffee


