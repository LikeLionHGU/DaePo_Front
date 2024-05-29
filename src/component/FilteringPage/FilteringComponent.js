import React, { useState, useEffect } from "react";
import CardComponent from "../Home/CardComponent";
import styled from "styled-components";
import initialData from "./dummyData";

const Vertical = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; /* 가로 가운데 정렬 */
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

  color: #d66f00;
`;

const YearDisplay = styled.div`
  width: 80px;
  text-align: center;
  font-size: 18px;
  font-family: "AUTHENTICSans";
  font-weight: 1300;
  font-size: 18px;
  padding: 5px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  margin-bottom: 60px;
  height: 40px; /* 페이징 컨테이너의 높이를 설정합니다. */
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
  const initialFilters = {
    major: { 시각: false, 제품: false },
    subject: {
      "시각 캡스톤 디자인": false,
      "서비스 디자인": false,
      "커뮤니케이션 디자인": false,
      "제품 및 서비스 디자인": false,
      "Capstone Design": false,
    },
    year: new Date().getFullYear(),
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

  const [dummyData, setDummyData] = useState(initialData);
  const [filters, setFilters] = useState(initialFilters);
  const [filteredData, setFilteredData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(0);

  const [visiblePages, setVisiblePages] = useState([0]); // 초기에 첫 번째 페이지만 보이도록 설정

  useEffect(() => {
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
      { length: Math.min(totalPages - lastVisiblePage, 5) }, // 최대 5개의 페이지를 추가합니다.
      (_, i) => lastVisiblePage + i + 1
    ).filter((page) => page < totalPages); // 총 페이지 수를 넘어가지 않는 페이지만 보여줍니다.
    setVisiblePages((prevVisiblePages) => [
      ...prevVisiblePages,
      ...newVisiblePages,
    ]);
  };

  const itemsPerPage = 24; // 페이지당 24개의 아이템

  useEffect(() => {
    const newData = dummyData.filter((data) => {
      return (
        (filters.major[data.major] ||
          Object.values(filters.major).every((value) => !value)) &&
        (filters.subject[data.subject] ||
          Object.values(filters.subject).every((value) => !value)) &&
        (filters.year === 0 || data.year === filters.year) &&
        (filters.tool[data.tool[0]] ||
          filters.tool[data.tool[1]] ||
          Object.values(filters.tool).every((value) => !value)) &&
        (filters.field === "" || data.field === filters.field) &&
        (filters.searchField === "" ||
          data.field.toLowerCase().includes(filters.searchField.toLowerCase()))
      );
    });
    setFilteredData(newData);
  }, [dummyData, filters]);

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

  const handleYearChange = (newYear) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      year: newYear,
    }));
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

  const cardImages = [
    require("../../img/p1.png"),
    require("../../img/p2.png"),
    require("../../img/p3.png"),
    require("../../img/p4.png"),
    require("../../img/p5.png"),
    require("../../img/p6.png"),
    require("../../img/duck1.png"),
    require("../../img/duck2.png"),
    require("../../img/duck3.png"),
    require("../../img/duck4.png"),
    require("../../img/duck5.png"),
    require("../../img/duck6.png"),
    require("../../img/duck7.png"),
    require("../../img/duck8.png"),
    require("../../img/CardComponent.png"),
    require("../../img/p8.png"),
  ];

  const offset = currentPage * itemsPerPage;
  const currentData = filteredData.slice(offset, offset + itemsPerPage);

  const filteredCards = fillEmptySlots(currentData).map((data, index) => {
    if (!data) {
      return (
        <div key={index} style={{ width: "250px", height: "250px" }}></div>
      );
    }
    const cardImageIndex = dummyData.findIndex((item) => item === data);
    return (
      <CardComponent
        key={index}
        id={index}
        major={data.major}
        subject={data.subject}
        year={data.year}
        tool={data.tool.join(", ")}
        likes={data.likes}
        registrationDate={data.registrationDate}
        imageSrc={cardImages[cardImageIndex % cardImages.length]}
      />
    );
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
                value="시각"
                onChange={handleMajorChange}
                checked={filters.major["시각"]}
              />
              <SubTitle checked={filters.major["시각"]}>시각 디자인</SubTitle>
            </CheckContainer>
            <CheckContainer>
              <Check
                type="checkbox"
                value="제품"
                onChange={handleMajorChange}
                checked={filters.major["제품"]}
              />
              <SubTitle checked={filters.major["제품"]}>제품 디자인</SubTitle>
            </CheckContainer>
          </FilterSection>
          <Line className="jb-division-line"></Line>
          <FilterSection>
            <Title>과목명</Title>
            <br />
            {(filters.major["시각"] ||
              (!filters.major["시각"] && !filters.major["제품"])) && (
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
            {(filters.major["제품"] ||
              (!filters.major["시각"] && !filters.major["제허다"])) && (
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
              <YearDisplay>{filters.year}</YearDisplay>
              <YearButton onClick={() => handleYearChange(filters.year + 1)}>
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
