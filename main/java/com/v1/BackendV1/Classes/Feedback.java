package com.v1.BackendV1.Classes;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "feedback")
public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "feedback_id")
    private Integer feedbackID;
    @Column(name = "feedback_date", nullable = false)
    private LocalDateTime feedbackDate;

    @Column(name = "feedback_text", columnDefinition = "TEXT")
    private String feedbackText;

    @Column(name = "rating")
    private Integer rating;

    @Column(name = "appointment_id")
    private Integer appointmentId;
    @OneToOne
    @JoinColumn(name = "appointment_id", referencedColumnName = "appointment_id", insertable = false, updatable = false)
    private Appointments appointment;

    public Feedback(Integer feedbackID, String feedbackText, Integer rating, Integer appointmentId) {
        this.feedbackID = feedbackID;
        this.feedbackDate = LocalDateTime.now();
        this.feedbackText = feedbackText;
        this.rating = rating;
        this.appointmentId = appointmentId;
    }


    public Feedback() {
    }

    public Feedback( String feedbackText, Integer rating, Integer appointmentId) {
        this.feedbackDate =  LocalDateTime.now();
        this.feedbackText = feedbackText;
        this.rating = rating;
        this.appointmentId = appointmentId;
    }

    public Integer getFeedbackID() {
        return feedbackID;
    }

    public void setFeedbackID(Integer feedbackID) {
        this.feedbackID = feedbackID;
    }

    public LocalDateTime getFeedbackDate() {
        return feedbackDate;
    }

    public void setFeedbackDate() {
        this.feedbackDate =  LocalDateTime.now();
    }

    public String getFeedbackText() {
        return feedbackText;
    }

    public void setFeedbackText(String feedbackText) {
        this.feedbackText = feedbackText;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
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

    @Override
    public String toString() {
        return "Feedback{" +
                "feedbackID=" + feedbackID +
                ", feedbackDate=" + feedbackDate +
                ", feedbackText='" + feedbackText + '\'' +
                ", rating=" + rating +
                ", appointmentId=" + appointmentId +
                ", appointment=" + appointment +
                '}';
    }
}
