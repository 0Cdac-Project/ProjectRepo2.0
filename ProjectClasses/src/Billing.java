import java.time.LocalDateTime;

public class Billing {
    private Integer billID;
    private LocalDateTime billDateTime;
    private Integer accountantID;
    private Integer appointmentID;
    private Integer bedID;

    public Billing(Integer billID, LocalDateTime billDateTime, Integer accountantID, Integer appointmentID, Integer bedID) {
        this.billID = billID;
        this.billDateTime = billDateTime;
        this.accountantID = accountantID;
        this.appointmentID = appointmentID;
        this.bedID = bedID;
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
        this.billDateTime = billDateTime;
    }

    public Integer getAccountantID() {
        return accountantID;
    }

    public void setAccountantID(Integer accountantID) {
        this.accountantID = accountantID;
    }

    public Integer getAppointmentID() {
        return appointmentID;
    }

    public void setAppointmentID(Integer appointmentID) {
        this.appointmentID = appointmentID;
    }

    public Integer getBedID() {
        return bedID;
    }

    public void setBedID(Integer bedID) {
        this.bedID = bedID;
    }

    @Override
    public String toString() {
        return "Billing{" +
                "billID=" + billID +
                ", billDateTime=" + billDateTime +
                ", accountantID=" + accountantID +
                ", appointmentID=" + appointmentID +
                ", bedID=" + bedID +
                '}';
    }
}
