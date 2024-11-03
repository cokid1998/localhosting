import React, { useState } from "react";
import styles from "@/components/Layout/Signup.module.css";
import "@/components/Layout/DatePickerCustom.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ThirdSignupForm() {
  const [businessNum, setBusinessNum] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [account, setAccount] = useState("");
  const [bank, setBank] = useState("");
  const [openDate, setOpenDate] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [viewMode, setViewMode] = useState("day");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("가게 정보: ", {
      businessNum,
      businessName,
      bank,
      account,
      openDate,
    });
  };

  const handleBankChange = (e) => {
    const value = e.target.value;
    setBank(value);
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
            />
          </div>

          <div className={styles.groupForm}>
            <label htmlFor="account">은행 계좌번호</label>
            <div className={styles.inputAccountGroup}>
              <select value={bank} onChange={(e) => setBank(e.target.value)}>
                <option value="" disabled>
                  선택
                </option>
                <option value="국민은행">국민은행</option>
                <option value="기업은행t">기업은행</option>
                <option value="농협은행">농협은행</option>
                <option value="신한은행">신한은행</option>
                <option value="산업은행">산업은행</option>
                <option value="우리은행">우리은행</option>
                <option value="카카오뱅크">카카오뱅크</option>
                <option value="하나은행">하나은행</option>
                <option value="한국씨티은행">한국씨티은행</option>
                <option value="경남은행">경남은행</option>
                <option value="광주은행">광주은행</option>
                <option value="iM뱅크">iM뱅크</option>
                <option value="도이치은행">도이치은행</option>
                <option value="뱅크오브아메리카">뱅크오브아메리카</option>
                <option value="부산은행">부산은행</option>
                <option value="산림조합중앙회">산림조합중앙회</option>
                <option value="저축은행">저축은행</option>
                <option value="새마을금고">새마을금고</option>
                <option value="수협은행">수협은행</option>
                <option value="신협중앙회">신협중앙회</option>
                <option value="우체국">우체국</option>
                <option value="전북은행">전북은행</option>
                <option value="제주은행">제주은행</option>
                <option value="중국건설은행">중국건설은행</option>
                <option value="중국공상은행">중국공상은행</option>
                <option value="중국은행">중국은행</option>
                <option value="BNP파리바은행">BNP파리바은행</option>
                <option value="HSBC은행">HSBC은행</option>
                <option value="JP모간체이스은행">JP모간페이스은행</option>
                <option value="케이뱅크">케이뱅크</option>
                <option value="토스뱅크">토스뱅크</option>
              </select>

              <input
                type="number"
                id="account"
                placeholder="이곳에 입력해 주세요!"
                value={account}
                onChange={(e) => setAccount(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.groupForm}>
            <label htmlFor="openDate">개업 일자</label>
            <>
              <DatePicker
                className={styles.datePicker}
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd"
                placeholderText="년도. 월. 일"
                shouldCloseOnSelect={false} // 선택 시 달력이 닫히지 않도록 설정
                renderCustomHeader={({
                  date,
                  decreaseMonth,
                  increaseMonth,
                }) => (
                  <div className="customHeader">
                    <button className="monthButton" onClick={decreaseMonth}>
                      {"<"}
                    </button>
                    <span
                      className={`yearLabel ${
                        viewMode === "year" ? "active" : ""
                      }`}
                      onClick={() => setViewMode("year")}
                    >
                      {date.getFullYear()}년
                    </span>
                    <span
                      className={`monthLabel ${
                        viewMode === "month" ? "active" : ""
                      }`}
                      onClick={() => setViewMode("month")}
                    >
                      {date.toLocaleString("default", { month: "numeric" })}
                    </span>
                    <button className="monthButton" onClick={increaseMonth}>
                      {">"}
                    </button>
                  </div>
                )}
                showYearPicker={viewMode === "year"}
                showMonthYearPicker={viewMode === "month"}
              />
            </>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ThirdSignupForm;
