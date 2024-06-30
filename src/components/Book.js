import { Container, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Book({book}) {
  return (
    (<Container className='bookCard'>
      <Link to={`/book/${book.id}`}><img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ""} alt='cover'/></Link>
      <Link to={`/book/${book.id}`}><Text mt="15px">{book.volumeInfo.title}</Text></Link>
    </Container>)
  );
}

export default Book