package com.v1.BackendV1.Controller;

import com.v1.BackendV1.Classes.Billing;
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

    @GetMapping("/findAll")
    public List<Billing> getBills() {
        return billingService.getBills();
    }

    @PostMapping("/add")
    public void addNewBill(@RequestBody Billing billing) {
        billingService.addNewBill(billing);
    }
    @GetMapping("/billId/{id}")
    public Billing getBillByID(@PathVariable Integer id) {
        return billingService.getBillById(id);
    }

    @GetMapping("/managementId/{management_id}")
    public List<Billing> getBillsByManagementId(@PathVariable Integer management_id){
        return billingService.getBillsByManagementId(management_id);
    }
}
