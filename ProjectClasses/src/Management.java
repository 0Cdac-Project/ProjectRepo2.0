public class Management {
    private Integer managementID;
    private String managementUsername;
    private String  managementPassword;
    private String managementCategory;

    public Management(Integer managementID, String managementUsername, String managementPassword, String managementCategory) {
        this.managementID = managementID;
        this.managementUsername = managementUsername;
        this.managementPassword = managementPassword;
        this.managementCategory = managementCategory;
    }

    public Management() {
    }

    public Integer getManagementID() {
        return managementID;
    }

    public void setManagementID(Integer managementID) {
        this.managementID = managementID;
    }

    public String getManagementUsername() {
        return managementUsername;
    }

    public void setManagementUsername(String managementUsername) {
        this.managementUsername = managementUsername;
    }

    public String getManagementPassword() {
        return managementPassword;
    }

    public void setManagementPassword(String managementPassword) {
        this.managementPassword = managementPassword;
    }

    public String getManagementCategory() {
        return managementCategory;
    }

    public void setManagementCategory(String managementCategory) {
        this.managementCategory = managementCategory;
    }

    @Override
    public String toString() {
        return "Management{" +
                "managementID=" + managementID +
                ", managementUsername='" + managementUsername + '\'' +
                ", managementPassword='" + managementPassword + '\'' +
                ", managementCategory='" + managementCategory + '\'' +
                '}';
    }
}

