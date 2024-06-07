import React, { useState, useEffect } from "react";
import CardComponent from "../Home/CardComponent";
import styled from "styled-components";

const Vertical = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const FilterContainer = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 150px;
  margin-top: 30px;
  max-width: 200px;
  position: sticky;
  top: 0px;
`;

const FilterSection = styled.div`
  margin-bottom: 20px;
`;

const FilteredCardsContainer = styled.div`
  flex: 4;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 30px;
`;

const Title = styled.div`
  font-family: "AUTHENTICSans";
  font-weight: bold;
  font-size: 18px;
`;

const SubTitle = styled.div`
  color: ${(props) => (props.checked ? "black" : "rgba(0, 0, 0, 0.2)")};
`;

const CheckContainer = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const Check = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 20px;
  height: 20px;
  background-color: ${(props) => (props.checked ? "#ee7b00" : "white")};
  border: 2px solid #ee7b00;
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  margin-right: 10px;

  &:checked {
    background-color: #ee7b00;
  }

  &:checked::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

const Line = styled.div`
  border-top: 1px solid #444444;
  margin: 30px 0px;
  border-color: rgba(0, 0, 0, 0.2);
`;

const YearSelectorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const YearButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 24px;
  cursor: pointer;
  color: ${(props) => (props.disabled ? "#d3d3d3" : "#d66f00")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const YearDisplay = styled.div`
  width: 80px;
  text-align: center;
  font-size: 18px;
  font-family: "AUTHENTICSans";
  font-weight: 1300;
  font-size: 18px;
  padding: 5px;
  color: black;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  margin-bottom: 60px;
  height: 40px;
`;

const PageButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  background-color: white;
  color: ${(props) => (props.active ? "#d66f00" : "black")};
  border: 1px solid white;
  cursor: pointer;
  font-family: "AUTHENTICSans";
  font-weight: bold;
  font-size: 20px;
  &:hover {
    color: #d66f00;
  }
`;

const LoadMoreButton = styled.button`
  padding: 5px 10px;
  background-color: white;
  color: ${(props) => (props.active ? "#d66f00" : "black")};
  border: 1px solid white;
  cursor: pointer;
  font-family: "AUTHENTICSans";
  font-weight: bold;
  font-size: 8px;

  &:hover {
    color: #d66f00;
  }
`;

