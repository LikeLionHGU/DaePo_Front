import React, { useState, useEffect } from "react";
import CardComponent from "../Home/CardComponent";
import { Vertical } from "../../styles/StyledComponents";

function FilteringComponent() {
  const initialData = [
    {
      major: "시각",
      subject: "시각 캡스톤 디자인",
      year: 2017,
      tool: ["피그마", "포토샵"],
      field: "UI",
      likes: 25,
      registrationDate: "2022-03-15",
    },
    {
      major: "제품",
      subject: "서비스 디자인",
      year: 2018,
      tool: ["일러스트", "블렌더"],
      field: "UX",
      likes: 30,
      registrationDate: "2022-05-20",
    },
    {
      major: "시각",
      subject: "커뮤니케이션 디자인",
      year: 2019,
      tool: ["인디자인", "라이노"],
      field: "BRANDING",
      likes: 18,
      registrationDate: "2022-01-10",
    },
    {
      major: "시각",
      subject: "제품 및 서비스 디자인",
      year: 2020,
      tool: ["스케치", "키샷"],
      field: "ARCHITECTURE",
      likes: 35,
      registrationDate: "2022-07-05",
    },
    {
      major: "시각",
      subject: "시각 캡스톤 디자인",
      year: 2021,
      tool: ["피그마", "포토샵"],
      field: "FURNITURE",
      likes: 28,
      registrationDate: "2022-04-30",
    },
    {
      major: "제품",
      subject: "서비스 디자인",
      year: 2022,
      tool: ["일러스트", "블렌더"],
      field: "UX",
      likes: 40,
      registrationDate: "2022-10-12",
    },
    {
      major: "시각",
      subject: "커뮤니케이션 디자인",
      year: 2023,
      tool: ["인디자인", "라이노"],
      field: "FURNITURE",
      likes: 21,
      registrationDate: "2023-02-18",
    },
    {
      major: "시각",
      subject: "제품 및 서비스 디자인",
      year: 2024,
      tool: ["스케치", "키샷"],
      field: "ARCHITECTURE",
      likes: 33,
      registrationDate: "2023-08-07",
    },
    {
      major: "제품",
      subject: "시각 캡스톤 디자인",
      year: 2017,
      tool: ["피그마", "포토샵"],
      field: "UI",
      likes: 22,
      registrationDate: "2022-08-25",
    },
    {
      major: "제품",
      subject: "서비스 디자인",
      year: 2018,
      tool: ["일러스트", "블렌더"],
      field: "UX",
      likes: 27,
      registrationDate: "2022-06-14",
    },
    {
      major: "시각",
      subject: "커뮤니케이션 디자인",
      year: 2019,
      tool: ["인디자인", "라이노"],
      field: "ENVIRONMENTAL",
      likes: 17,
      registrationDate: "2021-12-02",
    },
    {
      major: "시각",
      subject: "제품 및 서비스 디자인",
      year: 2020,
      tool: ["스케치", "키샷"],
      field: "ARCHITECTURE",
      likes: 38,
      registrationDate: "2022-09-08",
    },
    {
      major: "시각",
      subject: "시각 캡스톤 디자인",
      year: 2021,
      tool: ["피그마", "포토샵"],
      field: "ENVIRONMENTAL",
      likes: 31,
      registrationDate: "2022-11-21",
    },
    {
      major: "제품",
      subject: "서비스 디자인",
      year: 2022,
      tool: ["일러스트", "블렌더"],
      field: "VEHICLE",
      likes: 45,
      registrationDate: "2023-05-16",
    },
    {
      major: "시각",
      subject: "커뮤니케이션 디자인",
      year: 2023,
      tool: ["인디자인", "라이노"],
      field: "BRANDING",
      likes: 20,
      registrationDate: "2023-01-30",
    },
    {
      major: "시각",
      subject: "제품 및 서비스 디자인",
      year: 2024,
      tool: ["스케치", "키샷"],
      field: "ARCHITECTURE",
      likes: 37,
      registrationDate: "2023-09-24",
    },
  ];

  const initialFilters = {
    major: { 시각: false, 제품: false },
    subject: {
      "시각 캡스톤 디자인": false,
      "서비스 디자인": false,
      "커뮤니케이션 디자인": false,
      "제품 및 서비스 디자인": false,
      "Capstone Design": false,
    },
    year: 0,
    tool: {
      피그마: false,
      포토샵: false,
      일러스트: false,
      블렌더: false,
      인디자인: false,
      라이노: false,
      스케치: false,
      키샷: false,
      디멘션: false,
    },
    field: "",
    searchField: "",
    sortBy: "",
    sortOrder: "desc",
  };
  const [dummyData, setDummyData] = useState(initialData);
  const [filters, setFilters] = useState(initialFilters);
  const [filteredData, setFilteredData] = useState(initialData);

  useEffect(() => {
    const newData = dummyData.filter((data) => {
      if (
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
      ) {
        return true;
      }
      return false;
    });
    setFilteredData(newData);
  }, [dummyData, filters]);

  const handleMajorChange = (e) => {
    setFilters({
      ...filters,
      major: {
        ...filters.major,
        [e.target.value]: e.target.checked,
      },
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

  const handleYearChange = (e) => {
    setFilters({
      ...filters,
      year: parseInt(e.target.value),
    });
  };

  const handleLatestSort = () => {
    const sortedData = [...filteredData].sort(
      (a, b) => new Date(b.registrationDate) - new Date(a.registrationDate)
    );
    setFilteredData(sortedData);
  };

  const handleLikesSort = () => {
    const sortedData = [...filteredData].sort((a, b) => b.likes - a.likes);
    setFilteredData(sortedData);
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

  const handleFieldChange = (e) => {
    setFilters({
      ...filters,
      field: e.target.value,
    });
  };

  const handleFieldSearch = (e) => {
    setFilters({
      ...filters,
      searchField: e.target.value,
    });
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
  const filteredCards = filteredData.map((data, index) => {
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

  const rows = [];
  for (let i = 0; i < filteredCards.length; i += 4) {
    rows.push(
      <div
        key={i / 4}
        style={{
          display: "flex",
          marginBottom: "10px",
        }}
      >
        {filteredCards.slice(i, i + 4).map((card, index) => (
          <div key={index} style={{ marginRight: "10px" }}>
            {card}
          </div>
        ))}
      </div>
    );
  }

  return (
    <Vertical>
      <div>
        <div>
          <label>전공</label>
          <br />
          <input
            type="checkbox"
            value="시각"
            onChange={handleMajorChange}
            checked={filters.major["시각"]}
          />{" "}
          시각 디자인
          <input
            type="checkbox"
            value="제품"
            onChange={handleMajorChange}
            checked={filters.major["제품"]}
          />{" "}
          제품 디자인
          <br />
        </div>
        <div>
          <br />
          <label>과목명</label>
          <br />
          <input
            type="checkbox"
            value="시각 캡스톤 디자인"
            onChange={handleSubjectChange}
            checked={filters.subject["시각 캡스톤 디자인"]}
          />{" "}
          시각 캡스톤 디자인
          <input
            type="checkbox"
            value="서비스 디자인"
            onChange={handleSubjectChange}
            checked={filters.subject["서비스 디자인"]}
          />{" "}
          서비스 디자인
          <input
            type="checkbox"
            value="커뮤니케이션 디자인"
            onChange={handleSubjectChange}
            checked={filters.subject["커뮤니케이션 디자인"]}
          />{" "}
          커뮤니케이션 디자인
          <input
            type="checkbox"
            value="제품 및 서비스 디자인"
            onChange={handleSubjectChange}
            checked={filters.subject["제품 및 서비스 디자인"]}
          />{" "}
          제품 및 서비스 디자인
          <input
            type="checkbox"
            value="Capstone Design"
            onChange={handleSubjectChange}
            checked={filters.subject["Capstone Design"]}
          />{" "}
          Capstone Design
        </div>
        <div>
          <br />
          <label>제작 연도</label>
          <br />
          <select onChange={handleYearChange} value={filters.year}>
            <option value={0}>All Years</option>
            {[...Array(2024 - 2017 + 1)].map((_, index) => (
              <option key={index} value={2017 + index}>
                {2017 + index}
              </option>
            ))}
          </select>
        </div>
        <div>
          <br />
          <label>사용 툴</label>
          <br />
          {Object.keys(filters.tool).map((tool) => (
            <React.Fragment key={tool}>
              <input
                type="checkbox"
                value={tool}
                onChange={handleToolChange}
                checked={filters.tool[tool]}
              />{" "}
              {tool}
            </React.Fragment>
          ))}
        </div>
        <div>
          <br />
          <label>분야</label>
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
          <br />
          <br />

          <input
            type="text"
            placeholder="분야 검색"
            onChange={handleFieldSearch}
            value={filters.searchField}
          />
        </div>
        <br />
        <div>
          <button onClick={handleLatestSort}>최신순</button>
          <button onClick={handleLikesSort}>좋아요순</button>
        </div>
      </div>
      {rows}
    </Vertical>
  );
}

export default FilteringComponent;
