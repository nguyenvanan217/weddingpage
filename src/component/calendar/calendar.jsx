import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";
import titleCalendar from "../../assets/title-calendar.png";

const CalendarWedding = () => {
  const today = new Date();
  const dbDate = "2025-03-29"; // Dữ liệu từ DB dạng YYYY-MM-DD
  const [year, month, day] = dbDate.split("-").map(Number);
  const weddingDate = new Date(year, month - 1, day);

  return (
    <div className="max-w-md mx-auto mt-10 sm:shadow-lg sm:p-4 rounded-lg text-center flex flex-col items-center justify-center">
      <img
        src={titleCalendar}
        alt="Save the date "
        className="w-[80%]"
      />
      <p className="text-lg my-2" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>
        THÁNG {today.getMonth() + 1} - {today.getFullYear()}
      </p>
      <Calendar
        value={today}
        className="custom-calendar"
        tileClassName={({ date }) => {
          // Ngày hôm nay
          if (
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
          ) {
            return "day-today"; // Màu xanh cho ngày hôm nay
          }
          // Ngày cưới (28/06/2024)
          if (
            date.getDate() === weddingDate.getDate() &&
            date.getMonth() === weddingDate.getMonth() &&
            date.getFullYear() === weddingDate.getFullYear()
          ) {
            return "day-wedding"; // Màu đỏ cho ngày cưới
          }
        }}
        showNavigation={false}
        showNeighboringMonth={false}
        view="month"
        maxDetail="month"
      />
    </div>
  );
};

export default CalendarWedding;
