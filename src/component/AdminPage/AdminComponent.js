import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { SlMagnifier } from "react-icons/sl";
import {
  Vertical,
  Horizontal,
  themeColors,
} from "../../styles/StyledComponents";

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

const initialData = [
  {
    id: 1,
    date: "2024-05-01",
    author: "이한나",
    email: "22100595@handong.ac.kr",
    status: "",
  },
  {
    id: 2,
    date: "2024-05-02",
    author: "이지광",
    email: "22100110@handong.ac.kr",
    status: "",
  },
  {
    id: 3,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "",
  },
  {
    id: 4,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "",
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
  {
    id: 12,
    date: "2024-05-01",
    author: "이한나",
    email: "22100595@handong.ac.kr",
    status: "승인",
  },
  {
    id: 13,
    date: "2024-05-02",
    author: "이지광",
    email: "22100110@handong.ac.kr",
    status: "승인",
  },
  {
    id: 14,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 15,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 16,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 17,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 18,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 19,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 20,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "승인",
  },
  {
    id: 21,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "승인",
  },
  {
    id: 22,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "승인",
  },
  {
    id: 23,
    date: "2024-05-01",
    author: "이한나",
    email: "22100595@handong.ac.kr",
    status: "승인",
  },
  {
    id: 24,
    date: "2024-05-02",
    author: "이지광",
    email: "22100110@handong.ac.kr",
    status: "승인",
  },
  {
    id: 25,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 26,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 27,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 28,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 29,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 30,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 31,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 32,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 33,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 34,
    date: "2024-05-01",
    author: "이한나",
    email: "22100595@handong.ac.kr",
    status: "승인",
  },
  {
    id: 35,
    date: "2024-05-02",
    author: "이지광",
    email: "22100110@handong.ac.kr",
    status: "승인",
  },
  {
    id: 36,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 37,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 38,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 39,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 40,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 41,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 42,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "승인",
  },
  {
    id: 43,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "승인",
  },
  {
    id: 44,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "승인",
  },
  {
    id: 45,
    date: "2024-05-01",
    author: "이한나",
    email: "22100595@handong.ac.kr",
    status: "승인",
  },
  {
    id: 46,
    date: "2024-05-02",
    author: "이지광",
    email: "22100110@handong.ac.kr",
    status: "승인",
  },
  {
    id: 47,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 48,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 49,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 50,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 51,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 52,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 53,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 54,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 55,
    date: "2024-05-03",
    author: "김하영",
    email: "22300079@handong.ac.kr",
    status: "미승인",
  },
  {
    id: 56,
    date: "2024-05-01",
    author: "이한나",
    email: "22100595@handong.ac.kr",
    status: "승인",
  },
];

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  margin-bottom: 60px;
  height: 40px;
`;

const Div = styled.div`
  width: 92%;
`;

const PageButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  background-color: white;
  color: ${(props) =>
    props.active ? `${themeColors.ARROWCOLOR.color}` : "black"};
  border: 1px solid white;
  cursor: pointer;
  font-family: "AUTHENTICSans";
  font-weight: bold;
  font-size: 20px;
  &:hover {
    color: ${themeColors.ARROWCOLOR.color};
  }
`;

const LoadMoreButton = styled.button`
  padding: 5px 10px;
  background-color: white;
  color: ${(props) =>
    props.active ? `${themeColors.ARROWCOLOR.color}` : "black"};
  border: 1px solid white;
  cursor: pointer;
  font-family: "AUTHENTICSans";
  font-weight: bold;
  font-size: 8px;

  &:hover {
    color: ${themeColors.ARROWCOLOR.color};
  }
`;

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

const Table = styled.table`
  border-color: white;
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
`;

const Th = styled.th`
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #dddddd;
  text-align: center;
  padding: 15px 20px;
  font-weight: bold;
  font-size: 1rem;
  color: #333;
  cursor: pointer;
`;

const Tdid = styled.td`
  border-color: white;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #dddddd;
  text-align: center;
  padding: 10px;
  color: ${themeColors.MAINCOLOR.color};
  font-weight: bold;
  font-size: 20px;
`;

const Td = styled.td`
  border-color: white;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #dddddd;
  text-align: center;
  padding: 10px;
  color: #666;
`;

const TableRow = styled.tr`
  &:hover {
    background-color: #f9f9f9;
  }
`;

const StatusButton = styled.button`
  padding: 6px 12px;
  border-radius: 12px;
  border: none;
  margin: 0 5px;
  background-color: ${(props) => (props.isActive ? "#DBB5EE" : "#dddddd")};
  color: ${(props) => (props.isActive ? "black" : "black")};
  cursor: pointer;

  &:hover {
    background-color: #dbb5ee;
    color: black;
  }
`;

const Dropdown = styled.select`
  width: 150px;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-left: 20px;
  font-size: 16px;
`;

function AdminComponent() {
  const [dataState, setDataState] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [visiblePages, setVisiblePages] = useState([]);

  const itemsPerPage = 10;

  const filteredData = dataState
    .filter(
      (item) =>
        item.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.date.includes(searchTerm)
    )
    .filter((item) => {
      if (statusFilter === "대기") return item.status === "";

      return item.status === statusFilter;
    });

  useEffect(() => {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    setVisiblePages(
      Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i)
    );
  }, [filteredData.length]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleLoadMore = () => {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const lastVisiblePage = visiblePages[visiblePages.length - 1];
    const newVisiblePages = Array.from(
      { length: Math.min(totalPages - lastVisiblePage - 1, 5) },
      (_, i) => lastVisiblePage + i + 1
    );
    setVisiblePages((prevVisiblePages) => [
      ...prevVisiblePages,
      ...newVisiblePages,
    ]);
  };

  const paginateData = () => {
    const offset = currentPage * itemsPerPage;
    return filteredData.slice(offset, offset + itemsPerPage);
  };

  const handleStatusChange = (id, newStatus) => {
    setDataState((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const isLoadMoreVisible =
    visiblePages[visiblePages.length - 1] < totalPages - 1;

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Vertical>
        <Div>
          <Horizontal
            style={{ justifyContent: "space-between", width: "100%" }}
          >
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
                <Th>번호</Th>
                <Th>작성일</Th>
                <Th>작성자</Th>
                <Th>이메일</Th>
                <Th>
                  <Dropdown
                    value={statusFilter}
                    onChange={handleStatusFilterChange}
                  >
                    <option value="">대기</option>
                    <option value="승인">승인</option>
                    <option value="미승인">미승인</option>
                  </Dropdown>
                </Th>
              </tr>
            </thead>
            <tbody>
              {paginateData().map((item) => (
                <TableRow key={item.id}>
                  <Tdid>{item.id}</Tdid>
                  <Td>{item.date}</Td>
                  <Td>{item.author}</Td>
                  <Td>{item.email}</Td>
                  <Td>
                    <StatusButton
                      isActive={item.status === "승인"}
                      onClick={() => handleStatusChange(item.id, "승인")}
                    >
                      승인
                    </StatusButton>
                    <StatusButton
                      isActive={item.status === "미승인"}
                      onClick={() => handleStatusChange(item.id, "미승인")}
                    >
                      미승인
                    </StatusButton>
                  </Td>
                </TableRow>
              ))}
            </tbody>
          </Table>
          <PaginationContainer>
            {visiblePages.map((page) => (
              <PageButton
                key={page}
                active={currentPage === page}
                onClick={() => handlePageClick(page)}
              >
                {page + 1}
              </PageButton>
            ))}
            {isLoadMoreVisible && (
              <LoadMoreButton onClick={handleLoadMore}>■ ■ ■</LoadMoreButton>
            )}
          </PaginationContainer>
        </Div>
      </Vertical>
    </ThemeProvider>
  );
}

export default AdminComponent;
