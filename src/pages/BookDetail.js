import { Heading, Text } from "@chakra-ui/react";
import { Col, Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BookDetail() {
  const { id } = useParams();

  const [book, setBook] = useState({});

  useEffect(() => {
    const getBook = async () => {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );
      setBook(res.data);
    };

    getBook();
  }, [id]);

  const { volumeInfo } = book;

  console.log("volinfo ", volumeInfo);

  return (
    <div>
      {book && book !== null && volumeInfo && volumeInfo !== null && (
        <>
          <Row className="bookDetailBox" gutter={30}>
            <Col span={8}>
              <img
                className="bookDetailImage"
                src={volumeInfo.imageLinks.medium}
                alt="cover"
              />
            </Col>
            <Col span={16}>
              <Heading as="h1">{volumeInfo.title}</Heading>
              <Text mt="30px">
                <b className="detailText ">Authors:</b>
              </Text>
              {volumeInfo.authors.map((author, i) => {
                return (
                  <Text className="detailText" key={i}>
                    -{author}
                  </Text>
                );
              })}

              <b className="detailText">Category:</b>
              {volumeInfo.categories &&
                volumeInfo.categories.map((category, i) => {
                  return (
                    <Text className="detailText" key={i}>
                      {category}
                    </Text>
                  );
                })}
              <Text className="detailText">
                <b>Page count: </b>
                {volumeInfo.pageCount}
              </Text>
              <Text className="detailText">
                <b>Published date:</b>
                {volumeInfo.publishedDate}
              </Text>
              <Text className="detailText">
                <b>Publisher:</b>
                {volumeInfo.publisher}
              </Text>
            </Col>
          </Row>
        </>
      )}
      {/* { book && } */}
    </div>
  );
}

export default BookDetail;
