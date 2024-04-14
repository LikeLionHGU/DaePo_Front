import React, { useState } from "react";
import CardComponent from "../Home/CardComponent";

function FilteringComponent() {
  const dummyData = [
    { major: "시각", subject: "시각 캡스톤 디자인", year: 2017 },
    { major: "제품", subject: "서비스 디자인", year: 2018 },
    { major: "시각", subject: "커뮤니케이션 디자인", year: 2019 },
    { major: "시각", subject: "제품 및 서비스 디자인", year: 2020 },
    { major: "제품", subject: "Capstone Design", year: 2021 },
    { major: "시각", subject: "시각 캡스톤 디자인", year: 2022 },
    { major: "제품", subject: "서비스 디자인", year: 2023 },
    { major: "제품", subject: "커뮤니케이션 디자인", year: 2024 },
    { major: "시각", subject: "제품 및 서비스 디자인", year: 2017 },
    { major: "제품", subject: "Capstone Design", year: 2018 },
    { major: "시각", subject: "시각 캡스톤 디자인", year: 2019 },
    { major: "제품", subject: "서비스 디자인", year: 2020 },
    { major: "시각", subject: "커뮤니케이션 디자인", year: 2021 },
    { major: "시각", subject: "제품 및 서비스 디자인", year: 2022 },
    { major: "제품", subject: "Capstone Design", year: 2023 },
    { major: "제품", subject: "제품 및 서비스 디자인", year: 2024 },
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

  const filteredData = dummyData.filter((data) => {
    if (
      (filters.major[data.major] ||
        Object.values(filters.major).every((value) => !value)) &&
      (filters.subject[data.subject] ||
        Object.values(filters.subject).every((value) => !value)) &&
      (filters.year === 0 || data.year === filters.year)
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
        <br />
      </div>
      {rows}
    </div>
  );
}

export default FilteringComponent;
