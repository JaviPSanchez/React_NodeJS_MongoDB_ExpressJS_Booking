import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Global";

const Header = ({ type }) => {
  console.log(type);
  const [destination, setDestination] = useState("");
  // Date
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  // Options
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    //We take the previous state (adult: 1, children: 0, room: 1)
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="bg-primary text-white flex justify-center relative z-10">
      <div
        className={
          type === "list"
            ? "w-full max-w-5xl mt-5 mb-28"
            : "w-full max-w-5xl mt-5 mb-0"
        }
      >
        <div className="flex mb-12 gap-10">
          <div className="flex items-center gap-2 border-2 border-solid border-white p-3 rounded-3xl">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type === "list" && (
          <>
            <h1 className="text-3xl font-bold">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="py-4">
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            <button className="bg-primaryLight text-white p-2">
              Sign in / Register
            </button>
            <div className="absolute w-full max-w-5xl h-14 flex items-center justify-around p-2 -bottom-[25px] bg-white border-2 border-solid border-yellow rounded-md">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faBed} className="text-stone-400" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="border-none outline-0 text-black"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="text-stone-400"
                />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="text-stone-400 cursor-pointer"
                >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="absolute top-[56px] z-2 shadow-xl"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPerson} className="text-stone-400" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="text-stone-400"
                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                {openOptions && (
                  <div className="absolute z-2 top-[56px] bg-white text-stone-600 rounded-md shadow-md">
                    <div className="w-[200px] flex justify-between m-4">
                      <span className="optionText">Adult</span>
                      <div className="flex align-center gap-2.5 text-m text-black">
                        <button
                          disabled={options.adult <= 1}
                          className="w-[30px] h-[30px] border-2 border-solid border-[#0071c2]"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className={styles.optionCounterNumber}>
                          {options.adult}
                        </span>
                        <button
                          className={styles.optionCounterButton}
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="w-[200px] flex justify-between m-4">
                      <span className="optionText">Children</span>
                      <div className="flex align-center gap-2.5 text-m text-black">
                        <button
                          disabled={options.children <= 0}
                          className={styles.optionCounterButton}
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className={styles.optionCounterNumber}>
                          {options.children}
                        </span>
                        <button
                          className={styles.optionCounterButton}
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="w-[200px] flex justify-between m-4">
                      <span className="optionText">Room</span>
                      <div className="flex align-center gap-2.5 text-m text-black">
                        <button
                          disabled={options.room <= 1}
                          className={styles.optionCounterButton}
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className={styles.optionCounterNumber}>
                          {options.room}
                        </span>
                        <button
                          className={styles.optionCounterButton}
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex align-center gap-2.5">
                <button
                  className="bg-primaryLight text-white p-2"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
