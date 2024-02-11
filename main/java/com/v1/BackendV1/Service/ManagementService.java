package com.v1.BackendV1.Service;

import com.v1.BackendV1.Classes.Doctor;
import com.v1.BackendV1.Classes.Management;
import com.v1.BackendV1.Repository.DoctorRepository;
import com.v1.BackendV1.Repository.ManagementRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ManagementService {
    private final ManagementRepository managementRepository;

    @Autowired
    public ManagementService(ManagementRepository managementRepository) {
        this.managementRepository = managementRepository;
    }

    public List<Management> getManagement() {
        return managementRepository.findAll();
    }

    public void addManagement(Management management) {
        Optional<Management> optionalPatient = managementRepository.findById(management.getmanagementID());
        if (optionalPatient.isPresent()) {
            throw new IllegalStateException("Duplicate Entry");
        }
        managementRepository.save(management);
    }

    public Management getManagementById(Integer id) {
        return managementRepository.findById(id).orElseThrow();
    }

    public Management getManagementByEmailAndPassword(String managementUsername, String managementPassword) {
        return managementRepository.findByManagementUsernameAndManagementPassword(managementUsername,managementPassword).orElseThrow();
    }

    public List<Management> getManagementByCategory(String category) {
        return managementRepository.findByManagementCategory(category);
    }
}
