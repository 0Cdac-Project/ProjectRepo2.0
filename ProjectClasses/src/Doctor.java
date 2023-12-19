import java.time.LocalDate;

public class Doctor {
    private Integer doctorID;
    private String doctorFirstLame;
    private String doctorLastName;
    private LocalDate doctorDob;
    private Integer doctorAge;
    private String doctorGender;
    private String doctorMobile;
    private String doctorEmergencyContact;
    private String doctorEmail;
    private String doctorNationality;
    private String doctorAddress;
    private String doctorGovtID;
    private String doctorPassport;
    private String doctorMaritalStatus;
    private String doctorQualifaction;
    private String doctorDepartment;
    private String doctorDesignation;
    private String doctorSpeciality;
    private Integer doctorExperience;
    private String doctorAvailability;
    private Integer doctorShifts;
    private Integer doctorSalary;
    private Integer doctorFees;
    private String doctorPhotograph;
    private String doctorUsername;
    private String doctorPassword;
    private LocalDate doctorHiredate;
    private Integer ehrID;
    private String extraCol1;

  public Doctor(Integer docterID, String doctorFirstLame, String doctorLastName,
                LocalDate doctorDob, Integer doctorAge, String doctorGender, String doctorMobile,
                String doctorEmergencyContact, String doctorEmail, String doctorNationality,
                String doctorAddress, String doctorGovtID, String doctorPassport, String doctorMaritalStatus,
                String doctorQualifaction, String doctorDepartment, String doctorDesignation,
                String doctorSpeciality, Integer doctorExperience, String doctorAvailability,
                Integer doctorShifts, Integer doctorSalary, Integer doctorFees, String doctorPhotograph,
                String doctorUsername, String doctorPassword, LocalDate doctorHiredate, Integer ehrID, String extraCol1) {
    this.doctorID = docterID;
    this.doctorFirstLame = doctorFirstLame;
    this.doctorLastName = doctorLastName;
    this.doctorDob = doctorDob;
    this.doctorAge = doctorAge;
    this.doctorGender = doctorGender;
    this.doctorMobile = doctorMobile;
    this.doctorEmergencyContact = doctorEmergencyContact;
    this.doctorEmail = doctorEmail;
    this.doctorNationality = doctorNationality;
    this.doctorAddress = doctorAddress;
    this.doctorGovtID = doctorGovtID;
    this.doctorPassport = doctorPassport;
    this.doctorMaritalStatus = doctorMaritalStatus;
    this.doctorQualifaction = doctorQualifaction;
    this.doctorDepartment = doctorDepartment;
    this.doctorDesignation = doctorDesignation;
    this.doctorSpeciality = doctorSpeciality;
    this.doctorExperience = doctorExperience;
    this.doctorAvailability = doctorAvailability;
    this.doctorShifts = doctorShifts;
    this.doctorSalary = doctorSalary;
    this.doctorFees = doctorFees;
    this.doctorPhotograph = doctorPhotograph;
    this.doctorUsername = doctorUsername;
    this.doctorPassword = doctorPassword;
    this.doctorHiredate = doctorHiredate;
    this.ehrID = ehrID;
    this.extraCol1 = extraCol1;
  }
  public Doctor() {
  }
  public Integer getDocterID() {
    return doctorID;
  }

  public void setDocterID(Integer docterID) {
    this.doctorID = docterID;
  }

  public String getDoctorFirstLame() {
    return doctorFirstLame;
  }

  public void setDoctorFirstLame(String doctorFirstLame) {
    this.doctorFirstLame = doctorFirstLame;
  }

  public String getDoctorLastName() {
    return doctorLastName;
  }

  public void setDoctorLastName(String doctorLastName) {
    this.doctorLastName = doctorLastName;
  }

  public LocalDate getDoctorDob() {
    return doctorDob;
  }

  public void setDoctorDob(LocalDate doctorDob) {
    this.doctorDob = doctorDob;
  }

  public Integer getDoctorAge() {
    return doctorAge;
  }

  public void setDoctorAge(Integer doctorAge) {
    this.doctorAge = doctorAge;
  }

  public String getDoctorGender() {
    return doctorGender;
  }

  public void setDoctorGender(String doctorGender) {
    this.doctorGender = doctorGender;
  }

  public String getDoctorMobile() {
    return doctorMobile;
  }

  public void setDoctorMobile(String doctorMobile) {
    this.doctorMobile = doctorMobile;
  }

  public String getDoctorEmergencyContact() {
    return doctorEmergencyContact;
  }

  public void setDoctorEmergencyContact(String doctorEmergencyContact) {
    this.doctorEmergencyContact = doctorEmergencyContact;
  }

  public String getDoctorEmail() {
    return doctorEmail;
  }

  public void setDoctorEmail(String doctorEmail) {
    this.doctorEmail = doctorEmail;
  }

  public String getDoctorNationality() {
    return doctorNationality;
  }

  public void setDoctorNationality(String doctorNationality) {
    this.doctorNationality = doctorNationality;
  }

  public String getDoctorAddress() {
    return doctorAddress;
  }

  public void setDoctorAddress(String doctorAddress) {
    this.doctorAddress = doctorAddress;
  }

