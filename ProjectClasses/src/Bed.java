public class Bed {
    private Integer bedID;
    private Integer wardID;
    private Boolean wardBedAvailability;
    private Integer wardBedCharge;
    private Integer appointmentID;

    public Bed(Integer bedID, Integer wardID, Boolean wardBedAvailability, Integer wardBedCharge, Integer appointmentID) {
        this.bedID = bedID;
        this.wardID = wardID;
        this.wardBedAvailability = wardBedAvailability;
        this.wardBedCharge = wardBedCharge;
        this.appointmentID = appointmentID;
    }

    public Bed() {
    }

    public Integer getBedID() {
        return bedID;
    }

    public void setBedID(Integer bedID) {
        this.bedID = bedID;
    }

    public Integer getWardID() {
        return wardID;
    }

    public void setWardID(Integer wardID) {
        this.wardID = wardID;
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

    public Integer getAppointmentID() {
        return appointmentID;
    }

    public void setAppointmentID(Integer appointmentID) {
        this.appointmentID = appointmentID;
    }

    @Override
    public String toString() {
        return "Bed{" +
                "bedID=" + bedID +
                ", wardID=" + wardID +
                ", wardBedAvailability=" + wardBedAvailability +
                ", wardBedCharge=" + wardBedCharge +
                ", appointmentID=" + appointmentID +
                '}';
    }
}
