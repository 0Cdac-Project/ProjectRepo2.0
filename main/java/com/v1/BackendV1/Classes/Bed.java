package com.v1.BackendV1.Classes;

import jakarta.persistence.*;

@Entity
@Table(name = "bed")
public class Bed {
    @Id
    @Column(name = "bed_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer bedID;
    @Column(name = "ward_bed_availability", nullable = false)
    private Boolean wardBedAvailability;

    @Column(name = "ward_bed_charge", nullable = false)
    private Integer wardBedCharge;

    @Column(name = "appointment_id")
    private Integer appointmentId;
    @OneToOne
    @JoinColumn(name = "appointment_id", referencedColumnName = "appointment_id", insertable = false, updatable = false)
    private Appointments appointment;

    @Column(name = "ward_id")
    private Integer wardID;
    @OneToOne
    @JoinColumn(name = "ward_id", referencedColumnName = "ward_id", insertable = false, updatable = false)
    private Ward ward;

    public Bed(Integer bedID, Boolean wardBedAvailability, Integer wardBedCharge, Integer appointmentId, Appointments appointment, Integer wardID, Ward ward) {
        this.bedID = bedID;
        this.wardBedAvailability = wardBedAvailability;
        this.wardBedCharge = wardBedCharge;
        this.appointmentId = appointmentId;
        this.appointment = appointment;
        this.wardID = wardID;
        this.ward = ward;
    }

    public Bed(Boolean wardBedAvailability, Integer wardBedCharge, Integer appointmentId, Appointments appointment, Integer wardID, Ward ward) {
        this.wardBedAvailability = wardBedAvailability;
        this.wardBedCharge = wardBedCharge;
        this.appointmentId = appointmentId;
        this.appointment = appointment;
        this.wardID = wardID;
        this.ward = ward;
    }

    public Bed() {
    }

    public Integer getBedID() {
        return bedID;
    }

    public void setBedID(Integer bedID) {
        this.bedID = bedID;
    }

    public Boolean getWardBedAvailability() {
        return wardBedAvailability;
    }

    public void setWardBedAvailability(Boolean wardBedAvailability) {
        this.wardBedAvailability = wardBedAvailability;
    }

    public Integer getWardBedCharge() {
        return wardBedCharge;
    }

    public void setWardBedCharge(Integer wardBedCharge) {
        this.wardBedCharge = wardBedCharge;
    }

    public Integer getAppointmentId() {
        return appointmentId;
    }

    public void setAppointmentId(Integer appointmentId) {
        this.appointmentId = appointmentId;
    }

    public Appointments getAppointment() {
        return appointment;
    }

    public void setAppointment(Appointments appointment) {
        this.appointment = appointment;
    }

    public Integer getWardID() {
        return wardID;
    }

    public void setWardID(Integer wardID) {
        this.wardID = wardID;
    }

    public Ward getWard() {
        return ward;
    }

    public void setWard(Ward ward) {
        this.ward = ward;
    }

    @Override
    public String toString() {
        return "Bed{" +
                "bedID=" + bedID +
                ", wardBedAvailability=" + wardBedAvailability +
                ", wardBedCharge=" + wardBedCharge +
                ", appointmentId=" + appointmentId +
                ", appointment=" + appointment +
                ", wardID=" + wardID +
                ", ward=" + ward +
                '}';
    }
}
