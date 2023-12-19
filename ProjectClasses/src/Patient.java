import java.time.LocalDate;

public class Patient {
    private Integer patientID;
    private String patientFirstName;
    private String patientLastName;
    private LocalDate patientDob;
    private Integer patientAge;
    private String patientGender;
    private String patientMobile;
    private String patientEmergencyContact;
    private String patientEmail;
    private String patientNationality;
    private String patientAddress;
    private String patientGovtID;
    private String patientPassport;
    private String patientMaritalStatus;
    private String patientOccupation;
    private String patientMedicalCondition;
    private String patientMedicationHistory;
    private String patientMedicalConsultant;
    private String patientUsername;
    private String patientPassword;
    private Integer patientWeight;
    private Integer patientHeight;
    private String patientBloodGroup;
    private String patientCategory;
    private Integer ehrID;
    private String extraCol1;

    public Patient(Integer patientID, String patientFirstName, String patientLastName, LocalDate patientDob, Integer patientAge, String patientGender, String patientMobile, String patientEmergencyContact, String patientEmail, String patientNationality, String patientAddress, String patientGovtID, String patientPassport, String patientMaritalStatus, String patientOccupation, String patientMedicalCondition, String patientMedicationHistory, String patientMedicalConsultant, String patientUsername, String patientPassword, Integer patientWeight, Integer patientHeight, String patientBloodGroup, String patientCategory, Integer ehrID, String extraCol1) {
        this.patientID = patientID;
        this.patientFirstName = patientFirstName;
        this.patientLastName = patientLastName;
        this.patientDob = patientDob;
        this.patientAge = patientAge;
        this.patientGender = patientGender;
        this.patientMobile = patientMobile;
        this.patientEmergencyContact = patientEmergencyContact;
        this.patientEmail = patientEmail;
        this.patientNationality = patientNationality;
        this.patientAddress = patientAddress;
        this.patientGovtID = patientGovtID;
        this.patientPassport = patientPassport;
        this.patientMaritalStatus = patientMaritalStatus;
        this.patientOccupation = patientOccupation;
        this.patientMedicalCondition = patientMedicalCondition;
        this.patientMedicationHistory = patientMedicationHistory;
        this.patientMedicalConsultant = patientMedicalConsultant;
        this.patientUsername = patientUsername;
        this.patientPassword = patientPassword;
        this.patientWeight = patientWeight;
        this.patientHeight = patientHeight;
        this.patientBloodGroup = patientBloodGroup;
        this.patientCategory = patientCategory;
        this.ehrID = ehrID;
        this.extraCol1 = extraCol1;
    }

    public Patient() {
    }

    public Integer getPatientID() {
        return patientID;
    }

    public void setPatientID(Integer patientID) {
        this.patientID = patientID;
    }

    public String getPatientFirstName() {
        return patientFirstName;
    }

    public void setPatientFirstName(String patientFirstName) {
        this.patientFirstName = patientFirstName;
    }

    public String getPatientLastName() {
        return patientLastName;
    }

    public void setPatientLastName(String patientLastName) {
        this.patientLastName = patientLastName;
    }

    public LocalDate getPatientDob() {
        return patientDob;
    }

    public void setPatientDob(LocalDate patientDob) {
        this.patientDob = patientDob;
    }

    public Integer getPatientAge() {
        return patientAge;
    }

    public void setPatientAge(Integer patientAge) {
        this.patientAge = patientAge;
    }

    public String getPatientGender() {
        return patientGender;
    }

    public void setPatientGender(String patientGender) {
        this.patientGender = patientGender;
    }

    public String getPatientMobile() {
        return patientMobile;
    }

    public void setPatientMobile(String patientMobile) {
        this.patientMobile = patientMobile;
    }

    public String getPatientEmergencyContact() {
        return patientEmergencyContact;
    }

    public void setPatientEmergencyContact(String patientEmergencyContact) {
        this.patientEmergencyContact = patientEmergencyContact;
    }

    public String getPatientEmail() {
        return patientEmail;
    }

    public void setPatientEmail(String patientEmail) {
        this.patientEmail = patientEmail;
    }

    public String getPatientNationality() {
        return patientNationality;
    }

    public void setPatientNationality(String patientNationality) {
        this.patientNationality = patientNationality;
    }

