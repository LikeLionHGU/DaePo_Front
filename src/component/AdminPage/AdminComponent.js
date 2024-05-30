import React, { useState } from "react";
import { SlMagnifier } from "react-icons/sl";
import { LiaSortSolid } from "react-icons/lia";

import styled from "styled-components";
import { Vertical, Horizontal } from "../../styles/StyledComponents";

const SearchSpace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 50px;
  border-radius: 50px;
  border: solid 1px;
`;

const SearchInput = styled.input`
  width: 85%;
  height: 90%;
  border: none;
  outline: none;
`;
const WaitBT = styled.button`
  border: none;
  border-radius: 52px;
  width: 200px;
  height: 70px;
  background-color: rgba(238, 123, 0, 0.4);
  color: black;
  cursor: pointer;
  font-size: 30px;
`;
const SlMagnifierBT = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
const Table = styled.table`
  border-collapse: collapse;
  width: 80%;
  margin-top: 50px;
`;

const Th = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  text-align: center;
  height: 100px;
`;

const Td = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  text-align: center;
  height: 50px;
`;
const data = [
  {
    id: 1,
    date: "2024-05-01",
    author: "이한나",
    email: "22100595@handong.ac.kr",
    status: "승인",
  },
  {
    id: 2,
    date: "2024-05-02",
    author: "이지광",
    email: "22100110@handong.ac.kr",
    status: "승인",
  },
  {
    id: 3,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 4,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 5,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
];

function AdminComponent() {
  const [dataState, setDataState] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = dataState.filter((item) => {
    return (
      item.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.date.includes(searchTerm)
    );
  });

  const handleStatusChange = (id, newStatus) => {
    setDataState((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  const [sortBy, setSortBy] = useState(null);

  const handleHeaderClick = (key) => {
    if (sortBy === key) {
      // If already sorted by this key, reverse the order
      setDataState([...dataState].reverse());
    } else {
      // Sort the data by the clicked key
      setDataState([...dataState].sort((a, b) => (a[key] > b[key] ? 1 : -1)));
      setSortBy(key);
    }
  };

  return (
    <Vertical>
      <Horizontal style={{ justifyContent: "space-between", width: "80%" }}>
        <WaitBT>승인대기 n</WaitBT>
        <SearchSpace>
          <SearchInput
            placeholder="작성자 이름, 이메일, 작성일로  검색"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <SlMagnifierBT>
            <SlMagnifier style={{ width: "30px" }} />
          </SlMagnifierBT>
        </SearchSpace>
      </Horizontal>
      <Table>
        <thead>
          <tr>
            <Th onClick={() => handleHeaderClick("id")}>
              번호
              <LiaSortSolid />
            </Th>
            <Th onClick={() => handleHeaderClick("date")}>
              작성일
              <LiaSortSolid />
            </Th>
            <Th onClick={() => handleHeaderClick("author")}>
              작성자
              <LiaSortSolid />
            </Th>
            <Th onClick={() => handleHeaderClick("email")}>
              이메일
              <LiaSortSolid />
            </Th>
            <Th>승인 여부</Th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <Td>{item.id}</Td>
              <Td>{item.date}</Td>
              <Td>{item.author}</Td>
              <Td>{item.email}</Td>
              <Td>
                <select
                  value={item.status}
                  onChange={(e) => handleStatusChange(item.id, e.target.value)}
                >
                  <option value="승인">승인</option>
                  <option value="미승인">미승인</option>
                </select>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Vertical>
  );
}

export default AdminComponent;
