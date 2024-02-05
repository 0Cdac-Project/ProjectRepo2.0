package com.v1.BackendV1.Service;

import com.v1.BackendV1.Classes.Accountant;
import com.v1.BackendV1.Classes.Billing;
import com.v1.BackendV1.Repository.AccountantRepository;
import com.v1.BackendV1.Repository.BillingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BillingService {
    private final BillingRepository billingRepository;

    @Autowired
    public BillingService(BillingRepository billingRepository) {
        this.billingRepository = billingRepository;
    }

    public List<Billing> getBills() {
        return billingRepository.findAll();
    }

    public void addNewBill(Billing billing) {
        Optional<Billing> optionalPatient = billingRepository.findById(billing.getBillID());
        if (optionalPatient.isPresent()) {
            throw new IllegalStateException("Duplicate Entry");
        }
        billingRepository.save(billing);
    }
}
