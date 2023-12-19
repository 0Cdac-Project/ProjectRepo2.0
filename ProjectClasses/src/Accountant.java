public class Accountant {
    private Integer managementID;
    private Integer accountantID;
    private String accountantFirstName;
    private String accountantLastName;
    private String accountantUsername;
    private String accountantPassword;

    public Accountant(Integer managementID, Integer accountantID, String accountantFirstName, String accountantLastName, String accountantUsername, String accountantPassword) {
        this.managementID = managementID;
        this.accountantID = accountantID;
        this.accountantFirstName = accountantFirstName;
        this.accountantLastName = accountantLastName;
        this.accountantUsername = accountantUsername;
        this.accountantPassword = accountantPassword;
    }

    public Accountant() {
    }

    public Integer getManagementID() {
        return managementID;
    }

    public void setManagementID(Integer managementID) {
        this.managementID = managementID;
    }

    public Integer getAccountantID() {
        return accountantID;
    }

    public void setAccountantID(Integer accountantID) {
        this.accountantID = accountantID;
    }

    public String getAccountantFirstName() {
        return accountantFirstName;
    }

    public void setAccountantFirstName(String accountantFirstName) {
        this.accountantFirstName = accountantFirstName;
    }

    public String getAccountantLastName() {
        return accountantLastName;
    }

    public void setAccountantLastName(String accountantLastName) {
        this.accountantLastName = accountantLastName;
    }

    public String getAccountantUsername() {
        return accountantUsername;
    }

    public void setAccountantUsername(String accountantUsername) {
        this.accountantUsername = accountantUsername;
    }

    public String getAccountantPassword() {
        return accountantPassword;
    }

    public void setAccountantPassword(String accountantPassword) {
        this.accountantPassword = accountantPassword;
    }

    @Override
    public String toString() {
        return "Accountant{" +
                "managementID=" + managementID +
                ", accountantID=" + accountantID +
                ", accountantFirstName='" + accountantFirstName + '\'' +
                ", accountantLastName='" + accountantLastName + '\'' +
                ", accountantUsername='" + accountantUsername + '\'' +
                ", accountantPassword='" + accountantPassword + '\'' +
                '}';
    }
}
