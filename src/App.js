import React, { useState} from 'react';
import { getCode } from 'country-list'
import ReactCountryFlag from "react-country-flag"
import {GoSearch} from 'react-icons/go'

import './App.css'
import StarRatings from './StarRatings'
import Badges from './Badges';

const ENDPOINT = `http://starlord.hackerearth.com/TopRamen`

const LIST = [
  {
    "Brand": "MAMA",
    "Variety": "Instant Noodles Coconut Milk Flavour",
    "Style": "Pack",
    "Country": "Myanmar",
    "Stars": 5,
    "Top Ten": "2016 #10"
  },
  {
    "Brand": "Prima Taste",
    "Variety": "Singapore Laksa Wholegrain La Mian",
    "Style": "Nan",
    "Country": "Singapore",
    "Stars": 5,
    "Top Ten": "2016 #1"
  },
  {
    "Brand": "Prima",
    "Variety": "Juzz's Mee Creamy Chicken Flavour",
    "Style": "Pack",
    "Country": "SG",
    "Stars": "NaN",
    "Top Ten": "2016 #8"
  },
  {
    "Brand": "Prima Taste",
    "Variety": "Singapore Curry Wholegrain La Mian",
    "Style": "Pack",
    "Country": "Singapore",
    "Stars": 5,
    "Top Ten": "2016 #5"
  },
  {
    "Brand": "Tseng Noodles",
    "Variety": "Scallion With Sichuan Pepper  Flavor",
    "Style": "Pack",
    "Country": "Taiwan",
    "Stars": 5,
    "Top Ten": "2016 #9"
  },
  {
    "Brand": "Wugudaochang",
    "Variety": "Tomato Beef Brisket Flavor Purple Potato Noodle",
    "Style": "Pack",
    "Country": "China",
    "Stars": 5,
    "Top Ten": "2016 #7"
  },
  {
    "Brand": "A-Sha Dry Noodle",
    "Variety": "Veggie Noodle Tomato Noodle With Vine Ripened Tomato Sauce",
    "Style": "Pack",
    "Country": "Taiwan",
    "Stars": 5,
    "Top Ten": "NaN"
  },
  {
    "Brand": "MyKuali",
    "Variety": "Penang Hokkien Prawn Noodle (New Improved Taste)",
    "Style": "Pack",
    "Country": "Malaysia",
    "Stars": 5,
    "Top Ten": "NaN"
  },
  {
    "Brand": "CarJEN",
    "Variety": "Nyonya Curry Laksa",
    "Style": "Pack",
    "Country": "Malaysia",
    "Stars": 5,
    "Top Ten": "2015 #4"
  },
  {
    "Brand": "Maruchan",
    "Variety": "Gotsumori Sauce Yakisoba",
    "Style": "Tray",
    "Country": "JPN",
    "Stars": 5,
    "Top Ten": "2015 #9"
  },
  {
    "Brand": "Mamee",
    "Variety": "Chef Gold Recipe Mi Kari Seribu Rasa",
    "Style": "Pack",
    "Country": "Malaysia",
    "Stars": 5,
    "Top Ten": "2015 #6"
  },
  {
    "Brand": "MyKuali",
    "Variety": "Penang Red Tom Yum Goong Noodle",
    "Style": "Pack",
    "Country": "Malaysia",
    "Stars": 5,
    "Top Ten": "2015 #1"
  },
  {
    "Brand": "Mama",
    "Variety": "Instant Noodles Shrimp Creamy Tom Yum Flavour Jumbo Pack",
    "Style": "Pack",
    "Country": "Thailand",
    "Stars": 5,
    "Top Ten": "2013 #10"
  },
  {
    "Brand": "Mama",
    "Variety": "Oriental Style Instant Noodles Green Curry Flavour Jumbo Pack",
    "Style": "Pack",
    "Country": "Thailand",
    "Stars": 5,
    "Top Ten": "2015 #8"
  },
  {
    "Brand": "Mamee",
    "Variety": "Chef Curry Laksa Flavour",
    "Style": "Pack",
    "Country": "Malaysia",
    "Stars": "NaN",
    "Top Ten": "2014 #7"
  },
  {
    "Brand": "Sapporo Ichiban",
    "Variety": "Otafuku Okonomi Sauce Yakisoba",
    "Style": "Tray",
    "Country": "Japan",
    "Stars": "NaN",
    "Top Ten": "2014 #4"
  },
  {
    "Brand": "Nongshim",
    "Variety": "Soon Veggie Noodle Soup",
    "Style": "Pack",
    "Country": "South Korea",
    "Stars": 5,
    "Top Ten": "2014 #9"
  },
  {
    "Brand": "Mama",
    "Variety": "Instant Noodles Yentafo Tom Yum Mohfai Flavour",
    "Style": "Pack",
    "Country": "Thailand",
    "Stars": 5,
    "Top Ten": "2014 #10"
  },
  {
    "Brand": "Prima Taste",
    "Variety": "Singapore Chilli Crab La Mian",
    "Style": "NaN",
    "Country": "Singapore",
    "Stars": 5,
    "Top Ten": "NaN"
  },
  {
    "Brand": "Samyang Foods",
    "Variety": "Maesaengyitangmyun Baked Noodle",
    "Style": "Pack",
    "Country": "South Korea",
    "Stars": 5,
    "Top Ten": "2014 #5"
  },
  {
    "Brand": "Paldo",
    "Variety": "Cheese Noodle",
    "Style": "Pack",
    "Country": "South Korea",
    "Stars": 5,
    "Top Ten": "2014 #6"
  },
  {
    "Brand": "MyKuali",
    "Variety": "Penang White Curry Noodle",
    "Style": "Pack",
    "Country": "Malaysia",
    "Stars": 5,
    "Top Ten": "2014 #1"
  },
  {
    "Brand": "Prima Taste",
    "Variety": "Singapore Laksa La Mian",
    "Style": "Pack",
    "Country": "SG",
    "Stars": 5,
    "Top Ten": "2013 #1"
  },
  {
    "Brand": "Prima Taste",
    "Variety": "Singapore Curry La Mian",
    "Style": "Pack",
    "Country": "Singapore",
    "Stars": "NaN",
    "Top Ten": "2013 #2"
  },
  {
    "Brand": "Nongshim",
    "Variety": "Jinjja Jinjja Flamin' Hot & Nutty",
    "Style": "Pack",
    "Country": "USA",
    "Stars": 5,
    "Top Ten": "2013 #4"
  },
  {
    "Brand": "Paldo",
    "Variety": "Kokomen Spicy Chicken",
    "Style": "Pack",
    "Country": "South Korea",
    "Stars": 5,
    "Top Ten": "2013 #9"
  },
  {
    "Brand": "Indomie",
    "Variety": "Mi Goreng Rendang (Import)",
    "Style": "Pack",
    "Country": "Indonesia",
    "Stars": 5,
    "Top Ten": "2013 #3"
  },
  {
    "Brand": "Koka",
    "Variety": "Spicy Black Pepper",
    "Style": "Pack",
    "Country": "SG",
    "Stars": 5,
    "Top Ten": "NaN"
  },
  {
    "Brand": "Nongshim",
    "Variety": "Shin Ramyun Black",
    "Style": "Pack",
    "Country": "South Korea",
    "Stars": 4.75,
    "Top Ten": "2012 #7"
  },
  {
    "Brand": "Mi Sedaap",
    "Variety": "Kari Spesial",
    "Style": "Pack",
    "Country": "Indonesia",
    "Stars": 4.5,
    "Top Ten": "2012 #5"
  },
  {
    "Brand": "Nissin",
    "Variety": "Yakisoba Noodles Karashi",
    "Style": "Tray",
    "Country": "Japan",
    "Stars": 5,
    "Top Ten": "2012 #3"
  },
  {
    "Brand": "Myojo",
    "Variety": "Hyoubanya No Chukasoba Oriental",
    "Style": "Pack",
    "Country": "JPN",
    "Stars": 4.25,
    "Top Ten": "2012 #6"
  },
  {
    "Brand": "Doll",
    "Variety": "Artificial Chicken",
    "Style": "Pack",
    "Country": "Hong Kong",
    "Stars": 4.5,
    "Top Ten": "2012 #9"
  },
  {
    "Brand": "Indomie",
    "Variety": "Special Fried Curly Noodle",
    "Style": "Pack",
    "Country": "Indonesia",
    "Stars": 5,
    "Top Ten": "2012 #1"
  },
  {
    "Brand": "Indomie",
    "Variety": "Mi Goreng Jumbo Barbecue Chicken",
    "Style": "Pack",
    "Country": "Indonesia",
    "Stars": "NaN",
    "Top Ten": "2012 #2"
  },
  {
    "Brand": "Myojo",
    "Variety": "Ippeichan Yakisoba",
    "Style": "Tray",
    "Country": "Japan",
    "Stars": 4,
    "Top Ten": "2013 #6"
  },
  {
    "Brand": "Sapporo Ichiban",
    "Variety": "Chow Mein",
    "Style": "Pack",
    "Country": "JPN",
    "Stars": 5,
    "Top Ten": "2012 #4"
  }
]
// FIXME: Unable to use API because of CORS
function getList(cb) {
  return fetch(ENDPOINT).then(res => {
    const result = res.json();
    console.log(result);
    cb(result)
  }).catch(error => console.log(error))
}

