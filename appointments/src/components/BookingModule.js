import React, {useState} from 'react'

const BookingModule =()=>{
    const [appointments, setAppointments] =useState([]);
    const [selectedDate, setSelectedDate] =useState(null);
    const [selectedTime, setSelectedTime] =useState(null);
    const [selectedLawyer, setSelectedLawyer] =useState(null);
    const [isBooked, setIsBooked] =useState(false);

    const handleDateChange =(event)=>{
        setSelectedDate(event.target.value);
    };
    const handleTimeChange=(event) =>{
        setSelectedTime(event.target.value);
    };
    const handleLawyerChange = (event) =>{
        setSelectedLawyer(event.target.value);
    };
    const handleBookAppointment = ()=>{
        const appointment={
            date:selectedDate,
            time:selectedTime,
            lawyer:selectedLawyer,

        };
        setAppointments([...appointments, appointments]);
        setIsBooked(true);
    };
    return(
        <div>
            <h1>Book a Lawyer Appointment</h1>
            <div>
                <label>Select a Date:</label>
                <input type="date" value={selectedDate} onChange={handleDateChange}/>
            </div>
            <div>
                <label>Select a Time:</label>
                <input type="time" value={selectedTime} onChange={handleTimeChange}/>

            </div>
            <div>
                <label>Select a Lawyer:</label>
                <select value={selectedLawyer} onChange={handleLawyerChange}>
                    <option value="">--Select a Lawyer--</option>
                    <option value="Lawyer 1">Lawyer 1</option>
                    <option value="Lawyer2">Lawyer 2</option>
                    <option value="Lawyer 3">Lawyer 3</option>
                </select>
            </div>
            <div>
                <button onClick={handleBookAppointment}>Book Appointment</button>
            </div>
            
            {isBooked && (
                <div>
                    <h2>Your appointment has been booked successfully!</h2>
                    <p>
                        Date:{selectedDate} Time:{selectedTime} Lawyer:{selectedLawyer}
                    </p>
                    </div>
            )}
        </div>
    
    );
  };
 export default BookingModule;