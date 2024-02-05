package com.v1.BackendV1.Controller;

import com.v1.BackendV1.Classes.Accountant;
import com.v1.BackendV1.Classes.Management;
import com.v1.BackendV1.Service.AccountantService;
import com.v1.BackendV1.Service.ManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
    @RequestMapping(path = "api/v1/accountant")
public class AccountantController {
    private final AccountantService accountantService;

    @Autowired
    public AccountantController(AccountantService accountantService) {
        this.accountantService = accountantService;
    }

    @GetMapping
    public List<Accountant> getAccountant() {
        return accountantService.getAccountants();
    }

    @PostMapping
    public void addNewAccountant(@RequestBody Accountant accountant) {
        accountantService.addAccountant(accountant);
    }
}
