package com.v1.BackendV1.Classes;

import jakarta.persistence.*;

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

    @Column(name = "management_category", length = 20)
    private String managementCategory;
    public Management(Integer managementID, String managementUsername, String managementPassword, String managementCategory) {
        this.managementID = managementID;
        this.managementUsername = managementUsername;
        this.managementPassword = managementPassword;
        this.managementCategory = managementCategory;
    }

    public Management() {
    }

    public Management(String managementUsername, String managementPassword, String managementCategory) {
        this.managementUsername = managementUsername;
        this.managementPassword = managementPassword;
        this.managementCategory = managementCategory;
    }

    public Integer getManagementID() {
        return managementID;
    }

    public void setManagementID(Integer managementID) {
        this.managementID = managementID;
    }

    public String getManagementUsername() {
        return managementUsername;
    }

    public void setManagementUsername(String managementUsername) {
        this.managementUsername = managementUsername;
    }

    public String getManagementPassword() {
        return managementPassword;
    }

    public void setManagementPassword(String managementPassword) {
        this.managementPassword = managementPassword;
    }

    public String getManagementCategory() {
        return managementCategory;
    }

    public void setManagementCategory(String managementCategory) {
        this.managementCategory = managementCategory;
    }

    @Override
    public String toString() {
        return "Management{" +
                "managementID=" + managementID +
                ", managementUsername='" + managementUsername + '\'' +
                ", managementPassword='" + managementPassword + '\'' +
                ", managementCategory='" + managementCategory + '\'' +
                '}';
    }
}

