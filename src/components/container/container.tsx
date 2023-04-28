import './container.css';
import AgeCalculated from '../age-calculated/age-calculated';
import Input from '../input/input';
import Button from '../button/button';
import { useEffect, useState } from 'react';

const Container = ():JSX.Element => {
  const [date, setDate] = useState({day: 0, month: 0, year:0})
  const [isInvalid, setIsInvalid] = useState({ day: false, month: false, year: false });
  const [ageCalculated, setAgeCalculated] = useState({year: null, month: null, day: null})

  useEffect(() => {
    console.log(date, isInvalid)
  },[date, isInvalid])

  const shouldDisableButton = ():boolean => {
    return Object.values(isInvalid).some((value) => value === true)
  }

  const calculateAge = () => {
    const now = new Date();
    const birthDate = new Date(`${date.year}-${date.month}-${date.day}`);
    const ageYears = now.getFullYear() - birthDate.getFullYear();
    const ageMonths = Math.abs((now.getMonth() + 1) - (birthDate.getMonth() + 1));
    const ageDays = Math.abs(now.getDate() - birthDate.getDate());

    setAgeCalculated({year: ageYears, month: ageMonths, day: ageDays})
  }

	return (
    <div className="container">
      <form noValidate>
        <Input
          label="Day"
          id="day"
          placeholder="DD"
          min={1}
          max={31}
          maxLength={2}
          errorMessage="Must be a valid day"
          value={(value) => setDate({ ...date, day: value })} //function(value) {setDate({ ...date, day: value })}
          isValueInvalid={(value) => setIsInvalid({ ...isInvalid, day: value })}
          // validations={[
          //   {
          //     validationName: "isGreaterThan",
          //     valueToCompare: 31,
          //   },
          // ]}
        />

        <Input
          label="Month"
          id="month"
          placeholder="MM"
          min={1}
          max={12}
          maxLength={2}
          errorMessage="Must be a valid month"
          value={(value) => setDate({ ...date, month: value })}
          isValueInvalid={(value) =>
            setIsInvalid({ ...isInvalid, month: value })
          }
          // validations={[
          //   {
          //     validationName: "isGreaterThan",
          //     valueToCompare: 12,
          //   },
          // ]}
        />

        <Input
          label="Year"
          id="year"
          placeholder="YYYY"
          min={0}
          max={new Date().getFullYear()}
          maxLength={4}
          errorMessage="Must be in the past"
          value={(value) => setDate({ ...date, year: value })}
          isValueInvalid={(value) =>
            setIsInvalid({ ...isInvalid, year: value })
          }
          // validations={[
          //   {
          //     validationName: "isGreaterThan",
          //     valueToCompare: new Date().getFullYear(),
          //   },
          // ]}
        />
      </form>
      <span className="container-button">
        <div className="divider"></div>
        <Button
          className="button-calculation"
          disabled={shouldDisableButton()}
          onClick={() => calculateAge()}
        />
      </span>
      <AgeCalculated
        year={ageCalculated.year}
        month={ageCalculated.month}
        day={ageCalculated.day}
      />
    </div>
  );
};

export default Container;
