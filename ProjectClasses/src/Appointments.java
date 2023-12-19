import java.time.LocalDateTime;

public class Appointments {
    private Integer appointmentID;
    private LocalDateTime appointmentDateTime;

    private Integer patientID;
    private Integer doctorID;

    public Appointments(Integer appointmentID, LocalDateTime appointmentDateTime, Integer patientID, Integer doctorID) {
        this.appointmentID = appointmentID;
        this.appointmentDateTime = appointmentDateTime;
        this.patientID = patientID;
        this.doctorID = doctorID;
    }

    public Appointments() {
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

    public void setAppointmentDateTime(LocalDateTime appointmentDateTime) {
        this.appointmentDateTime = appointmentDateTime;
    }

    public Integer getPatientID() {
        return patientID;
    }

    public void setPatientID(Integer patientID) {
        this.patientID = patientID;
    }

    public Integer getDoctorID() {
        return doctorID;
    }

    public void setDoctorID(Integer doctorID) {
        this.doctorID = doctorID;
    }

    @Override
    public String toString() {
        return "Appointments{" +
                "appointmentID=" + appointmentID +
                ", appointmentDateTime=" + appointmentDateTime +
                ", patientID=" + patientID +
                ", doctorID=" + doctorID +
                '}';
    }
}
