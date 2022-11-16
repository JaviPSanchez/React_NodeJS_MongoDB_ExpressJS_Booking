import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../components/SearchItem";

import styles from "../styles/Global";

const List = () => {
  //Para usar los states que pasamos de Header
  const location = useLocation();
  // console.log(location);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);

  const [openDate, setOpenDate] = useState(false);

  return (
    <div>
      <Navbar />
      <Header />
      <div className="flex justify-center mt-5">
        <div className="listWrapper w-full max-w-5xl flex gap-5">
          <div
            className={`flex-1 bg-yellow p-5 rounded-xl sticky top-6 h-fit max-h-fit, ${styles.listSearch}`}
          >
            <h1 className="text-2xl text-[#555555] mb-5">Search</h1>
            <div className={styles.lsItem}>
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className={styles.lsItem}>
              <label className=" text-md">Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className={styles.lsItem}>
              <label>Options</label>
              <div className="p-2">
                <div className={styles.lsOptionItem}>
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className={styles.lsOptionInput} />
                </div>
                <div className={styles.lsOptionItem}>
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className={styles.lsOptionInput} />
                </div>
                <div className={styles.lsOptionItem}>
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className={styles.lsOptionInput}
                    placeholder={options.adult}
                  />
                </div>
                <div className={styles.lsOptionItem}>
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className={styles.lsOptionInput}
                    placeholder={options.children}
                  />
                </div>
                <div className={styles.lsOptionItem}>
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className={styles.lsOptionInput}
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="flex-3">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
