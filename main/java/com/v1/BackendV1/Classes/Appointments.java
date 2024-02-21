package com.v1.BackendV1.Classes;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "appointments")
public class Appointments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "appointment_id", nullable = false)
    private Integer appointmentID;

    @Column(name = "appointment_date_time", nullable = false)
    private LocalDateTime appointmentDateTime;

    @Column(name = "medical_condition", columnDefinition = "TEXT",nullable = false)
    private String medicalCondition;

    @Column(name = "medication", columnDefinition = "TEXT")
    private String medication;
    @Column(name = "patient_id")
    private Integer patientID;
    @ManyToOne
    @JoinColumn(name = "patient_id", referencedColumnName = "patient_id", insertable = false, updatable = false)
    private Patient patient;

    @Column(name = "doctor_id")
    private Integer doctorID;
    @ManyToOne
    @JoinColumn(name = "doctor_id", referencedColumnName = "doctor_id", insertable = false, updatable = false)
    private Doctor doctor;

    public Appointments(Integer appointmentID, String medicalCondition, String medication, Integer patientID, Patient patient, Integer doctorID, Doctor doctor) {
        this.appointmentID = appointmentID;
        this.appointmentDateTime = LocalDateTime.now();
        this.medicalCondition = medicalCondition;
        this.medication = medication;
        this.patientID = patientID;
        this.patient = patient;
        this.doctorID = doctorID;
        this.doctor = doctor;
    }

    public Appointments(Integer appointmentID, String medicalCondition, String medication, Integer patientID, Integer doctorID) {
        this.appointmentID = appointmentID;
        this.appointmentDateTime = LocalDateTime.now();
        this.medicalCondition = medicalCondition;
        this.medication = medication;
        this.patientID = patientID;
        this.doctorID = doctorID;
    }

    public Appointments() {
    }

    public Appointments(LocalDateTime appointmentDateTime, String medicalCondition, String medication, Integer patientID, Integer doctorID) {
        this.appointmentDateTime = appointmentDateTime;
        this.medicalCondition = medicalCondition;
        this.medication = medication;
        this.patientID = patientID;
        this.doctorID = doctorID;
    }

    public Integer getAppointmentID() {
        return appointmentID;
    }

    public void setAppointmentID(Integer appointmentID) {
        this.appointmentID = appointmentID;
    }

    public LocalDateTime getAppointmentDateTime() {
        return appointmentDateTime;
    }

    public void setAppointmentDateTime() {
        this.appointmentDateTime = LocalDateTime.now();
    }

    public String getMedicalCondition() {
        return medicalCondition;
    }

    public void setMedicalCondition(String medicalCondition) {
        this.medicalCondition = medicalCondition;
    }

    public String getMedication() {
        return medication;
    }

    public void setMedication(String medication) {
        this.medication = medication;
    }

    public Integer getPatientID() {
        return patientID;
    }

    public void setPatientID(Integer patientID) {
        this.patientID = patientID;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public Integer getDoctorID() {
        return doctorID;
    }

    public void setDoctorID(Integer doctorID) {
        this.doctorID = doctorID;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    @Override
    public String toString() {
        return "Appointments{" +
                "appointmentID=" + appointmentID +
                ", appointmentDateTime=" + appointmentDateTime +
                ", medicalCondition='" + medicalCondition + '\'' +
                ", medication='" + medication + '\'' +
                ", patientID=" + patientID +
                ", doctorID=" + doctorID +
                '}';
    }
}
