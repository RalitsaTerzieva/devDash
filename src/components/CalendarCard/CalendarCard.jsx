import React from 'react';
import './CalendarCard.css';

const CalendarCard = () => {
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();

  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = new Date(year, month, 1).getDay(); // Sunday = 0

  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  return (
    <div className="calendar-card">
      <h3>
        {date.toLocaleString('default', { month: 'long' })} {year}
      </h3>
      <div className="calendar-grid">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div className="calendar-header" key={day}>{day}</div>
        ))}
        {days.map((day, idx) => (
          <div key={idx} className="calendar-cell">
            {day || ''}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarCard;
