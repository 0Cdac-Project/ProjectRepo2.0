package com.v1.BackendV1.Classes;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "management")
public class Management {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "management_id")
    private Integer managementID;

    @Column(name = "management_username", length = 50, nullable = false, unique = true)
    private String managementUsername;

    @Column(name = "management_password", length = 50, nullable = false)
    private String managementPassword;

    @Column(name = "management_category", length = 50, nullable = false)
    private String managementCategory;
    @Column(name = "management_first_name", length = 50, nullable = false)
    private String managementFirstName;

    @Column(name = "management_last_name", length = 50, nullable = false)
    private String managementLastName;

    @Column(name = "management_dob", nullable = false)
    private LocalDate managementDob;

    @Transient
    private Integer managementAge;

    @Column(name = "management_gender", length = 10)
    private String managementGender;

    @Column(name = "management_mobile", length = 15, nullable = false)
    private String managementMobile;

    @Column(name = "management_email", length = 100, unique = true, nullable = false)
    private String managementEmail;

    @Column(name = "management_address", length = 250)
    private String managementAddress;

    @Column(name = "management_govt_id", length = 20, unique = true)
    private String managementGovtID;

    @Column(name = "management_passport", length = 20, unique = true)
    private String managementPassport;

    @Column(name = "management_salary")
    private Integer managementSalary;

    @Column(name = "management_qualification", length = 100)
    private String managementQualification;

    @Column(name = "management_hiredate", nullable = false)
    private LocalDate managementHiredate;

    @Column(name = "extra_col_1", length = 250)
    private String extraCol1;

    public Management(String managementUsername, String managementPassword, String managementCategory, String managementFirstName, String managementLastName, LocalDate managementDob, Integer managementAge, String managementGender, String managementMobile, String managementEmail, String managementAddress, String managementGovtID, String managementPassport, Integer managementSalary, String managementQualification, LocalDate managementHiredate, String extraCol1) {
        this.managementUsername = managementUsername;
        this.managementPassword = managementPassword;
        this.managementCategory = managementCategory;
        this.managementFirstName = managementFirstName;
        this.managementLastName = managementLastName;
        this.managementDob = managementDob;
        this.managementAge = managementAge;
        this.managementGender = managementGender;
        this.managementMobile = managementMobile;
        this.managementEmail = managementEmail;
        this.managementAddress = managementAddress;
        this.managementGovtID = managementGovtID;
        this.managementPassport = managementPassport;
        this.managementSalary = managementSalary;
        this.managementQualification = managementQualification;
        this.managementHiredate = managementHiredate;
        this.extraCol1 = extraCol1;
    }

    public Management() {
    }

    public Management(Integer managementID, String managementUsername, String managementPassword, String managementCategory, String managementFirstName, String managementLastName, LocalDate managementDob, Integer managementAge, String managementGender, String managementMobile, String managementEmail, String managementAddress, String managementGovtID, String managementPassport, Integer managementSalary, String managementQualification, LocalDate managementHiredate, String extraCol1) {
        this.managementID = managementID;
        this.managementUsername = managementUsername;
        this.managementPassword = managementPassword;
        this.managementCategory = managementCategory;
        this.managementFirstName = managementFirstName;
        this.managementLastName = managementLastName;
        this.managementDob = managementDob;
        this.managementAge = managementAge;
        this.managementGender = managementGender;
        this.managementMobile = managementMobile;
        this.managementEmail = managementEmail;
        this.managementAddress = managementAddress;
        this.managementGovtID = managementGovtID;
        this.managementPassport = managementPassport;
        this.managementSalary = managementSalary;
        this.managementQualification = managementQualification;
        this.managementHiredate = managementHiredate;
        this.extraCol1 = extraCol1;
    }

    public Integer getmanagementID() {
        return managementID;
    }

    public void setmanagementID(Integer managementID) {
        this.managementID = managementID;
    }

    public String getmanagementUsername() {
        return managementUsername;
    }

    public void setmanagementUsername(String managementUsername) {
        this.managementUsername = managementUsername;
    }

    public String getmanagementPassword() {
        return managementPassword;
    }

    public void setmanagementPassword(String managementPassword) {
        this.managementPassword = managementPassword;
    }

    public String getmanagementFirstName() {
        return managementFirstName;
    }

    public void setmanagementFirstName(String managementFirstName) {
        this.managementFirstName = managementFirstName;
    }

    public String getmanagementLastName() {
        return managementLastName;
    }

    public void setmanagementLastName(String managementLastName) {
        this.managementLastName = managementLastName;
    }

    public LocalDate getmanagementDob() {
        return managementDob;
    }

    public void setmanagementDob(LocalDate managementDob) {
        this.managementDob = managementDob;
    }

    public Integer getmanagementAge() {
        return managementAge;
    }

    public void setmanagementAge(Integer managementAge) {
        this.managementAge = managementAge;
    }

    public String getmanagementGender() {
        return managementGender;
    }

    public void setmanagementGender(String managementGender) {
        this.managementGender = managementGender;
    }

    public String getmanagementMobile() {
        return managementMobile;
    }

    public void setmanagementMobile(String managementMobile) {
        this.managementMobile = managementMobile;
    }

    public String getmanagementEmail() {
        return managementEmail;
    }

    public void setmanagementEmail(String managementEmail) {
        this.managementEmail = managementEmail;
    }

    public String getmanagementAddress() {
        return managementAddress;
    }

    public void setmanagementAddress(String managementAddress) {
        this.managementAddress = managementAddress;
    }

    public String getmanagementGovtID() {
        return managementGovtID;
    }

    public void setmanagementGovtID(String managementGovtID) {
        this.managementGovtID = managementGovtID;
    }

    public String getmanagementPassport() {
        return managementPassport;
    }

    public void setmanagementPassport(String managementPassport) {
        this.managementPassport = managementPassport;
    }

    public Integer getmanagementSalary() {
        return managementSalary;
    }

    public void setmanagementSalary(Integer managementSalary) {
        this.managementSalary = managementSalary;
    }

    public String getmanagementQualification() {
        return managementQualification;
    }

    public void setmanagementQualification(String managementQualification) {
        this.managementQualification = managementQualification;
    }

    public LocalDate getmanagementHiredate() {
        return managementHiredate;
    }

    public void setmanagementHiredate(LocalDate managementHiredate) {
        this.managementHiredate = managementHiredate;
    }

    public String getExtraCol1() {
        return extraCol1;
    }

    public void setExtraCol1(String extraCol1) {
        this.extraCol1 = extraCol1;
    }

    public String getmanagementCategory() {
        return managementCategory;
    }

    public void setmanagementCategory(String managementCategory) {
        this.managementCategory = managementCategory;
    }

    @Override
    public String toString() {
        return "management{" +
                "managementID=" + managementID +
                ", managementUsername='" + managementUsername + '\'' +
                ", managementPassword='" + managementPassword + '\'' +
                ", managementCategory='" + managementCategory + '\'' +
                ", managementFirstName='" + managementFirstName + '\'' +
                ", managementLastName='" + managementLastName + '\'' +
                ", managementDob=" + managementDob +
                ", managementAge=" + managementAge +
                ", managementGender='" + managementGender + '\'' +
                ", managementMobile='" + managementMobile + '\'' +
                ", managementEmail='" + managementEmail + '\'' +
                ", managementAddress='" + managementAddress + '\'' +
                ", managementGovtID='" + managementGovtID + '\'' +
                ", managementPassport='" + managementPassport + '\'' +
                ", managementSalary=" + managementSalary +
                ", managementQualification='" + managementQualification + '\'' +
                ", managementHiredate=" + managementHiredate +
                ", extraCol1='" + extraCol1 + '\'' +
                '}';
    }
}

