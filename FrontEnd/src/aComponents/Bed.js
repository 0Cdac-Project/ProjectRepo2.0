import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function Bed() {
  const [selectedOption, setSelectedOption] = useState("");
  const [beds, setBeds] = useState([]);
  const [bed, setBed] = useState({
    bedID: 0,
    wardBedAvailability: false,
    wardBedCharge: 0,
    appointmentId: 0,
    wardID: 0,
  });
  var selectedopt = selectedOption.replace("%20", " ");
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(selectedOption);
  };

  const selectBed = (v1, v2, v3) => {
    var tempBed = { ...bed };
    tempBed.bedID = v1;
    tempBed.wardBedCharge = v2;
    tempBed.wardID = v3;
    setBed(tempBed);
    console.log(bed);
  };

  const bedAppoId = (args) => {
    var tempBed = { ...bed };
    tempBed.appointmentId = args.target.value;
    setBed(tempBed);
    console.log(bed);
  };

  const bookBed = () => {
    if (bed.appointmentId === 0) {
      toast.warning("Please Enter Appointment No");
    } else {
      axios
        .post(`http://localhost:8080/api/v1/bed/add`, bed)
        .then((res) => {
          console.log("Bed Booked");
          toast.warning("Bed Booked");
        })
        .catch((err) => {
          console.log(err);
          toast.warning(err);
        });
    }
  };

  const getBeds = () => {
    if (selectedOption === "") {
      toast.warning("please select a ward Option!");
    } else {
      const url = `http://localhost:8080/api/v1/bed/available/${selectedopt}`;
      axios
        .get(url)
        .then((res) => {
          setBeds(res.data);
          console.log(res.data);
          var tempBed = { ...bed };
          tempBed.bedID = 0;
          setBed(tempBed);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div className="page-header">
        <h1> Bed Availiability</h1>
      </div>

      <label htmlFor="dropdown">Select an option:</label>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="">Select...</option>
        <option value="General Wards">General Wards</option>
        <option value="Specialty Wards">Speciality Wards</option>
        <option value="Intensive Care Units">Intensive Care Units</option>
      </select>

      <div>
        <button onClick={getBeds} className="button-30">
          Get Beds
        </button>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Bed No.</th>
              <th>Ward Id</th>
              <th>Ward Category</th>
              <th>Ward Name</th>
              <th>Ward Location</th>
              <th>Bed Charge</th>
            </tr>
          </thead>
          <tbody>
            {beds.map((res, index) => {
              return (
                <tr key={index}>
                  <td>{res.bedID}</td>
                  <td>{res.wardID}</td>
                  <td>{res.ward.wardCategory}</td>
                  <td>{res.ward.wardName}</td>
                  <td>{res.ward.wardLocation}</td>
                  <td>{res.wardBedCharge}</td>
                </tr>
              );
            })}
            <tr></tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Bed;
