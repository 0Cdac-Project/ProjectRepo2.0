package com.v1.BackendV1.Classes;

import jakarta.persistence.*;

@Entity
@Table(name = "wards")
public class Ward {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ward_id")
    private Integer wardID;

    @Column(name = "ward_name", length = 50, nullable = false)
    private String wardName;

    @Column(name = "ward_category", length = 20, nullable = false)
    private String wardCategory;

    @Column(name = "ward_location", length = 50, nullable = false)
    private String wardLocation;

    public Ward(Integer wardID, String wardName, String wardCategory, String wardSection, String wardLocation) {
        this.wardID = wardID;
        this.wardName = wardName;
        this.wardCategory = wardCategory;
        this.wardLocation = wardLocation;
    }

    public Ward(String wardName, String wardCategory, String wardSection, String wardLocation) {
        this.wardName = wardName;
        this.wardCategory = wardCategory;
        this.wardLocation = wardLocation;
    }

    public Ward() {
    }

    public Integer getWardID() {
        return wardID;
    }

    public void setWardID(Integer wardID) {
        this.wardID = wardID;
    }

    public String getWardName() {
        return wardName;
    }

    public void setWardName(String wardName) {
        this.wardName = wardName;
    }

    public String getWardCategory() {
        return wardCategory;
    }

    public void setWardCategory(String wardCategory) {
        this.wardCategory = wardCategory;
    }

    public String getWardLocation() {
        return wardLocation;
    }

    public void setWardLocation(String wardLocation) {
        this.wardLocation = wardLocation;
    }

    @Override
    public String toString() {
        return "Ward{" +
                "wardID=" + wardID +
                ", wardName='" + wardName + '\'' +
                ", wardCategory='" + wardCategory + '\'' +
                ", wardLocation='" + wardLocation + '\'' +
                '}';
    }
}
