package com.v1.BackendV1.Classes;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.Period;

@Entity
@Table(name = "doctors")
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "doctor_id")
    private Integer doctorID;

    @Column(name = "doctor_first_name", length = 50, nullable = false)
    private String doctorFirstName;

    @Column(name = "doctor_last_name", length = 50, nullable = false)
    private String doctorLastName;

    @Column(name = "doctor_dob", nullable = false)
    private LocalDate doctorDob;

    @Transient
    private Integer doctorAge;

    @Column(name = "doctor_gender", length = 10)
    private String doctorGender;

    @Column(name = "doctor_mobile", length = 15)
    private String doctorMobile;

    @Column(name = "doctor_emergency_contact", length = 15)
    private String doctorEmergencyContact;

    @Column(name = "doctor_email", length = 100, nullable = false, unique = true)
    private String doctorEmail;

    @Column(name = "doctor_nationality", length = 50)
    private String doctorNationality;

    @Column(name = "doctor_address", length = 250)
    private String doctorAddress;

    @Column(name = "doctor_govt_id", length = 20, unique = true)
    private String doctorGovtID;

    @Column(name = "doctor_passport", length = 20, unique = true)
    private String doctorPassport;

    @Column(name = "doctor_marital_status", length = 10)
    private String doctorMaritalStatus;

    @Column(name = "doctor_qualification", length = 100)
    private String doctorQualification;

    @Column(name = "doctor_department", length = 50)
    private String doctorDepartment;

    @Column(name = "doctor_designation", length = 50)
    private String doctorDesignation;

    @Column(name = "doctor_speciality", length = 50)
    private String doctorSpeciality;

    @Column(name = "doctor_experience")
    private Integer doctorExperience;

    @Column(name = "doctor_availability", length = 50)
    private String doctorAvailability;

    @Column(name = "doctor_shifts")
    private Integer doctorShifts;

    @Column(name = "doctor_salary")
    private Double doctorSalary;

    @Column(name = "doctor_fees")
    private Integer doctorFees;

    @Lob
    @Column(length = Integer.MAX_VALUE)
    private byte[] doctorImage;

    @Column(name = "doctor_username", length = 50, nullable = false, unique = true)
    private String doctorUsername;

    @Column(name = "doctor_password", length = 50, nullable = false)
    private String doctorPassword;

    @Column(name = "doctor_hire_date", nullable = false)
    private LocalDate doctorHireDate;

    @Column(name = "extra_col_1", length = 255)
    private String extraCol1;

    public Doctor(Integer docterID, String doctorFirstLame, String doctorLastName,
                  LocalDate doctorDob, String doctorGender, String doctorMobile,
                  String doctorEmergencyContact, String doctorEmail, String doctorNationality,
                  String doctorAddress, String doctorGovtID, String doctorPassport, String doctorMaritalStatus,
                  String doctorQualification, String doctorDepartment, String doctorDesignation,
                  String doctorSpeciality, Integer doctorExperience, String doctorAvailability,
                  Integer doctorShifts, Double doctorSalary, Integer doctorFees, String doctorPhotograph,
                  String doctorUsername, String doctorPassword, LocalDate doctorHireDate, String extraCol1) {
        this.doctorID = docterID;
        this.doctorFirstName = doctorFirstLame;
        this.doctorLastName = doctorLastName;
        this.doctorDob = doctorDob;
        this.doctorGender = doctorGender;
        this.doctorMobile = doctorMobile;
        this.doctorEmergencyContact = doctorEmergencyContact;
        this.doctorEmail = doctorEmail;
        this.doctorNationality = doctorNationality;
        this.doctorAddress = doctorAddress;
        this.doctorGovtID = doctorGovtID;
        this.doctorPassport = doctorPassport;
        this.doctorMaritalStatus = doctorMaritalStatus;
        this.doctorQualification = doctorQualification;
        this.doctorDepartment = doctorDepartment;
        this.doctorDesignation = doctorDesignation;
        this.doctorSpeciality = doctorSpeciality;
        this.doctorExperience = doctorExperience;
        this.doctorAvailability = doctorAvailability;
        this.doctorShifts = doctorShifts;
        this.doctorSalary = doctorSalary;
        this.doctorFees = doctorFees;
        this.doctorUsername = doctorUsername;
        this.doctorPassword = doctorPassword;
        this.doctorHireDate = doctorHireDate;
        this.extraCol1 = extraCol1;
    }

    public Doctor(String doctorFirstLame, String doctorLastName,
                  LocalDate doctorDob, String doctorGender, String doctorMobile,
                  String doctorEmergencyContact, String doctorEmail, String doctorNationality,
                  String doctorAddress, String doctorGovtID, String doctorPassport, String doctorMaritalStatus,
                  String doctorQualification, String doctorDepartment, String doctorDesignation,
                  String doctorSpeciality, Integer doctorExperience, String doctorAvailability,
                  Integer doctorShifts, Double doctorSalary, Integer doctorFees, String doctorPhotograph,
                  String doctorUsername, String doctorPassword, LocalDate doctorHireDate, String extraCol1) {
        this.doctorFirstName = doctorFirstLame;
        this.doctorLastName = doctorLastName;
        this.doctorDob = doctorDob;
        this.doctorGender = doctorGender;
        this.doctorMobile = doctorMobile;
        this.doctorEmergencyContact = doctorEmergencyContact;
        this.doctorEmail = doctorEmail;
        this.doctorNationality = doctorNationality;
        this.doctorAddress = doctorAddress;
        this.doctorGovtID = doctorGovtID;
        this.doctorPassport = doctorPassport;
        this.doctorMaritalStatus = doctorMaritalStatus;
        this.doctorQualification = doctorQualification;
        this.doctorDepartment = doctorDepartment;
        this.doctorDesignation = doctorDesignation;
        this.doctorSpeciality = doctorSpeciality;
        this.doctorExperience = doctorExperience;
        this.doctorAvailability = doctorAvailability;
        this.doctorShifts = doctorShifts;
        this.doctorSalary = doctorSalary;
        this.doctorFees = doctorFees;
        this.doctorUsername = doctorUsername;
        this.doctorPassword = doctorPassword;
        this.doctorHireDate = doctorHireDate;
        this.extraCol1 = extraCol1;
    }

    public Doctor() {
    }

    public String getDoctorFirstName() {
        return doctorFirstName;
    }

    public void setDoctorFirstName(String doctorFirstLame) {
        this.doctorFirstName = doctorFirstLame;
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
            return Period.between(doctorDob, LocalDate.now()).getYears();
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

    public String getDoctorQualification() {
        return doctorQualification;
    }

    public void setDoctorQualification(String doctorQualification) {
        this.doctorQualification = doctorQualification;
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

    public Double getDoctorSalary() {
        return doctorSalary;
    }

    public void setDoctorSalary(Double doctorSalary) {
        this.doctorSalary = doctorSalary;
    }

    public Integer getDoctorFees() {
        return doctorFees;
    }

    public void setDoctorFees(Integer doctorFees) {
        this.doctorFees = doctorFees;
    }

    public Integer getDoctorID() {
        return doctorID;
    }

    public void setDoctorID(Integer doctorID) {
        this.doctorID = doctorID;
    }

    public byte[] getDoctorImage() {
        return doctorImage;
    }

    public void setDoctorImage(byte[] doctorImage) {
        this.doctorImage = doctorImage;
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

    public LocalDate getDoctorHireDate() {
        return doctorHireDate;
    }

    public void setDoctorHireDate(LocalDate doctorHireDate) {
        this.doctorHireDate = doctorHireDate;
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
                ", doctorFirstLame='" + doctorFirstName + '\'' +
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
                ", doctorQualifaction='" + doctorQualification + '\'' +
                ", doctorDepartment='" + doctorDepartment + '\'' +
                ", doctorDesignation='" + doctorDesignation + '\'' +
                ", doctorSpeciality='" + doctorSpeciality + '\'' +
                ", doctorExperience=" + doctorExperience +
                ", doctorAvailability='" + doctorAvailability + '\'' +
                ", doctorShifts=" + doctorShifts +
                ", doctorSalary=" + doctorSalary +
                ", doctorFees=" + doctorFees +
                ", doctorUsername='" + doctorUsername + '\'' +
                ", doctorPassword='" + doctorPassword + '\'' +
                ", doctorHiredate=" + doctorHireDate +
                ", extraCol1='" + extraCol1 + '\'' +
                '}';
    }
}
