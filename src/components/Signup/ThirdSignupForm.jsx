import React, { useState } from "react";
import styles from "@/components/Layout/Signup.module.css";
import "@/components/Layout/DatePickerCustom.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ThirdSignupForm() {
  const [businessNum, setBusinessNum] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [acount, setAcount] = useState("");
  const [openDate, setOpenDate] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [viewMode, setViewMode] = useState("day");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("가게 정보: ", { businessNum, businessName, acount, openDate });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setViewMode("day"); // 날짜를 선택한 후 기본 모드로 돌아가기
  };

  return (
    <div className={styles.container}>
      {/* 회원가입 폼 */}
      <div className={styles.formContainer}>
        <form className={styles.singupForm} onSubmit={handleSubmit}>
          <div className={styles.groupForm}>
            <label htmlFor="businessNum">가게 정보 입력</label>
            <input
              type="text"
              id="businessNum"
              placeholder="이곳에 입력해 주세요!"
              value={businessNum}
              onChange={(e) => setBusinessNum(e.target.value)}
              required
            />
          </div>

          <div className={styles.groupForm}>
            <label htmlFor="businessName">업체명 (사업명)</label>
            <input
              type="text"
              id="businessName"
              placeholder="이곳에 입력해 주세요!"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              required
            />
          </div>

          <div className={styles.groupForm}>
            <label htmlFor="acount">은행 계좌번호</label>
            <div className={styles.inputEmailGroup}>
              <select value={acount} className={styles.bankSelect} required>
                <option value="" disabled>
                  선택
                </option>
                <option value="gmail.com">gmail.com</option>
                <option value="naver.com">naver.com</option>
                <option value="daum.net">daum.net</option>
                <option value="custom">직접 입력</option>
              </select>

              <input
                type="text"
                id="acount"
                placeholder="이곳에 입력해 주세요!"
                value={acount}
                onChange={(e) => setAcount(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.groupForm}>
            <label htmlFor="confirmPassword">개업 일자</label>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              placeholderText="날짜를 선택하세요"
              shouldCloseOnSelect={false} // 선택 시 달력이 닫히지 않도록 설정
              renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
                <div className="custom-header">
                  <button className="month-button" onClick={decreaseMonth}>
                    {"<"}
                  </button>
                  <span
                    className={`year-label ${
                      viewMode === "year" ? "active" : ""
                    }`}
                    onClick={() => setViewMode("year")}
                  >
                    {date.getFullYear()}년
                  </span>
                  <span
                    className={`month-label ${
                      viewMode === "month" ? "active" : ""
                    }`}
                    onClick={() => setViewMode("month")}
                  >
                    {date.toLocaleString("default", { month: "numeric" })}
                  </span>
                  <button className="month-button" onClick={increaseMonth}>
                    {">"}
                  </button>
                </div>
              )}
              showYearPicker={viewMode === "year"}
              showMonthYearPicker={viewMode === "month"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ThirdSignupForm;
