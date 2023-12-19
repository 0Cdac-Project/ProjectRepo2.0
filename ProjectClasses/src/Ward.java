public class Ward {
    private Integer wardID;
    private String wardName;
    private String wardCategory;
    private Integer wardSectionID;

    private String wardLocation;

    public Ward(Integer wardID, String wardName, String wardCategory, Integer wardSectionID, String wardLocation) {
        this.wardID = wardID;
        this.wardName = wardName;
        this.wardCategory = wardCategory;
        this.wardSectionID = wardSectionID;
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

    public Integer getWardSectionID() {
        return wardSectionID;
    }

    public void setWardSectionID(Integer wardSectionID) {
        this.wardSectionID = wardSectionID;
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
                ", wardSectionID=" + wardSectionID +
                ", wardLocation='" + wardLocation + '\'' +
                '}';
    }
}