function handleNan(a, b) {
  if (a['Top Ten'] === 'NaN' && b['Top Ten'] === 'NaN') {
    return 0
  } else if (a['Top Ten'] === 'NaN' && b['Top Ten'] !== 'NaN') {
    return -1
  } else if (a['Top Ten'] !== 'NaN' && b['Top Ten'] === 'NaN') {
    return 1
  }
}

function sortByYear(a, b) {
 handleNan(a, b)

  const [yearA] = a["Top Ten"].split('#').map(a => a.trim() * 1)
  const [yearB] = b["Top Ten"].split('#').map(a => a.trim() * 1)

  if (yearA > yearB) {
    return -1
  }
  return 1
}

function sortByRank(a, b) {
  handleNan(a, b)
  const [, rankA] = a["Top Ten"].split('#').map(a => a.trim() * 1)
  const [, rankB] = b["Top Ten"].split('#').map(a => a.trim() * 1)

  if (rankA > rankB) {
    return 1
  }
  return -1
}

function processList(list) {
  const filteredList = list.filter(l => l['Top Ten'] !== 'NaN')
  const byRank = filteredList.sort(sortByRank)
  return byRank.sort(sortByYear)
}

function App() {
  const [list, setList] = useState(processList(LIST))

  return (
    <div className='h-screen bg-indigo-200'>
      <div className="py-6 px-4 bg-gray-200">
        <div className='max-w-screen-lg m-auto'>
          <header className="mb-16">
            <h1 className="text-3xl lg:text-6xl text-center text-indigo-700 font-bold">Food Bite</h1>
          </header>
          <form className='w-full flex flex-col lg:flex-row lg:items-center justify-end' onSubmit={event => {
            event.preventDefault()
          }}>
            <div className='relative w-full max-w-md'>
              <GoSearch className='absolute mt-2 ml-2'/>
              <input 
              className='w-full pl-8 pr-2 py-1 rounded'
              placeholder='Search for brand...' 
              onChange={event => {
                const search = event.target.value
           
                let filteredList = [...LIST]
                
                if (search) {
                  filteredList = filteredList.filter(l => l.Brand.toLowerCase().includes(search.toLowerCase()))
                  setList(processList(filteredList))
                } else {
                  setList(processList(LIST))
                }
        
                }}/>
            </div>              
          </form>
          
        </div>
      </div>
      <div className='py-6 px-4 bg-indigo-200'>
        <div className="flex flex-wrap justify-around max-w-screen-lg m-auto">
            {list.length ? list.map((r, idx) => {
              let hasRank = r["Top Ten"] !== 'NaN'
              const [year, rank] = r["Top Ten"].split('#').map(a => a.trim() * 1)
              return (
                <div key={idx} className={`w-full md:max-w-md  px-4 py-2 mb-4 bg-white rounded-lg shadow `}>
                    <div className='mb-2 flex items-center justify-between'>
                    <span className="font-large text-indigo-700 text-xl">{r.Brand}</span>
                    <div className='text-sm text-gray-700'>
                      {hasRank ? `Ranked #${rank} in ${year}`  : 'No ranking'}
                    </div>
                    </div>
                    <div className='mb-2'>
                    <StarRatings rating={r.Stars === 'NaN' ? 0 : r.Stars}/>
                    </div>
                    <div className='mb-2'>
                    <span className="text-gray-700">Serves variety</span> <Badges list={r.Variety.split(' ')}/> 
                    </div>
                    <div className='mb-2 text-gray-700'>
                    In <span className="">{r.Style}</span> style
                    </div>
                    <div className='mb-2'>
                    <ReactCountryFlag countryCode={getCode(r.Country) || 'US'}/>
                    </div>
              </div>
              )
            }): (<div className='mt-6 text-lg lg:text-2xl text-gray-700'>No results found!</div>)}
          </div>
      </div>
    </div>
    
  );
}

export default App;
