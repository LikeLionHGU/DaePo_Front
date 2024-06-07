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
  const [dataState, setDataState] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [visiblePages, setVisiblePages] = useState([]);
  const itemsPerPage = 10;

  const refreshList = () => {
    setDataState([]);
    fetch(`${process.env.REACT_APP_BASE_URL}/admin/all`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("member data", data);
        setDataState(data.posts); // 데이터 상태 업데이트
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    refreshList();
  }, []);

  const updatePostStatus = (id, newStatus) => {
    fetch(`${process.env.REACT_APP_BASE_URL}/admin/${id}`, {
      // 해당 포스트의 ID를 사용하여 요청
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ decision: newStatus }), // 상태 값을 JSON으로 전달
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // 서버에서 성공적으로 업데이트된 데이터를 받아옴
          // 클라이언트의 데이터 상태를 업데이트
          setDataState(data.posts);
        } else {
          console.error("Status update failed");
        }
      })
      .catch((error) => console.error(error))
      .finally(() => {
        refreshList();
      });
  };

  const filteredData = Array.isArray(dataState)
    ? dataState
        .filter(
          (posts) =>
            posts.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            posts.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
            posts.createdDate.includes(searchTerm)
        )
        .filter((posts) => {
          console.log("statusFilter : ", statusFilter);
          // return true;
          console.log({ a: posts.isConfirmed, b: statusFilter });
          if (statusFilter === "") return posts.isConfirmed === 0;

          return posts.isConfirmed === +statusFilter;
        })
    : [];
  console.log("filtered : ", filteredData);

  useEffect(() => {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    console.log("Total pages:", totalPages);
    setVisiblePages(
      Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i)
    );
  }, [filteredData.length]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    console.log("Search term:", e.target.value);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
    console.log("Current page:", page);
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
    console.log("Loaded more pages:", newVisiblePages);
  };

  const paginateData = () => {
    const offset = currentPage * itemsPerPage;
    const paginated = filteredData.slice(offset, offset + itemsPerPage);
    console.log("Paginated data:", paginated);
    return paginated;
  };

  const handleStatusChange = (id, newStatus) => {
    // 서버에 상태 변경을 요청합니다.

    updatePostStatus(id, newStatus);
    console.log(`Status changed for ID ${id} to ${newStatus}`);
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const isLoadMoreVisible =
    visiblePages[visiblePages.length - 1] < totalPages - 1;

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
    console.log("Status filter:", e.target.value);
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
                    <option value="1">승인</option>
                    <option value="2">미승인</option>
                  </Dropdown>
                </Th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((posts) => (
                <TableRow key={posts.id}>
                  <Tdid>{posts.id}</Tdid>
                  <Td>{posts.createdDate}</Td>
                  <Td>{posts.userName}</Td>
                  <Td>{posts.contact}</Td>
                  <Td>
                    <StatusButton
                      isActive={posts.isConfirmed === 1}
                      onClick={() => handleStatusChange(posts.id, 1)}
                    >
                      승인
                    </StatusButton>
                    <StatusButton
                      isActive={posts.isConfirmed === 2}
                      onClick={() => handleStatusChange(posts.id, 2)}
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
                active={page === currentPage}
                onClick={() => handlePageClick(page)}
              >
                {page + 1}
              </PageButton>
            ))}
            {isLoadMoreVisible && (
              <LoadMoreButton onClick={handleLoadMore}>더보기</LoadMoreButton>
            )}
          </PaginationContainer>
        </Div>
      </Vertical>
    </ThemeProvider>
  );
}

export default AdminComponent;
