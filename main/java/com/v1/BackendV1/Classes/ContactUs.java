package com.v1.BackendV1.Classes;

import jakarta.persistence.*;
import org.hibernate.annotations.Type;

import java.time.LocalDateTime;

@Entity
@Table(name = "contact_us")
public class ContactUs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "contact_id")
    private Integer contactId;

    @Column(name = "first_name", nullable = false, length = 50)
    private String firstName;

    @Column(name = "last_name", nullable = false, length = 50)
    private String lastName;

    @Column(name = "email", nullable = false, length = 100)
    private String email;

    @Column(name = "phone", length = 15,nullable = false)
    private String phone;

    @Column(name = "message", nullable = false, columnDefinition = "TEXT")
    private String message;

    @Column(name = "submission_time")
    private LocalDateTime submissionTime;

    public ContactUs(Integer contactId, String firstName, String lastName, String email, String phone, String message, LocalDateTime submissionTime) {
        this.contactId = contactId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.message = message;
        this.submissionTime = LocalDateTime.now();
    }

    public ContactUs() {
    }

    public ContactUs(String firstName, String lastName, String email, String phone, String message, LocalDateTime submissionTime) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.message = message;
        this.submissionTime = LocalDateTime.now();
    }

    public Integer getContactId() {
        return contactId;
    }

    public void setContactId(Integer contactId) {
        this.contactId = contactId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public LocalDateTime getSubmissionTime() {
        return submissionTime;
    }

    public void setSubmissionTime(LocalDateTime submissionTime) {
        this.submissionTime = LocalDateTime.now();
    }

    @PrePersist
    protected void onCreate() {
        submissionTime =  LocalDateTime.now();
    }
    @Override
    public String toString() {
        return "ContactUs{" +
                "contactId=" + contactId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", message='" + message + '\'' +
                ", submissionTime=" + submissionTime +
                '}';
    }
}
