import java.time.LocalDate;

public class Admin {
    private Integer adminID;
    private Integer managementID;
    private String adminUsername;
    private String adminPassword;
    private String adminFirstName;
    private String adminLastName;
    private LocalDate adminDob;
    private Integer adminAge;
    private String adminGender;
    private String adminMobile;
    private String adminEmail;
    private String adminAddress;
    private String adminGovtID;
    private String adminPassport;
    private Integer adminSalary;
    private String adminQualification;
    private LocalDate adminHiredate;
    private Integer doctorID;
    private Integer wardID;
    private Integer appointmentID;
    private Integer billID;
    private String extraCol1;

    public Admin(String adminUsername, String adminPassword, String adminFirstName,
                 String adminLastName, LocalDate adminDob, Integer adminAge, String adminGender,
                 String adminMobile, String adminEmail, String adminAddress, String adminGovtID,
                 String adminPassport, Integer adminSalary, String adminQualification,
                 LocalDate adminHiredate, Integer doctorID, Integer wardID, Integer appointmentID,
                 Integer billID, String extraCol1) {
        this.adminUsername = adminUsername;
        this.adminPassword = adminPassword;
        this.adminFirstName = adminFirstName;
        this.adminLastName = adminLastName;
        this.adminDob = adminDob;
        this.adminAge = adminAge;
        this.adminGender = adminGender;
        this.adminMobile = adminMobile;
        this.adminEmail = adminEmail;
        this.adminAddress = adminAddress;
        this.adminGovtID = adminGovtID;
        this.adminPassport = adminPassport;
        this.adminSalary = adminSalary;
        this.adminQualification = adminQualification;
        this.adminHiredate = adminHiredate;
        this.doctorID = doctorID;
        this.wardID = wardID;
        this.appointmentID = appointmentID;
        this.billID = billID;
        this.extraCol1 = extraCol1;
    }

    public Admin() {
    }

    public String getAdminUsername() {
        return adminUsername;
    }

    public void setAdminUsername(String adminUsername) {
        this.adminUsername = adminUsername;
    }

    public String getAdminPassword() {
        return adminPassword;
    }

    public void setAdminPassword(String adminPassword) {
        this.adminPassword = adminPassword;
    }

    public String getAdminFirstName() {
        return adminFirstName;
    }

    public void setAdminFirstName(String adminFirstName) {
        this.adminFirstName = adminFirstName;
    }

    public String getAdminLastName() {
        return adminLastName;
    }

    public void setAdminLastName(String adminLastName) {
        this.adminLastName = adminLastName;
    }

    public LocalDate getAdminDob() {
        return adminDob;
    }

    public void setAdminDob(LocalDate adminDob) {
        this.adminDob = adminDob;
    }

    public Integer getAdminAge() {
        return adminAge;
    }

    public void setAdminAge(Integer adminAge) {
        this.adminAge = adminAge;
    }

    public String getAdminGender() {
        return adminGender;
    }

    public void setAdminGender(String adminGender) {
        this.adminGender = adminGender;
    }

    public String getAdminMobile() {
        return adminMobile;
    }

    public void setAdminMobile(String adminMobile) {
        this.adminMobile = adminMobile;
    }

    public String getAdminEmail() {
        return adminEmail;
    }

    public void setAdminEmail(String adminEmail) {
        this.adminEmail = adminEmail;
    }

    public String getAdminAddress() {
        return adminAddress;
    }

    public void setAdminAddress(String adminAddress) {
        this.adminAddress = adminAddress;
    }

    public String getAdminGovtID() {
        return adminGovtID;
    }

    public void setAdminGovtID(String adminGovtID) {
        this.adminGovtID = adminGovtID;
    }

    public String getAdminPassport() {
        return adminPassport;
    }

    public void setAdminPassport(String adminPassport) {
        this.adminPassport = adminPassport;
    }

    public Integer getAdminSalary() {
        return adminSalary;
    }

    public void setAdminSalary(Integer adminSalary) {
        this.adminSalary = adminSalary;
    }

    public String getAdminQualification() {
        return adminQualification;
    }

    public void setAdminQualification(String adminQualification) {
        this.adminQualification = adminQualification;
    }

    public LocalDate getAdminHiredate() {
        return adminHiredate;
    }

    public void setAdminHiredate(LocalDate adminHiredate) {
        this.adminHiredate = adminHiredate;
    }

    public Integer getDoctorID() {
        return doctorID;
    }

    public void setDoctorID(Integer doctorID) {
        this.doctorID = doctorID;
    }

    public Integer getWardID() {
        return wardID;
    }

    public void setWardID(Integer wardID) {
        this.wardID = wardID;
    }

    public Integer getAppointmentID() {
        return appointmentID;
    }

    public void setAppointmentID(Integer appointmentID) {
        this.appointmentID = appointmentID;
    }

    public Integer getBillID() {
        return billID;
    }

    public void setBillID(Integer billID) {
        this.billID = billID;
    }

    public String getExtraCol1() {
        return extraCol1;
    }

    public void setExtraCol1(String extraCol1) {
        this.extraCol1 = extraCol1;
    }

    @Override
    public String toString() {
        return "Admin{" +
                "adminUsername='" + adminUsername + '\'' +
                ", adminPassword='" + adminPassword + '\'' +
                ", adminFirstName='" + adminFirstName + '\'' +
                ", adminLastName='" + adminLastName + '\'' +
                ", adminDob=" + adminDob +
                ", adminAge=" + adminAge +
                ", adminGender='" + adminGender + '\'' +
                ", adminMobile='" + adminMobile + '\'' +
                ", adminEmail='" + adminEmail + '\'' +
                ", adminAddress='" + adminAddress + '\'' +
                ", adminGovtID='" + adminGovtID + '\'' +
                ", adminPassport='" + adminPassport + '\'' +
                ", adminSalary=" + adminSalary +
                ", adminQualification='" + adminQualification + '\'' +
                ", adminHiredate=" + adminHiredate +
                ", doctorID=" + doctorID +
                ", wardID=" + wardID +
                ", appointmentID=" + appointmentID +
                ", billID=" + billID +
                ", extraCol1='" + extraCol1 + '\'' +
                '}';
    }
}
