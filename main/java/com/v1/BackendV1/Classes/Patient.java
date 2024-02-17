package com.v1.BackendV1.Classes;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.Period;

@Entity
@Table(name = "patients")
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "patient_id", nullable = false)
    private Integer patientID;

    @Column(name = "patient_first_name", length = 50, nullable = false)
    private String patientFirstName;

    @Column(name = "patient_last_name", length = 50, nullable = false)
    private String patientLastName;

    @Column(name = "patient_dob", nullable = false)
    private LocalDate patientDob;

    @Transient
    private Integer patientAge;

    @Column(name = "patient_gender", length = 10)
    private String patientGender;

    @Column(name = "patient_mobile", length = 15)
    private String patientMobile;

    @Column(name = "patient_emergency_contact", length = 15)
    private String patientEmergencyContact;

    @Column(name = "patient_email", length = 100, unique = true, nullable = false)
    private String patientEmail;

    @Column(name = "patient_nationality", length = 50)
    private String patientNationality;

    @Column(name = "patient_address", length = 250)
    private String patientAddress;

    @Column(name = "patient_govt_id", length = 20, unique = true)
    private String patientGovtID;

    @Column(name = "patient_passport", length = 20, unique = true)
    private String patientPassport;

    @Column(name = "patient_marital_status", length = 10)
    private String patientMaritalStatus;

    @Column(name = "patient_occupation", length = 50)
    private String patientOccupation;

    @Column(name = "patient_medical_condition", length = 250)
    private String patientMedicalCondition;

    @Column(name = "patient_medication_history", length = 250)
    private String patientMedicationHistory;

    @Column(name = "patient_medical_consultant", length = 100)
    private String patientMedicalConsultant;

    @Column(name = "patient_username", length = 20, unique = true)
    private String patientUsername;

    @Column(name = "patient_password", length = 50, nullable = false)
    private String patientPassword;

    @Column(name = "patient_weight")
    private Double patientWeight;

    @Column(name = "patient_height")
    private Double patientHeight;

    @Column(name = "patient_bloodgroup", length = 10)
    private String patientBloodgroup;

    @Column(name = "patient_category", length = 20)
    private String patientCategory;

    @Column(name = "extra_col_1", length = 250)
    private String extraCol1;

    @Lob
    @Column(length = Integer.MAX_VALUE)
    private byte[] patientImage;
    public Patient(Integer patientID, String patientFirstName, String patientLastName, LocalDate patientDob, String patientGender, String patientMobile, String patientEmergencyContact, String patientEmail, String patientNationality, String patientAddress, String patientGovtID, String patientPassport, String patientMaritalStatus, String patientOccupation, String patientMedicalCondition, String patientMedicationHistory, String patientMedicalConsultant, String patientUsername, String patientPassword, Double patientWeight, Double patientHeight, String patientBloodgroup, String patientCategory, String extraCol1) {
        this.patientID = patientID;
        this.patientFirstName = patientFirstName;
        this.patientLastName = patientLastName;
        this.patientDob = patientDob;
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
        this.patientBloodgroup = patientBloodgroup;
        this.patientCategory = patientCategory;
        this.extraCol1 = extraCol1;
    }

    public Patient(String patientFirstName, String patientLastName, LocalDate patientDob, String patientGender, String patientMobile, String patientEmergencyContact, String patientEmail, String patientNationality, String patientAddress, String patientGovtID, String patientPassport, String patientMaritalStatus, String patientOccupation, String patientMedicalCondition, String patientMedicationHistory, String patientMedicalConsultant, String patientUsername, String patientPassword, Double patientWeight, Double patientHeight, String patientBloodgroup, String patientCategory, String extraCol1) {
        this.patientFirstName = patientFirstName;
        this.patientLastName = patientLastName;
        this.patientDob = patientDob;
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
        this.patientBloodgroup = patientBloodgroup;
        this.patientCategory = patientCategory;
        this.extraCol1 = extraCol1;
    }

    public byte[] getPatientImage() {
        return patientImage;
    }

    public void setPatientImage(byte[] patientImage) {
        this.patientImage = patientImage;
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
            return Period.between(patientDob, LocalDate.now()).getYears();
    }

    public void setPatientAge(Integer patientAge) {
        this.patientAge = Period.between(patientDob, LocalDate.now()).getYears();
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

    public Double getPatientWeight() {
        return patientWeight;
    }

    public void setPatientWeight(Double patientWeight) {
        this.patientWeight = patientWeight;
    }

    public Double getPatientHeight() {
        return patientHeight;
    }

    public void setPatientHeight(Double patientHeight) {
        this.patientHeight = patientHeight;
    }

    public String getPatientBloodgroup() {
        return patientBloodgroup;
    }

    public void setPatientBloodgroup(String patientBloodgroup) {
        this.patientBloodgroup = patientBloodgroup;
    }

    public String getPatientCategory() {
        return patientCategory;
    }

    public void setPatientCategory(String patientCategory) {
        this.patientCategory = patientCategory;
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
                ", patientBloodGroup='" + patientBloodgroup + '\'' +
                ", patientCategory='" + patientCategory + '\'' +
                ", extraCol1='" + extraCol1 + '\'' +
                '}';
    }
}