  public String getDoctorGovtID() {
    return doctorGovtID;
  }

  public void setDoctorGovtID(String doctorGovtID) {
    this.doctorGovtID = doctorGovtID;
  }

  public String getDoctorPassport() {
    return doctorPassport;
  }

  public void setDoctorPassport(String doctorPassport) {
    this.doctorPassport = doctorPassport;
  }

  public String getDoctorMaritalStatus() {
    return doctorMaritalStatus;
  }

  public void setDoctorMaritalStatus(String doctorMaritalStatus) {
    this.doctorMaritalStatus = doctorMaritalStatus;
  }

  public String getDoctorQualifaction() {
    return doctorQualifaction;
  }

  public void setDoctorQualifaction(String doctorQualifaction) {
    this.doctorQualifaction = doctorQualifaction;
  }

  public String getDoctorDepartment() {
    return doctorDepartment;
  }

  public void setDoctorDepartment(String doctorDepartment) {
    this.doctorDepartment = doctorDepartment;
  }

  public String getDoctorDesignation() {
    return doctorDesignation;
  }

  public void setDoctorDesignation(String doctorDesignation) {
    this.doctorDesignation = doctorDesignation;
  }

  public String getDoctorSpeciality() {
    return doctorSpeciality;
  }

  public void setDoctorSpeciality(String doctorSpeciality) {
    this.doctorSpeciality = doctorSpeciality;
  }

  public Integer getDoctorExperience() {
    return doctorExperience;
  }

  public void setDoctorExperience(Integer doctorExperience) {
    this.doctorExperience = doctorExperience;
  }

  public String getDoctorAvailability() {
    return doctorAvailability;
  }

  public void setDoctorAvailability(String doctorAvailability) {
    this.doctorAvailability = doctorAvailability;
  }

  public Integer getDoctorShifts() {
    return doctorShifts;
  }

  public void setDoctorShifts(Integer doctorShifts) {
    this.doctorShifts = doctorShifts;
  }

  public Integer getDoctorSalary() {
    return doctorSalary;
  }

  public void setDoctorSalary(Integer doctorSalary) {
    this.doctorSalary = doctorSalary;
  }

  public Integer getDoctorFees() {
    return doctorFees;
  }

  public void setDoctorFees(Integer doctorFees) {
    this.doctorFees = doctorFees;
  }

  public String getDoctorPhotograph() {
    return doctorPhotograph;
  }

  public void setDoctorPhotograph(String doctorPhotograph) {
    this.doctorPhotograph = doctorPhotograph;
  }

  public String getDoctorUsername() {
    return doctorUsername;
  }

  public void setDoctorUsername(String doctorUsername) {
    this.doctorUsername = doctorUsername;
  }

  public String getDoctorPassword() {
    return doctorPassword;
  }

  public void setDoctorPassword(String doctorPassword) {
    this.doctorPassword = doctorPassword;
  }

  public LocalDate getDoctorHiredate() {
    return doctorHiredate;
  }

  public void setDoctorHiredate(LocalDate doctorHiredate) {
    this.doctorHiredate = doctorHiredate;
  }

  public Integer getEhrID() {
    return ehrID;
  }

  public void setEhrID(Integer ehrID) {
    this.ehrID = ehrID;
  }

  public String getExtraCol1() {
    return extraCol1;
  }

  public void setExtraCol1(String extraCol1) {
    this.extraCol1 = extraCol1;
  }

  @Override
  public String toString() {
    return "Docter{" +
            "docterID=" + doctorID +
            ", doctorFirstLame='" + doctorFirstLame + '\'' +
            ", doctorLastName='" + doctorLastName + '\'' +
            ", doctorDob=" + doctorDob +
            ", doctorAge=" + doctorAge +
            ", doctorGender='" + doctorGender + '\'' +
            ", doctorMobile='" + doctorMobile + '\'' +
            ", doctorEmergencyContact='" + doctorEmergencyContact + '\'' +
            ", doctorEmail='" + doctorEmail + '\'' +
            ", doctorNationality='" + doctorNationality + '\'' +
            ", doctorAddress='" + doctorAddress + '\'' +
            ", doctorGovtID='" + doctorGovtID + '\'' +
            ", doctorPassport='" + doctorPassport + '\'' +
            ", doctorMaritalStatus='" + doctorMaritalStatus + '\'' +
            ", doctorQualifaction='" + doctorQualifaction + '\'' +
            ", doctorDepartment='" + doctorDepartment + '\'' +
            ", doctorDesignation='" + doctorDesignation + '\'' +
            ", doctorSpeciality='" + doctorSpeciality + '\'' +
            ", doctorExperience=" + doctorExperience +
            ", doctorAvailability='" + doctorAvailability + '\'' +
            ", doctorShifts=" + doctorShifts +
            ", doctorSalary=" + doctorSalary +
            ", doctorFees=" + doctorFees +
            ", doctorPhotograph='" + doctorPhotograph + '\'' +
            ", doctorUsername='" + doctorUsername + '\'' +
            ", doctorPassword='" + doctorPassword + '\'' +
            ", doctorHiredate=" + doctorHiredate +
            ", ehrID=" + ehrID +
            ", extraCol1='" + extraCol1 + '\'' +
            '}';
  }
}
