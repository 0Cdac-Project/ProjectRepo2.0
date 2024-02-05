package com.v1.BackendV1.Service;

import com.v1.BackendV1.Classes.Accountant;
import com.v1.BackendV1.Classes.Admin;
import com.v1.BackendV1.Repository.AccountantRepository;
import com.v1.BackendV1.Repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {
    private final AdminRepository adminRepository;

    @Autowired
    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    public List<Admin> getAdmin() {
        return adminRepository.findAll();
    }

    public void addAdmin(Admin admin) {
        Optional<Admin> optionalPatient = adminRepository.findById(admin.getAdminid());
        if (optionalPatient.isPresent()) {
            throw new IllegalStateException("Duplicate Entry");
        }
        adminRepository.save(admin);
    }
}
