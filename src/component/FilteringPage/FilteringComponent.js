import React, { useState } from "react";
import CardComponent from "../Home/CardComponent";

function FilteringComponent() {
  const dummyData = [
    {
      major: "시각",
      subject: "시각 캡스톤 디자인",
      year: 2017,
      tool: ["피그마", "포토샵"],
      field: "UI",
    },
    {
      major: "제품",
      subject: "서비스 디자인",
      year: 2018,
      tool: ["일러스트", "블렌더"],
      field: "UX",
    },
    {
      major: "시각",
      subject: "커뮤니케이션 디자인",
      year: 2019,
      tool: ["인디자인", "라이노"],
      field: "BRANDING",
    },
    {
      major: "시각",
      subject: "제품 및 서비스 디자인",
      year: 2020,
      tool: ["스케치", "키샷"],
      field: "ARCHITECTURE",
    },
    {
      major: "시각",
      subject: "시각 캡스톤 디자인",
      year: 2021,
      tool: ["피그마", "포토샵"],
      field: "FURNITURE",
    },
    {
      major: "제품",
      subject: "서비스 디자인",
      year: 2022,
      tool: ["일러스트", "블렌더"],
      field: "UX",
    },
    {
      major: "시각",
      subject: "커뮤니케이션 디자인",
      year: 2023,
      tool: ["인디자인", "라이노"],
      field: "FURNITURE",
    },
    {
      major: "시각",
      subject: "제품 및 서비스 디자인",
      year: 2024,
      tool: ["스케치", "키샷"],
      field: "ARCHITECTURE",
    },
    {
      major: "제품",
      subject: "시각 캡스톤 디자인",
      year: 2017,
      tool: ["피그마", "포토샵"],
      field: "UI",
    },
    {
      major: "제품",
      subject: "서비스 디자인",
      year: 2018,
      tool: ["일러스트", "블렌더"],
      field: "UX",
    },
    {
      major: "시각",
      subject: "커뮤니케이션 디자인",
      year: 2019,
      tool: ["인디자인", "라이노"],
      field: "ENVIRONMENTAL",
    },
    {
      major: "시각",
      subject: "제품 및 서비스 디자인",
      year: 2020,
      tool: ["스케치", "키샷"],
      field: "ARCHITECTURE",
    },
    {
      major: "시각",
      subject: "시각 캡스톤 디자인",
      year: 2021,
      tool: ["피그마", "포토샵"],
      field: "ENVIRONMENTAL",
    },
    {
      major: "제품",
      subject: "서비스 디자인",
      year: 2022,
      tool: ["일러스트", "블렌더"],
      field: "VEHICLE",
    },
    {
      major: "시각",
      subject: "커뮤니케이션 디자인",
      year: 2023,
      tool: ["인디자인", "라이노"],
      field: "BRANDING",
    },
    {
      major: "시각",
      subject: "제품 및 서비스 디자인",
      year: 2024,
      tool: ["스케치", "키샷"],
      field: "ARCHITECTURE",
    },
  ];

  const [filters, setFilters] = useState({
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
  });

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

  const filteredData = dummyData.filter((data) => {
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

  const cards = filteredData.map((data, index) => (
    <CardComponent
      key={index}
      id={index}
      major={data.major}
      subject={data.subject}
      year={data.year}
      tool={data.tool.join(", ")}
    />
  ));

  const rows = [];
  for (let i = 0; i < cards.length; i += 4) {
    rows.push(
      <div
        key={i / 4}
        style={{
          display: "flex",
          marginBottom: "10px",
        }}
      >
        {cards.slice(i, i + 4).map((card, index) => (
          <div key={index} style={{ marginRight: "10px" }}>
            {card}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
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
      </div>
      {rows}
    </div>
  );
}

export default FilteringComponent;
