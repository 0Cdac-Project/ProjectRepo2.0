package com.v1.BackendV1.Classes;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.Period;

@Entity
@Table(name = "admin")
public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "admin_id")
    private Integer adminid;

    @Column(name = "admin_first_name", length = 50, nullable = false)
    private String adminFirstName;

    @Column(name = "admin_last_name", length = 50, nullable = false)
    private String adminLastName;

    @Column(name = "admin_dob", nullable = false)
    private LocalDate adminDob;

    @Transient
    private Integer adminAge;

    @Column(name = "admin_gender", length = 10)
    private String adminGender;

    @Column(name = "admin_mobile", length = 15, nullable = false)
    private String adminMobile;

    @Column(name = "admin_email", length = 100, unique = true, nullable = false)
    private String adminEmail;

    @Column(name = "admin_address", length = 250)
    private String adminAddress;

    @Column(name = "admin_govt_id", length = 20, unique = true)
    private String adminGovtID;

    @Column(name = "admin_passport", length = 20, unique = true)
    private String adminPassport;

    @Column(name = "admin_salary")
    private Integer adminSalary;

    @Column(name = "admin_qualification", length = 100)
    private String adminQualification;

    @Column(name = "admin_hiredate", nullable = false)
    private LocalDate adminHiredate;

    @Column(name = "extra_col_1", length = 250)
    private String extraCol1;


    @Column(name = "management_id")
    private Integer managementID;
    @OneToOne
    @JoinColumn(name = "management_id", referencedColumnName = "management_id", insertable = false, updatable = false)
    private Management management;

    public Admin(Integer adminid, Integer managementID, String adminFirstName, String adminLastName, LocalDate adminDob, String adminGender, String adminMobile, String adminEmail, String adminAddress, String adminGovtID, String adminPassport, Integer adminSalary, String adminQualification, LocalDate adminHiredate, String extraCol1) {
        this.adminid = adminid;
        this.managementID = managementID;
        this.adminFirstName = adminFirstName;
        this.adminLastName = adminLastName;
        this.adminDob = adminDob;
        this.adminGender = adminGender;
        this.adminMobile = adminMobile;
        this.adminEmail = adminEmail;
        this.adminAddress = adminAddress;
        this.adminGovtID = adminGovtID;
        this.adminPassport = adminPassport;
        this.adminSalary = adminSalary;
        this.adminQualification = adminQualification;
        this.adminHiredate = adminHiredate;
        this.extraCol1 = extraCol1;
    }

    public Admin(Integer managementID, String adminFirstName, String adminLastName, LocalDate adminDob, String adminGender, String adminMobile, String adminEmail, String adminAddress, String adminGovtID, String adminPassport, Integer adminSalary, String adminQualification, LocalDate adminHiredate, String extraCol1) {
        this.managementID = managementID;
        this.adminFirstName = adminFirstName;
        this.adminLastName = adminLastName;
        this.adminDob = adminDob;
        this.adminGender = adminGender;
        this.adminMobile = adminMobile;
        this.adminEmail = adminEmail;
        this.adminAddress = adminAddress;
        this.adminGovtID = adminGovtID;
        this.adminPassport = adminPassport;
        this.adminSalary = adminSalary;
        this.adminQualification = adminQualification;
        this.adminHiredate = adminHiredate;
        this.extraCol1 = extraCol1;
    }

    public Admin() {
    }

    public Integer getAdminid() {
        return adminid;
    }

    public void setAdminid(Integer adminid) {
        this.adminid = adminid;
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
        return Period.between(adminDob, LocalDate.now()).getYears();
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

    public String getExtraCol1() {
        return extraCol1;
    }

    public void setExtraCol1(String extraCol1) {
        this.extraCol1 = extraCol1;
    }

    @Override
    public String toString() {
        return "Admin{" +
                "adminid=" + adminid +
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
                ", extraCol1='" + extraCol1 + '\'' +
                ", managementID=" + managementID +
                ", management=" + management +
                '}';
    }
}