function FilteringComponent() {
  const [cardData, setCardData] = useState([]);
  const initialFilters = {
    major: { 시각디자인: false, 제품디자인: false },
    subject: {
      "서비스 디자인": false,
      "커뮤니케이션 디자인": false,
      "제품 및 서비스 디자인": false,
    },
    year: new Date().getFullYear(),
    allYears: true,
    tool: {
      포토샵: false,
      일러스트: false,
      인디자인: false,
      블렌더: false,
      라이노: false,
      스케치: false,
      프리미엄프로: false,
      애프터이팩트: false,
      피그마: false,
    },
    field: "",
    searchField: "",
    sortBy: "",
    sortOrder: "desc",
  };

  const [cards, setCards] = useState([]);

  const [filters, setFilters] = useState(initialFilters);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [visiblePages, setVisiblePages] = useState([0]);

  useEffect(() => {
    // filteredData가 업데이트될 때마다 visiblePages도 업데이트됩니다.
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const newVisiblePages = Array.from(
      { length: Math.min(totalPages, 5) },
      (_, i) => i
    );
    setVisiblePages(newVisiblePages.filter((page) => page < totalPages));
  }, [filteredData]);

  const handleLoadMore = () => {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const lastVisiblePage = visiblePages[visiblePages.length - 1];
    const newVisiblePages = Array.from(
      { length: Math.min(totalPages - lastVisiblePage, 5) },
      (_, i) => lastVisiblePage + i + 1
    ).filter((page) => page < totalPages);
    setVisiblePages((prevVisiblePages) => [
      ...prevVisiblePages,
      ...newVisiblePages,
    ]);
  };

  const itemsPerPage = 24;
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/posts/main`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched card data:", data);
        setCardData(data.posts); // 초기 데이터 설정
        setFilteredData(applyFilters(data.posts, filters)); // 필터링 적용
      })
      .catch((error) => console.error("Error fetching card data:", error));
  }, [filters]);

  const applyFilters = (data, filters) => {
    let filteredData = [...data];

    // 전공 필터 적용
    if (filters.major["시각디자인"] || filters.major["제품디자인"]) {
      filteredData = filteredData.filter((post) => {
        if (filters.major["시각디자인"] && post.major === "시각디자인") {
          return true;
        }
        if (filters.major["제품디자인"] && post.major === "제품디자인") {
          return true;
        }
        return false;
      });
    }

    // 과목명 필터 적용
    filteredData = filteredData.filter((post) => {
      const subject = post.category;
      if (Object.keys(filters.subject).some((key) => filters.subject[key])) {
        return filters.subject[subject];
      }
      return true;
    });

    // 제작 연도 필터 적용
    if (!filters.allYears) {
      filteredData = filteredData.filter((post) => {
        const postYear = new Date(post.year).getFullYear();
        return postYear === filters.year;
      });
    }

    // 사용 툴 필터 적용
    filteredData = filteredData.filter((post) => {
      const tools = post.tools;
      const selectedTools = Object.keys(filters.tool).filter(
        (tool) => filters.tool[tool]
      );
      if (selectedTools.length > 0) {
        const hasAllTools = selectedTools.every((tool) => tools.includes(tool));
        return hasAllTools;
      }
      return true;
    });

    // 분야 필터 적용
    filteredData = filteredData.filter((post) => {
      const field = post.field;
      if (filters.field && filters.field !== "") {
        return field === filters.field;
      }
      return true;
    });

    return filteredData;
  };

  const handleMajorChange = (e) => {
    const { value, checked } = e.target;
    setFilters((prevFilters) => {
      const updatedMajor = {
        ...prevFilters.major,
        [value]: checked,
      };
      return {
        ...prevFilters,
        major: updatedMajor,
      };
    });
  };

  const handleSubjectChange = (e) => {
    setFilters({
      ...filters,
      subject: {
        ...filters.subject,
        [e.target.value]: e.target.checked,
      },
    });
  };

  const currentYear = new Date().getFullYear();
  const maxYear = 2024;

  const handleYearChange = (newYear) => {
    if (newYear <= currentYear) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        year: newYear,
        allYears: false,
      }));
    } else if (newYear === currentYear + 1) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        year: newYear,
        allYears: true,
      }));
    }
  };

  const handleToolChange = (e) => {
    setFilters({
      ...filters,
      tool: {
        ...filters.tool,
        [e.target.value]: e.target.checked,
      },
    });
  };

  const fillEmptySlots = (data) => {
    const remainingSlots = 24 - data.length;
    if (remainingSlots > 0) {
      const emptySlots = Array.from({ length: remainingSlots }).fill(null);
      return [...data, ...emptySlots];
    }
    return data;
  };

  const handleFieldChange = (e) => {
    setFilters({
      ...filters,
      field: e.target.value,
    });
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  // const cardImages = [
  //   require("../../img/p1.png"),
  //   require("../../img/p2.png"),
  //   require("../../img/p3.png"),
  //   require("../../img/p4.png"),
  //   require("../../img/p5.png"),
  //   require("../../img/p6.png"),
  //   require("../../img/duck1.png"),
  //   require("../../img/duck2.png"),
  //   require("../../img/duck3.png"),
  //   require("../../img/duck4.png"),
  //   require("../../img/duck5.png"),
  //   require("../../img/duck6.png"),
  //   require("../../img/duck7.png"),
  //   require("../../img/duck8.png"),
  //   require("../../img/CardComponent.png"),
  //   require("../../img/p8.png"),
  // ];

  const offset = currentPage * itemsPerPage;
  const currentData = filteredData.slice(offset, offset + itemsPerPage);

  const filteredCards = fillEmptySlots(currentData).map((post, index) => {
    if (!post) {
      return (
        <div key={index} style={{ width: "250px", height: "250px" }}></div>
      );
    }
    const cardImageIndex = cardData.findIndex((item) => item === post);
    // 선택된 전공에 해당하는 데이터만 필터링하여 표시합니다.
    if (
      (filters.major["시각디자인"] && post.major === "시각디자인") ||
      (filters.major["제품디자인"] && post.major === "제품디자인") ||
      filters
    ) {
      return (
        <React.Fragment key={index}>
          <CardComponent
            post={post}
            // major={post.major}
            // subject={post.category}
            // year={post.year}
            // tool={post.tools.join(", ")}
            // likes={post.likeCount}
            // registrationDate={post.createdDate}
            // imageSrc={post.images[0].imageURL}
          />
        </React.Fragment>
      );
    } else {
      return null; // 선택된 전공에 해당하지 않는 경우 null을 반환하여 표시하지 않습니다.
    }
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const isLoadMoreVisible =
    visiblePages[visiblePages.length - 1] < totalPages - 1;

  return (
    <>
      <Vertical>
        <FilterContainer>
          <FilterSection>
            <Title>전공</Title>
            <br />
            <CheckContainer>
              <Check
                type="checkbox"
                value="시각디자인"
                onChange={handleMajorChange}
                checked={filters.major["시각디자인"]}
              />
              <SubTitle checked={filters.major["시각디자인"]}>
                시각 디자인
              </SubTitle>
            </CheckContainer>
            <CheckContainer>
              <Check
                type="checkbox"
                value="제품디자인"
                onChange={handleMajorChange}
                checked={filters.major["제품디자인"]}
              />
              <SubTitle checked={filters.major["제품디자인"]}>
                제품 디자인
              </SubTitle>
            </CheckContainer>
          </FilterSection>
          <Line className="jb-division-line"></Line>
          <FilterSection>
            <Title>과목명</Title>
            <br />
            {(filters.major["시각디자인"] ||
              (!filters.major["시각디자인"] &&
                !filters.major["제품디자인"])) && (
              <>
                <CheckContainer>
                  <Check
                    type="checkbox"
                    value="서비스 디자인"
                    onChange={handleSubjectChange}
                    checked={filters.subject["서비스 디자인"]}
                  />
                  <SubTitle checked={filters.subject["서비스 디자인"]}>
                    서비스 디자인
                  </SubTitle>
                </CheckContainer>
                <CheckContainer>
                  <Check
                    type="checkbox"
                    value="커뮤니케이션 디자인"
                    onChange={handleSubjectChange}
                    checked={filters.subject["커뮤니케이션 디자인"]}
                  />
                  <SubTitle checked={filters.subject["커뮤니케이션 디자인"]}>
                    커뮤니케이션 디자인
                  </SubTitle>
                </CheckContainer>
              </>
            )}
            {(filters.major["제품디자인"] ||
              (!filters.major["시각디자인"] &&
                !filters.major["제품디자인"])) && (
              <CheckContainer>
                <Check
                  type="checkbox"
                  value="제품 및 서비스 디자인"
                  onChange={handleSubjectChange}
                  checked={filters.subject["제품 및 서비스 디자인"]}
                />
                <SubTitle checked={filters.subject["제품 및 서비스 디자인"]}>
                  제품 및 서비스 디자인
                </SubTitle>
              </CheckContainer>
            )}
          </FilterSection>
          <Line className="jb-division-line"></Line>
          <FilterSection>
            <Title>제작 연도</Title>
            <br />
            <YearSelectorContainer>
              <YearButton onClick={() => handleYearChange(filters.year - 1)}>
                {"<"}
              </YearButton>
              <YearDisplay allYears={filters.allYears}>
                {filters.allYears ? "All" : filters.year}
              </YearDisplay>
              <YearButton
                onClick={() => handleYearChange(filters.year + 1)}
                disabled={filters.allYears}
              >
                {">"}
              </YearButton>
            </YearSelectorContainer>
          </FilterSection>
          <Line className="jb-division-line"></Line>
          <FilterSection>
            <Title>사용 툴</Title>
            <br />
            {Object.keys(filters.tool).map((tool) => (
              <CheckContainer key={tool}>
                <Check
                  type="checkbox"
                  value={tool}
                  onChange={handleToolChange}
                  checked={filters.tool[tool]}
                />
                <SubTitle checked={filters.tool[tool]}>{tool}</SubTitle>
              </CheckContainer>
            ))}
          </FilterSection>
          <Line className="jb-division-line"></Line>
          <FilterSection>
            <Title>분야</Title>
            <br />
            <select onChange={handleFieldChange} value={filters.field}>
              <option value="">All Fields</option>
              <option value="UI">UI</option>
              <option value="UX">UX</option>
              <option value="BRANDING">BRANDING</option>
              <option value="ARCHITECTURE">ARCHITECTURE</option>
              <option value="VEHICLE">VEHICLE</option>
              <option value="FURNITURE">FURNITURE</option>
              <option value="ENVIRONMENTAL">ENVIRONMENTAL</option>
            </select>
          </FilterSection>
          <Line className="jb-division-line"></Line>
        </FilterContainer>
        <FilteredCardsContainer>{filteredCards}</FilteredCardsContainer>
      </Vertical>
      <PaginationContainer>
        {visiblePages.map((page) => (
          <PageButton
            key={page}
            onClick={() => handlePageClick(page)}
            active={page === currentPage}
          >
            {page + 1}
          </PageButton>
        ))}
        {isLoadMoreVisible && (
          <LoadMoreButton onClick={handleLoadMore}>■ ■ ■</LoadMoreButton>
        )}
      </PaginationContainer>
    </>
  );
}

export default FilteringComponent;
