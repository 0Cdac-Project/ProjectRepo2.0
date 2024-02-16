package com.v1.BackendV1.Classes;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "bills")
public class Billing {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bill_id")
    private Integer billID;

    @Column(name = "bill_datetime")
    private LocalDateTime billDateTime;

    @Column(name = "management_id")
    private Integer managementId;
    @ManyToOne
    @JoinColumn(name = "management_id", referencedColumnName = "management_id", insertable = false, updatable = false)
    private Management management;

    @Column(name = "appointment_id")
    private Integer appointmentId;
    @OneToOne
    @JoinColumn(name = "appointment_id", referencedColumnName = "appointment_id", insertable = false, updatable = false)
    private Appointments appointment;

    @Column(name = "bed_id")
    private Integer bedID;
    @OneToOne
    @JoinColumn(name = "bed_id", referencedColumnName = "bed_id", insertable = false, updatable = false)
    private Bed bed;

    public Billing(Integer billID, LocalDateTime billDateTime, Integer managementId, Management management, Integer appointmentId, Appointments appointment, Integer bedID, Bed bed) {
        this.billID = billID;
        this.billDateTime = billDateTime;
        this.managementId = managementId;
        this.management = management;
        this.appointmentId = appointmentId;
        this.appointment = appointment;
        this.bedID = bedID;
        this.bed = bed;
    }

    public Billing(LocalDateTime billDateTime, Integer managementId, Management management, Integer appointmentId, Appointments appointment, Integer bedID, Bed bed) {
        this.billDateTime = billDateTime;
        this.managementId = managementId;
        this.management = management;
        this.appointmentId = appointmentId;
        this.appointment = appointment;
        this.bedID = bedID;
        this.bed = bed;
    }

    public Billing() {
    }

    public Integer getBillID() {
        return billID;
    }

    public void setBillID(Integer billID) {
        this.billID = billID;
    }

    public LocalDateTime getBillDateTime() {
        return billDateTime;
    }

    public void setBillDateTime(LocalDateTime billDateTime) {
        this.billDateTime = LocalDateTime.now();
    }

    public Integer getmanagementId() {
        return managementId;
    }

    public void setmanagementId(Integer managementId) {
        this.managementId = managementId;
    }

    public Management getManagement() {
        return management;
    }

    public void setManagement(Management management) {
        this.management = management;
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

    public Integer getBedID() {
        return bedID;
    }

    public void setBedID(Integer bedID) {
        this.bedID = bedID;
    }

    public Bed getBed() {
        return bed;
    }

    public void setBed(Bed bed) {
        this.bed = bed;
    }

    @Override
    public String toString() {
        return "Billing{" +
                "billID=" + billID +
                ", billDateTime=" + billDateTime +
                ", managementId=" + managementId +
                ", management=" + management +
                ", appointmentId=" + appointmentId +
                ", appointment=" + appointment +
                ", bedID=" + bedID +
                ", bed=" + bed +
                '}';
    }
}
