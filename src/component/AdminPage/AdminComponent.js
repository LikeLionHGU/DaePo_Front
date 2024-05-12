import React, { useState } from "react";
import { SlMagnifier } from "react-icons/sl";
import styled from "styled-components";

const Div = styled.div`
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const Horizontal = styled.div`
  //가로 정렬
  display: flex;
  align-items: center;
  width: 100%;
`;
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

const SlMagnifierBT = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const Th = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

const Td = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
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
  return (
    <Div>
      <p>관리자 페이지</p>
      <Horizontal>
        <button>승인대기 n 명</button>
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
            <Th>번호</Th>
            <Th>작성일</Th>
            <Th>작성자</Th>
            <Th>이메일</Th>
            <Th></Th>
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
    </Div>
  );
}

export default AdminComponent;
