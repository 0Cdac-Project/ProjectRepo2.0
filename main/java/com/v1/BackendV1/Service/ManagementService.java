package com.v1.BackendV1.Service;

import com.v1.BackendV1.Classes.Doctor;
import com.v1.BackendV1.Classes.Management;
import com.v1.BackendV1.Classes.Patient;
import com.v1.BackendV1.Repository.DoctorRepository;
import com.v1.BackendV1.Repository.ManagementRepository;
import jakarta.transaction.Transactional;
import org.hibernate.HibernateException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Objects;
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
        if(management.getmanagementID()!=null) {
            Optional<Management> optionalPatient = managementRepository.findById(management.getmanagementID());
            if (optionalPatient.isPresent()) {
                throw new IllegalStateException("Duplicate Entry");
            }
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

    public Management getManagementByUsernameOrEmail(String username) {
        return managementRepository.findByManagementUsernameOrManagementEmail(username,username).orElseThrow();
    }

    public ResponseEntity<?> changePassword(Integer id, String managementPassword, String managementNewPassword) {
        Management m = managementRepository.findById(id).orElseThrow();
        System.out.println(m.getmanagementPassword()+" "+managementNewPassword+" "+managementPassword);
        if(!m.getmanagementPassword().equals(managementPassword))
            return ResponseEntity.internalServerError().body("Incorrect Password");
        else {
            System.out.println("HIIII");
            m.setmanagementPassword(managementNewPassword);
            managementRepository.save(m);
            return ResponseEntity.ok(m);
        }
    }

    public ResponseEntity<?> changeDetails(Integer id, Management management) {
        Management m = managementRepository.findById(id).orElseThrow();
        System.out.println(management);
        m.setmanagementUsername(management.getmanagementUsername());
        m.setmanagementFirstName(management.getmanagementFirstName());
        m.setmanagementLastName(management.getmanagementLastName());
        m.setmanagementDob(management.getmanagementDob());
        m.setmanagementGender(management.getmanagementGender());
        m.setmanagementEmail(management.getmanagementEmail());
        m.setmanagementMobile(management.getmanagementMobile());
        m.setmanagementAddress(management.getmanagementAddress());
        m.setmanagementGovtID(management.getmanagementGovtID());
        m.setmanagementPassport(management.getmanagementPassport());
        m.setmanagementQualification(management.getmanagementQualification());
        managementRepository.save(m);
        return ResponseEntity.ok(m);
    }

    public ResponseEntity<?> saveImage(Integer id, MultipartFile imageFile) throws IOException {
        byte[] imageData = imageFile.getBytes();
        Management m =  managementRepository.findById(id).orElseThrow();
        m.setManagementImage(imageData);
        managementRepository.save(m);
        return ResponseEntity.ok("Image Added");
    }

    public byte[] restoreImage(Integer id) {
        Management m =  managementRepository.findById(id).orElseThrow();
        return m.getManagementImage();
    }
}
