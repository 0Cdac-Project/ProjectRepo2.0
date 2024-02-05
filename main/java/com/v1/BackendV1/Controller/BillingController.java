package com.v1.BackendV1.Controller;

import com.v1.BackendV1.Classes.Accountant;
import com.v1.BackendV1.Classes.Billing;
import com.v1.BackendV1.Service.AccountantService;
import com.v1.BackendV1.Service.BillingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
    @RequestMapping(path = "api/v1/bills")
public class BillingController {
    private final BillingService billingService;

    @Autowired
    public BillingController(BillingService billingService) {
        this.billingService = billingService;
    }

    @GetMapping
    public List<Billing> getBills() {
        return billingService.getBills();
    }

    @PostMapping
    public void addNewBill(@RequestBody Billing billing) {
        billingService.addNewBill(billing);
    }
}
