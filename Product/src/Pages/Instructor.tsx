import React from "react";

import { AspectRatio } from "@chakra-ui/react";
import { Input, Heading } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Instructor.css";

const Instructor = () => {
  return (
    <>
      <div className="nav-instructor">
        <div className="first-instructor">
          <div>
            <Heading>Learn from the best in the business</Heading>
            <p>
              Our certification programs are considered the gold standard for a
              reason; Only we offer hands-on, live online sessions with product
              leaders at top tech firms including Google, Facebook, Amazon,
              Netflix and AirBnB.
            </p>
          </div>
          <div>
            {/* // This video will have equal sides */}
            <AspectRatio minW="600px" maxH="600px" ratio={1}>
              <iframe
                title="naruto"
                src="https://www.youtube.com/embed/oizE4LMjnlI?si=r1-8cfCSd9TmzBA1"
                allowFullScreen
              />
            </AspectRatio>
          </div>
        </div>
        <div className="cards">
          {/* <!-- use json server --> */}

          <Heading>Meet our instructors & speakers</Heading>
          <div className="inner-cards">
            <div className="card-items">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww"
                alt=""
              />
              <div className="inner-cards-sub-items">
                <h3>akshay goel</h3>
                <h5>head of product</h5>
                <img src="logo" alt="" />
              </div>
            </div>
            <div className="card-items">
              <img src="" alt="" />
              <h4>akshay goel</h4>
              <h5>head of product</h5>
              <img src="logo" alt="" />
            </div>
            <div className="card-items">
              <img src="" alt="" />
              <h4>akshay goel</h4>
              <h5>head of product</h5>
              <img src="logo" alt="" />
            </div>
            <div className="card-items">
              <img src="" alt="" />
              <h4>akshay goel</h4>
              <h5>head of product</h5>
              <img src="logo" alt="" />
            </div>
            <div className="card-items">
              <img src="" alt="" />
              <h4>akshay goel</h4>
              <h5>head of product</h5>
              <img src="logo" alt="" />
            </div>
            <div className="card-items">
              <img src="" alt="" />
              <h4>akshay goel</h4>
              <h5>head of product</h5>
              <img src="logo" alt="" />
            </div>
          </div>
        </div>

        <div className="third-investor-content">
          <div>
            <h2>Get certified as a Product Manager</h2>
            <p>
              Everything you need to deliver results in your first role. Because
              it’s not just about getting that first job. It’s about proving
              yourself in the first 90 days so you get to keep it.
            </p>
            <button>GET CURRICULUM</button>
          </div>
          <div>
            {/* <!-- //carousel changing every 2 sec --> */}
            <div className="carousel">
              <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item card-items active">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block inner-cards-sub-items">
                      <h5>First slide label</h5>
                      <p>
                        Some representative placeholder content for the first
                        slide.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item card-items">
                    <img src="https://plus.unsplash.com/premium_photo-1661766386981-1140b7b37193?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block  inner-cards-sub-items">
                      <h5>Second slide label</h5>
                      <p>
                        Some representative placeholder content for the second
                        slide.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item card-items">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block  inner-cards-sub-items">
                      <h5>Third slide label</h5>
                      <p>
                        Some representative placeholder content for the third
                        slide.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              
            </div>
          </div>
        </div>

        <div className="search-functionality">
          {/* <!-- search functionality --> */}
          <Heading>Find your Product Management Mentor</Heading>
          {/* <input type="text" placeholder="Search by name or company"/> */}
          <Input placeholder="Search by name or company" minW="3px" />
        </div>

        <div className="form">
          {/* <!-- use json server --> */}
          {/* <!-- pagination --> */}
          <TableContainer>
            <Table variant="simple">
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>NAME</Th>
                  <Th>HEADLINE</Th>
                  <Th isNumeric>FEATURED EXPERIENCE</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>DATA.NAME</Td>
                  <Td>DATA.HEADLINE</Td>
                  <Td isNumeric>DATA.FEATURED</Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td isNumeric>30.48</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td isNumeric>0.91444</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default Instructor;
