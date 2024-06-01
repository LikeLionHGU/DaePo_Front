import React, { useState } from "react";
import { SlMagnifier } from "react-icons/sl";
import { LiaSortSolid } from "react-icons/lia";
import styled, { ThemeProvider } from "styled-components";
import { Vertical, Horizontal } from "../../styles/StyledComponents";

// 테마 객체 생성
const theme = {
  colors: {
    grey5: "#f0f0f0",
    grey1: "#333",
    orange: "#F8CA99",
  },
  fontSize: {
    body02: "1rem",
  },
  fontWeight: {
    regular: "400",
    bold: "700",
  },
  lineHeight: {
    lh20: "1.5",
  },
};

// ToggleButton Component
const ToggleButton = ({ latestSort, toggleHandler }) => {
  return (
    <div>
      <CheckBox type="checkbox" id="toggleBtn" onChange={toggleHandler} />
      <ButtonLabel htmlFor="toggleBtn" latestSort={latestSort}>
        <Switch latestSort={latestSort} />
      </ButtonLabel>
    </div>
  );
};

// 스타일된 컴포넌트 생성
const CheckBox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const ButtonLabel = styled.label`
  z-index: 10;
  width: 12rem;
  height: 3rem;
  border-radius: 2em;
  background-color: ${(props) => props.theme.colors.grey5};
  position: relative;
  cursor: pointer;

  ::before {
    display: flex;
    position: absolute;
    content: "";
    padding-left: 1em;
    justify-content: flex-start;
    align-items: center;
    width: 10rem;
    height: 3rem;
    transition: all 0.2s ease-in-out;
    border-radius: 2em;
    background-color: rgba(217, 217, 217, 0.3);
  }

  ::after {
    display: flex;
    position: absolute;
    content: "승인 완료";
    width: 6rem;
    height: 3rem;
    justify-content: center;
    align-items: center;
    left: 6rem;
    border-radius: 2em;
    background-color: #e5e5e5;
    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.16);
    transition: all 0.2s ease-in-out;
  }

  ${(props) =>
    props.latestSort &&
    `
    ::before {
      padding-right: 1em;
      content: '';
      justify-content: flex-end;
    }
    ::after {
      left: 0;
      content: '승인 대기';
      background-color: #F8CA99;
    }
  `}
`;
const Switch = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  width: 18px;
  height: 18px;
  transition: all 0.3s;
  transform: ${(props) =>
    props.latestSort ? "translateX(20px)" : "translateX(0)"};
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
  width: 80%;
  margin-top: 50px;
`;

const Th = styled.th`
  border: 1px solid #dddddd;
  text-align: center;
  height: 100px;
`;

const Td = styled.td`
  border: 1px solid #dddddd;
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
  {
    id: 6,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 7,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 8,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 9,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 10,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 11,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
];

function AdminComponent() {
  const [dataState, setDataState] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [latestSort, setLatestSort] = useState(true);

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
      setDataState([...dataState].reverse());
    } else {
      setDataState([...dataState].sort((a, b) => (a[key] > b[key] ? 1 : -1)));
      setSortBy(key);
    }
  };

  const toggleHandler = () => {
    setLatestSort((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <Vertical>
        <Horizontal style={{ justifyContent: "space-between", width: "80%" }}>
          <ToggleButton latestSort={latestSort} toggleHandler={toggleHandler} />
          <SearchSpace>
            <SearchInput
              placeholder="작성자 이름, 이메일, 작성일로 검색"
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
                    onChange={(e) =>
                      handleStatusChange(item.id, e.target.value)
                    }
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
    </ThemeProvider>
  );
}

export default AdminComponent;
