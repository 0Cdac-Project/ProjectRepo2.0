package com.v1.BackendV1.Service;

import com.v1.BackendV1.Classes.Billing;
import com.v1.BackendV1.Repository.BillingRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
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

    public Billing getBillById(Integer id) {
        return billingRepository.findById(id).orElseThrow();
    }
}
