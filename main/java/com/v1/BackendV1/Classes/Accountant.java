package com.v1.BackendV1.Classes;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.Period;

@Entity
@Table(name = "accountant")
public class Accountant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "accountant_id")
    private Integer accountantID;
    @Column(name = "accountant_first_name", length = 50, nullable = false)
    private String accountantFirstName;
    @Column(name = "accountant_last_name", length = 50, nullable = false)
    private String accountantLastName;
    @Column(name = "accountant_dob", nullable = false)
    private LocalDate accountantDob;

    @Transient
    private Integer accountantAge;

    @Column(name = "accountant_gender", length = 10)
    private String accountantGender;

    @Column(name = "accountant_mobile", length = 15, nullable = false)
    private String accountantMobile;

    @Column(name = "accountant_email", length = 100, unique = true, nullable = false)
    private String accountantEmail;

    @Column(name = "accountant_address", length = 250)
    private String accountantAddress;

    @Column(name = "accountant_govt_id", length = 20, unique = true)
    private String accountantGovtID;

    @Column(name = "accountant_passport", length = 20, unique = true)
    private String accountantPassport;

    @Column(name = "accountant_salary")
    private Integer accountantSalary;

    @Column(name = "accountant_qualification", length = 100)
    private String accountantQualification;

    @Column(name = "accountant_hiredate", nullable = false)
    private LocalDate accountantHiredate;

    @Column(name = "extra_col_1", length = 250)
    private String extraCol1;
    @Column(name = "management_id")
    private Integer managementID;
    @OneToOne
    @JoinColumn(name = "management_id", referencedColumnName = "management_id", insertable = false, updatable = false)
    private Management management;

    public Accountant(Integer accountantID, String accountantFirstName, String accountantLastName, LocalDate accountantDob, String accountantGender, String accountantMobile, String accountantEmail, String accountantAddress, String accountantGovtID, String accountantPassport, Integer accountantSalary, String accountantQualification, LocalDate accountantHiredate, String extraCol1, Integer managementID) {
        this.accountantID = accountantID;
        this.accountantFirstName = accountantFirstName;
        this.accountantLastName = accountantLastName;
        this.accountantDob = accountantDob;
        this.accountantGender = accountantGender;
        this.accountantMobile = accountantMobile;
        this.accountantEmail = accountantEmail;
        this.accountantAddress = accountantAddress;
        this.accountantGovtID = accountantGovtID;
        this.accountantPassport = accountantPassport;
        this.accountantSalary = accountantSalary;
        this.accountantQualification = accountantQualification;
        this.accountantHiredate = accountantHiredate;
        this.extraCol1 = extraCol1;
        this.managementID = managementID;
    }

    public Accountant(String accountantFirstName, String accountantLastName, LocalDate accountantDob, String accountantGender, String accountantMobile, String accountantEmail, String accountantAddress, String accountantGovtID, String accountantPassport, Integer accountantSalary, String accountantQualification, LocalDate accountantHiredate, String extraCol1, Integer managementID) {
        this.accountantFirstName = accountantFirstName;
        this.accountantLastName = accountantLastName;
        this.accountantDob = accountantDob;
        this.accountantGender = accountantGender;
        this.accountantMobile = accountantMobile;
        this.accountantEmail = accountantEmail;
        this.accountantAddress = accountantAddress;
        this.accountantGovtID = accountantGovtID;
        this.accountantPassport = accountantPassport;
        this.accountantSalary = accountantSalary;
        this.accountantQualification = accountantQualification;
        this.accountantHiredate = accountantHiredate;
        this.extraCol1 = extraCol1;
        this.managementID = managementID;
    }

    public Accountant() {
    }

    public Integer getAccountantID() {
        return accountantID;
    }

    public void setAccountantID(Integer accountantID) {
        this.accountantID = accountantID;
    }

    public String getAccountantFirstName() {
        return accountantFirstName;
    }

    public void setAccountantFirstName(String accountantFirstName) {
        this.accountantFirstName = accountantFirstName;
    }

    public String getAccountantLastName() {
        return accountantLastName;
    }

    public void setAccountantLastName(String accountantLastName) {
        this.accountantLastName = accountantLastName;
    }

    public LocalDate getAccountantDob() {
        return accountantDob;
    }

    public void setAccountantDob(LocalDate accountantDob) {
        this.accountantDob = accountantDob;
    }

    public Integer getAccountantAge() {
        return Period.between(accountantDob, LocalDate.now()).getYears();
    }

    public void setAccountantAge(Integer accountantAge) {
        this.accountantAge = accountantAge;
    }

    public String getAccountantGender() {
        return accountantGender;
    }

    public void setAccountantGender(String accountantGender) {
        this.accountantGender = accountantGender;
    }

    public String getAccountantMobile() {
        return accountantMobile;
    }

    public void setAccountantMobile(String accountantMobile) {
        this.accountantMobile = accountantMobile;
    }

    public String getAccountantEmail() {
        return accountantEmail;
    }

    public void setAccountantEmail(String accountantEmail) {
        this.accountantEmail = accountantEmail;
    }

    public String getAccountantAddress() {
        return accountantAddress;
    }

    public void setAccountantAddress(String accountantAddress) {
        this.accountantAddress = accountantAddress;
    }

    public String getAccountantGovtID() {
        return accountantGovtID;
    }

    public void setAccountantGovtID(String accountantGovtID) {
        this.accountantGovtID = accountantGovtID;
    }

    public String getAccountantPassport() {
        return accountantPassport;
    }

    public void setAccountantPassport(String accountantPassport) {
        this.accountantPassport = accountantPassport;
    }

    public Integer getAccountantSalary() {
        return accountantSalary;
    }

    public void setAccountantSalary(Integer accountantSalary) {
        this.accountantSalary = accountantSalary;
    }

    public String getAccountantQualification() {
        return accountantQualification;
    }

    public void setAccountantQualification(String accountantQualification) {
        this.accountantQualification = accountantQualification;
    }

    public LocalDate getAccountantHiredate() {
        return accountantHiredate;
    }

    public void setAccountantHiredate(LocalDate accountantHiredate) {
        this.accountantHiredate = accountantHiredate;
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

    @Override
    public String toString() {
        return "Accountant{" +
                "accountantID=" + accountantID +
                ", accountantFirstName='" + accountantFirstName + '\'' +
                ", accountantLastName='" + accountantLastName + '\'' +
                ", accountantDob=" + accountantDob +
                ", accountantAge=" + accountantAge +
                ", accountantGender='" + accountantGender + '\'' +
                ", accountantMobile='" + accountantMobile + '\'' +
                ", accountantEmail='" + accountantEmail + '\'' +
                ", accountantAddress='" + accountantAddress + '\'' +
                ", accountantGovtID='" + accountantGovtID + '\'' +
                ", accountantPassport='" + accountantPassport + '\'' +
                ", accountantSalary=" + accountantSalary +
                ", accountantQualification='" + accountantQualification + '\'' +
                ", accountantHiredate=" + accountantHiredate +
                ", extraCol1='" + extraCol1 + '\'' +
                ", managementID=" + managementID +
                ", management=" + management +
                '}';
    }
}
