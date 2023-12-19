import java.time.LocalDateTime;

public class EHR {
    private Integer ehrID;
    private LocalDateTime ehrDateTime;
    private String ehrMedicalCondition;
    private String ehrMedication;
    private Integer appointmentID;

    public EHR(Integer ehrID, LocalDateTime ehrDateTime, String ehrMedicalCondition, String ehrMedication, Integer appointmentID) {
        this.ehrID = ehrID;
        this.ehrDateTime = ehrDateTime;
        this.ehrMedicalCondition = ehrMedicalCondition;
        this.ehrMedication = ehrMedication;
        this.appointmentID = appointmentID;
    }

    public EHR() {
    }

    public Integer getEhrID() {
        return ehrID;
    }

    public void setEhrID(Integer ehrID) {
        this.ehrID = ehrID;
    }

    public LocalDateTime getEhrDateTime() {
        return ehrDateTime;
    }

    public void setEhrDateTime(LocalDateTime ehrDateTime) {
        this.ehrDateTime = ehrDateTime;
    }

    public String getEhrMedicalCondition() {
        return ehrMedicalCondition;
    }

    public void setEhrMedicalCondition(String ehrMedicalCondition) {
        this.ehrMedicalCondition = ehrMedicalCondition;
    }

    public String getEhrMedication() {
        return ehrMedication;
    }

    public void setEhrMedication(String ehrMedication) {
        this.ehrMedication = ehrMedication;
    }

    public Integer getAppointmentID() {
        return appointmentID;
    }

    public void setAppointmentID(Integer appointmentID) {
        this.appointmentID = appointmentID;
    }

    @Override
    public String toString() {
        return "EHR{" +
                "ehrID=" + ehrID +
                ", ehrDateTime=" + ehrDateTime +
                ", ehrMedicalCondition='" + ehrMedicalCondition + '\'' +
                ", ehrMedication='" + ehrMedication + '\'' +
                ", appointmentID=" + appointmentID +
                '}';
    }
}
