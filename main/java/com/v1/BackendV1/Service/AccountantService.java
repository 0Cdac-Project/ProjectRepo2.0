package com.v1.BackendV1.Service;

import com.v1.BackendV1.Classes.Accountant;
import com.v1.BackendV1.Classes.Patient;
import com.v1.BackendV1.Repository.AccountantRepository;
import com.v1.BackendV1.Repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccountantService {
    private final AccountantRepository accountantRepository;

    @Autowired
    public AccountantService(AccountantRepository accountantRepository) {
        this.accountantRepository = accountantRepository;
    }

    public List<Accountant> getAccountants() {
        return accountantRepository.findAll();
    }

    public void addAccountant(Accountant accountant) {
        Optional<Accountant> optionalPatient = accountantRepository.findById(accountant.getAccountantID());
        if (optionalPatient.isPresent()) {
            throw new IllegalStateException("Duplicate Entry");
        }
        accountantRepository.save(accountant);
    }
}
