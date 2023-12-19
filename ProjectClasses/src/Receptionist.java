import java.time.LocalDate;

public class Receptionist {
    private Integer receptionID;
    private Integer managementID;
    private String receptionUsername;
    private String receptionPassword;
    private String receptionFirstName;
    private String receptionLastName;
    private LocalDate receptionDob;
    private Integer receptionAge;
    private String receptionGender;
    private String receptionMobile;
    private String receptionEmail;
    private String receptionAddress;
    private String receptionGovtID;
    private String receptionPassport;
    private Integer receptionSalary;
    private String receptionQualification;
    private LocalDate receptionHiredate;
    private Integer appointmentID;
    private Integer wardBedID;
    private Integer patientID;
    private Integer doctorID;
    private String extraCol1;

    public Receptionist(Integer managementID, Integer receptionID, String receptionUsername,
                        String receptionPassword, String receptionFirstName, String receptionLastName,
                        LocalDate receptionDob, Integer receptionAge, String receptionGender, String receptionMobile,
                        String receptionEmail, String receptionAddress, String receptionGovtID, String receptionPassport,
                        Integer receptionSalary, String receptionQualification, LocalDate receptionHiredate,
                        Integer appointmentID, Integer wardBedID, Integer patientID, Integer doctorID, String extraCol1) {
        this.managementID = managementID;
        this.receptionID = receptionID;
        this.receptionUsername = receptionUsername;
        this.receptionPassword = receptionPassword;
        this.receptionFirstName = receptionFirstName;
        this.receptionLastName = receptionLastName;
        this.receptionDob = receptionDob;
        this.receptionAge = receptionAge;
        this.receptionGender = receptionGender;
        this.receptionMobile = receptionMobile;
        this.receptionEmail = receptionEmail;
        this.receptionAddress = receptionAddress;
        this.receptionGovtID = receptionGovtID;
        this.receptionPassport = receptionPassport;
        this.receptionSalary = receptionSalary;
        this.receptionQualification = receptionQualification;
        this.receptionHiredate = receptionHiredate;
        this.appointmentID = appointmentID;
        this.wardBedID = wardBedID;
        this.patientID = patientID;
        this.doctorID = doctorID;
        this.extraCol1 = extraCol1;
    }

    public Receptionist() {
    }

    public Integer getManagementID() {
        return managementID;
    }

    public void setManagementID(Integer managementID) {
        this.managementID = managementID;
    }

    public Integer getReceptionID() {
        return receptionID;
    }

    public void setReceptionID(Integer receptionID) {
        this.receptionID = receptionID;
    }

    public String getReceptionUsername() {
        return receptionUsername;
    }

    public void setReceptionUsername(String receptionUsername) {
        this.receptionUsername = receptionUsername;
    }

    public String getReceptionPassword() {
        return receptionPassword;
    }

    public void setReceptionPassword(String receptionPassword) {
        this.receptionPassword = receptionPassword;
    }

    public String getReceptionFirstName() {
        return receptionFirstName;
    }

    public void setReceptionFirstName(String receptionFirstName) {
        this.receptionFirstName = receptionFirstName;
    }

    public String getReceptionLastName() {
        return receptionLastName;
    }

    public void setReceptionLastName(String receptionLastName) {
        this.receptionLastName = receptionLastName;
    }

    public LocalDate getReceptionDob() {
        return receptionDob;
    }

    public void setReceptionDob(LocalDate receptionDob) {
        this.receptionDob = receptionDob;
    }

    public Integer getReceptionAge() {
        return receptionAge;
    }

    public void setReceptionAge(Integer receptionAge) {
        this.receptionAge = receptionAge;
    }

    public String getReceptionGender() {
        return receptionGender;
    }

    public void setReceptionGender(String receptionGender) {
        this.receptionGender = receptionGender;
    }

    public String getReceptionMobile() {
        return receptionMobile;
    }

    public void setReceptionMobile(String receptionMobile) {
        this.receptionMobile = receptionMobile;
    }

    public String getReceptionEmail() {
        return receptionEmail;
    }

    public void setReceptionEmail(String receptionEmail) {
        this.receptionEmail = receptionEmail;
    }

    public String getReceptionAddress() {
        return receptionAddress;
    }

    public void setReceptionAddress(String receptionAddress) {
        this.receptionAddress = receptionAddress;
    }

    public String getReceptionGovtID() {
        return receptionGovtID;
    }

    public void setReceptionGovtID(String receptionGovtID) {
        this.receptionGovtID = receptionGovtID;
    }

    public String getReceptionPassport() {
        return receptionPassport;
    }

    public void setReceptionPassport(String receptionPassport) {
        this.receptionPassport = receptionPassport;
    }

    public Integer getReceptionSalary() {
        return receptionSalary;
    }

    public void setReceptionSalary(Integer receptionSalary) {
        this.receptionSalary = receptionSalary;
    }

    public String getReceptionQualification() {
        return receptionQualification;
    }

    public void setReceptionQualification(String receptionQualification) {
        this.receptionQualification = receptionQualification;
    }

    public LocalDate getReceptionHiredate() {
        return receptionHiredate;
    }

    public void setReceptionHiredate(LocalDate receptionHiredate) {
        this.receptionHiredate = receptionHiredate;
    }

    public Integer getAppointmentID() {
        return appointmentID;
    }

    public void setAppointmentID(Integer appointmentID) {
        this.appointmentID = appointmentID;
    }

    public Integer getWardBedID() {
        return wardBedID;
    }

    public void setWardBedID(Integer wardBedID) {
        this.wardBedID = wardBedID;
    }

    public Integer getPatientID() {
        return patientID;
    }

    public void setPatientID(Integer patientID) {
        this.patientID = patientID;
    }

    public Integer getDoctorID() {
        return doctorID;
    }

    public void setDoctorID(Integer doctorID) {
        this.doctorID = doctorID;
    }

    public String getExtraCol1() {
        return extraCol1;
    }

    public void setExtraCol1(String extraCol1) {
        this.extraCol1 = extraCol1;
    }

    @Override
    public String toString() {
        return "Receptionist{" +
                "managementID=" + managementID +
                ", receptionID=" + receptionID +
                ", receptionUsername='" + receptionUsername + '\'' +
                ", receptionPassword='" + receptionPassword + '\'' +
                ", receptionFirstName='" + receptionFirstName + '\'' +
                ", receptionLastName='" + receptionLastName + '\'' +
                ", receptionDob=" + receptionDob +
                ", receptionAge=" + receptionAge +
                ", receptionGender='" + receptionGender + '\'' +
                ", receptionMobile='" + receptionMobile + '\'' +
                ", receptionEmail='" + receptionEmail + '\'' +
                ", receptionAddress='" + receptionAddress + '\'' +
                ", receptionGovtID='" + receptionGovtID + '\'' +
                ", receptionPassport='" + receptionPassport + '\'' +
                ", receptionSalary=" + receptionSalary +
                ", receptionQualification='" + receptionQualification + '\'' +
                ", receptionHiredate=" + receptionHiredate +
                ", appointmentID=" + appointmentID +
                ", wardBedID=" + wardBedID +
                ", patientID=" + patientID +
                ", doctorID=" + doctorID +
                ", extraCol1='" + extraCol1 + '\'' +
                '}';
    }
}