    public String getPatientAddress() {
        return patientAddress;
    }

    public void setPatientAddress(String patientAddress) {
        this.patientAddress = patientAddress;
    }

    public String getPatientGovtID() {
        return patientGovtID;
    }

    public void setPatientGovtID(String patientGovtID) {
        this.patientGovtID = patientGovtID;
    }

    public String getPatientPassport() {
        return patientPassport;
    }

    public void setPatientPassport(String patientPassport) {
        this.patientPassport = patientPassport;
    }

    public String getPatientMaritalStatus() {
        return patientMaritalStatus;
    }

    public void setPatientMaritalStatus(String patientMaritalStatus) {
        this.patientMaritalStatus = patientMaritalStatus;
    }

    public String getPatientOccupation() {
        return patientOccupation;
    }

    public void setPatientOccupation(String patientOccupation) {
        this.patientOccupation = patientOccupation;
    }

    public String getPatientMedicalCondition() {
        return patientMedicalCondition;
    }

    public void setPatientMedicalCondition(String patientMedicalCondition) {
        this.patientMedicalCondition = patientMedicalCondition;
    }

    public String getPatientMedicationHistory() {
        return patientMedicationHistory;
    }

    public void setPatientMedicationHistory(String patientMedicationHistory) {
        this.patientMedicationHistory = patientMedicationHistory;
    }

    public String getPatientMedicalConsultant() {
        return patientMedicalConsultant;
    }

    public void setPatientMedicalConsultant(String patientMedicalConsultant) {
        this.patientMedicalConsultant = patientMedicalConsultant;
    }

    public String getPatientUsername() {
        return patientUsername;
    }

    public void setPatientUsername(String patientUsername) {
        this.patientUsername = patientUsername;
    }

    public String getPatientPassword() {
        return patientPassword;
    }

    public void setPatientPassword(String patientPassword) {
        this.patientPassword = patientPassword;
    }

    public Integer getPatientWeight() {
        return patientWeight;
    }

    public void setPatientWeight(Integer patientWeight) {
        this.patientWeight = patientWeight;
    }

    public Integer getPatientHeight() {
        return patientHeight;
    }

    public void setPatientHeight(Integer patientHeight) {
        this.patientHeight = patientHeight;
    }

    public String getPatientBloodGroup() {
        return patientBloodGroup;
    }

    public void setPatientBloodGroup(String patientBloodGroup) {
        this.patientBloodGroup = patientBloodGroup;
    }

    public String getPatientCategory() {
        return patientCategory;
    }

    public void setPatientCategory(String patientCategory) {
        this.patientCategory = patientCategory;
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
        return "Patient{" +
                "patientID=" + patientID +
                ", patientFirstName='" + patientFirstName + '\'' +
                ", patientLastName='" + patientLastName + '\'' +
                ", patientDob=" + patientDob +
                ", patientAge=" + patientAge +
                ", patientGender='" + patientGender + '\'' +
                ", patientMobile='" + patientMobile + '\'' +
                ", patientEmergencyContact='" + patientEmergencyContact + '\'' +
                ", patientEmail='" + patientEmail + '\'' +
                ", patientNationality='" + patientNationality + '\'' +
                ", patientAddress='" + patientAddress + '\'' +
                ", patientGovtID='" + patientGovtID + '\'' +
                ", patientPassport='" + patientPassport + '\'' +
                ", patientMaritalStatus='" + patientMaritalStatus + '\'' +
                ", patientOccupation='" + patientOccupation + '\'' +
                ", patientMedicalCondition='" + patientMedicalCondition + '\'' +
                ", patientMedicationHistory='" + patientMedicationHistory + '\'' +
                ", patientMedicalConsultant='" + patientMedicalConsultant + '\'' +
                ", patientUsername='" + patientUsername + '\'' +
                ", patientPassword='" + patientPassword + '\'' +
                ", patientWeight=" + patientWeight +
                ", patientHeight=" + patientHeight +
                ", patientBloodGroup='" + patientBloodGroup + '\'' +
                ", patientCategory='" + patientCategory + '\'' +
                ", ehrID=" + ehrID +
                ", extraCol1='" + extraCol1 + '\'' +
                '}';
    }
}
