import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AspectRatio, Input, Heading, Table, TableCaption, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer } from "@chakra-ui/react";
// import "./Instructor.css";

interface RowData {
  id: number;
  name: string;
  headline: string;
  featured: number;
}

const DataComponent: React.FC = () => {
  const [data, setData] = useState<RowData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://instrutor-api.onrender.com/instructor');
      setData(response.data);
    console.log(response.data);
    } catch (error) {
      setError('Error fetching data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <TableContainer>
          <Table variant="simple">
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            {/* <Thead>
              <Tr>
                <Th>NAME</Th>
                <Th>HEADLINE</Th>
                <Th isNumeric>FEATURED EXPERIENCE</Th>
              </Tr>
            </Thead> */}
            <Tbody>
              {data.map((item) => (
                <Tr>
                  <Td>{item.name}</Td>
                  <Td>{item.designation}</Td>
                  <Td><img src={item.logo} alt="" /></Td>
                </Tr>
              ))}
            </Tbody>
           
          </Table>
        </TableContainer>
      )}
    </>
  );
};


export default DataComponent;
