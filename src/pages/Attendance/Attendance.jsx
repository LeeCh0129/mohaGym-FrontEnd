import { Calendar, Button, List } from "antd";
import React, { useState } from "react";
import "./attendance.css";

export default function Attendance() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [attendanceData, setAttendanceData] = useState([]);

  const handleDateSelect = (date) => {
    if (selectedDate && selectedDate.isSame(date, "day")) {
      handleMarkOrDeleteAttendance(date);
    } else {
      setSelectedDate(date);
    }
  };

  const handleMarkOrDeleteAttendance = (date) => {
    if (attendanceData.some((d) => d.isSame(date, "day"))) {
      handleDeleteAttendance(date);
    } else {
      handleMarkAttendance(date);
    }
  };

  const handleMarkAttendance = (date) => {
    // 서버로 출석 정보를 전송하고 상태를 업데이트
    setAttendanceData([...attendanceData, date]);
  };

  const handleDeleteAttendance = (date) => {
    const confirmDelete = window.confirm("정말로 삭제하시겠습니까?");
    if (confirmDelete) {
      const updatedAttendanceData = attendanceData.filter(
        (d) => !d.isSame(date, "day")
      );
      setAttendanceData(updatedAttendanceData);
    }
  };

  return (
    <div className="Attendance">
      <h2>Attendance Page</h2>
      <Calendar
        className="CustomCalendarClass"
        onSelect={handleDateSelect}
        onDoubleClick={handleDateSelect}
        dateCellRender={(date) => {
          if (attendanceData.some((d) => d.isSame(date, "day"))) {
            return <div className="attendanceMarked">✔️</div>;
          }
          return null;
        }}
      />
      <Button
        className="attendanceBtn"
        onClick={() => handleMarkOrDeleteAttendance(selectedDate)}
        disabled={!selectedDate}
      >
        {attendanceData.some((d) => d.isSame(selectedDate, "day"))
          ? "출석 취소"
          : "출석체크"}
      </Button>
      <List
        header={<div>출석 기록</div>}
        bordered
        dataSource={attendanceData}
        renderItem={(item) => (
          <List.Item>
            {item.format("YYYY-MM-DD")}
            <Button
              className="attendanceDel"
              size="small"
              onClick={() => handleDeleteAttendance(item)}
            >
              삭제
            </Button>
          </List.Item>
        )}
      />
    </div>
  );
}
