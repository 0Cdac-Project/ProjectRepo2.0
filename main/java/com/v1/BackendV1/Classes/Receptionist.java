package com.v1.BackendV1.Classes;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.Period;

@Entity
@Table(name = "receptionist")
public class Receptionist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "reception_id")
    private Integer receptionID;
    @Column(name = "reception_username", length = 50, nullable = false, unique = true)
    private String receptionUsername;

    @Column(name = "reception_password", length = 50, nullable = false)
    private String receptionPassword;

    @Column(name = "reception_first_name", length = 50)
    private String receptionFirstName;

    @Column(name = "reception_last_name", length = 50)
    private String receptionLastName;

    @Column(name = "reception_dob")
    private LocalDate receptionDob;

    @Transient
    private Integer receptionAge;

    @Column(name = "reception_gender", length = 10)
    private String receptionGender;

    @Column(name = "reception_mobile", length = 15)
    private String receptionMobile;

    @Column(name = "reception_email", length = 100,unique = true)
    private String receptionEmail;

    @Column(name = "reception_address", length = 250)
    private String receptionAddress;

    @Column(name = "reception_govt_id", length = 20,unique = true)
    private String receptionGovtID;

    @Column(name = "reception_passport", length = 20,unique = true)
    private String receptionPassport;

    @Column(name = "reception_salary")
    private Integer receptionSalary;

    @Column(name = "reception_qualification", length = 100)
    private String receptionQualification;

    @Column(name = "reception_hiredate")
    private LocalDate receptionHiredate;

    @Column(name = "extra_col_1", length = 255)
    private String extraCol1;

    @Column(name = "management_id")
    private Integer managementID;
    @OneToOne
    @JoinColumn(name = "management_id", referencedColumnName = "management_id", insertable = false, updatable = false)
    private Management management;

    public Receptionist(Integer receptionID, String receptionUsername, String receptionPassword, String receptionFirstName,
                        String receptionLastName, LocalDate receptionDob, String receptionGender, String receptionMobile,
                        String receptionEmail, String receptionAddress, String receptionGovtID, String receptionPassport,
                        Integer receptionSalary, String receptionQualification, LocalDate receptionHiredate, String extraCol1,
                        Integer managementID) {
        this.receptionID = receptionID;
        this.receptionUsername = receptionUsername;
        this.receptionPassword = receptionPassword;
        this.receptionFirstName = receptionFirstName;
        this.receptionLastName = receptionLastName;
        this.receptionDob = receptionDob;
        this.receptionGender = receptionGender;
        this.receptionMobile = receptionMobile;
        this.receptionEmail = receptionEmail;
        this.receptionAddress = receptionAddress;
        this.receptionGovtID = receptionGovtID;
        this.receptionPassport = receptionPassport;
        this.receptionSalary = receptionSalary;
        this.receptionQualification = receptionQualification;
        this.receptionHiredate = receptionHiredate;
        this.extraCol1 = extraCol1;
        this.managementID = managementID;
    }

    public Receptionist() {
    }

    public Receptionist(String receptionUsername, String receptionPassword, String receptionFirstName,
                        String receptionLastName, LocalDate receptionDob, String receptionGender,
                        String receptionMobile, String receptionEmail, String receptionAddress, String receptionGovtID,
                        String receptionPassport, Integer receptionSalary, String receptionQualification,
                        LocalDate receptionHiredate, String extraCol1, Integer managementID) {
        this.receptionUsername = receptionUsername;
        this.receptionPassword = receptionPassword;
        this.receptionFirstName = receptionFirstName;
        this.receptionLastName = receptionLastName;
        this.receptionDob = receptionDob;
        this.receptionGender = receptionGender;
        this.receptionMobile = receptionMobile;
        this.receptionEmail = receptionEmail;
        this.receptionAddress = receptionAddress;
        this.receptionGovtID = receptionGovtID;
        this.receptionPassport = receptionPassport;
        this.receptionSalary = receptionSalary;
        this.receptionQualification = receptionQualification;
        this.receptionHiredate = receptionHiredate;
        this.extraCol1 = extraCol1;
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
        return Period.between(receptionDob,LocalDate.now()).getYears();
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

    public String getExtraCol1() {
        return extraCol1;
    }

    public void setExtraCol1(String extraCol1) {
        this.extraCol1 = extraCol1;
    }

    public Integer getManagementID() {
        return managementID;
    }

    public void setManagementID(Integer managementID) {
        this.managementID = managementID;
    }

    public Management getManagement() {
        return management;
    }

    public void setManagement(Management management) {
        this.management = management;
    }
}
