import { Box, Button, Input } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import {AiOutlineSearch}  from "react-icons/ai"
import { useDispatch } from 'react-redux';
import { getBooksAsync } from '../redux/booksSlice';

function SearchForm({setSearch}) {


  const [searchText,setSearchText] = useState("")
    
  const dispatch = useDispatch()
  
    const handleSearch = () => {
      setSearch(searchText)
      dispatch(getBooksAsync(searchText))
    }

    
 

  return (
    <Box mb="50px" className='searchBox'>
        <Input backgroundColor="white" onKeyDown={(e)=> e.key ==="Enter" ? handleSearch(e.target.value): ""} value={searchText} onChange={(e)=>setSearchText(e.target.value)} placeholder='Search a book or an author'/>
        <Button onClick={()=> handleSearch(searchText)} colorScheme='blue' marginLeft="10px"><AiOutlineSearch/>&nbsp; Search</Button>
    </Box>
  )
}

export default SearchForm