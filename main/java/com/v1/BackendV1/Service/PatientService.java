package com.v1.BackendV1.Service;

import com.v1.BackendV1.Classes.Management;
import com.v1.BackendV1.Classes.Patient;
import com.v1.BackendV1.Repository.PatientRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PatientService {
    private final PatientRepository patientRepository;

    @Autowired
    public PatientService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    public List<Patient> getPatients() {
        return patientRepository.findAll();
    }

    public void addPatient(Patient patient) {
        Optional<Patient> optionalPatient = patientRepository.findById(patient.getPatientID());
        if (optionalPatient.isPresent()) {
            throw new IllegalStateException("Duplicate Entry");
        }
        patientRepository.save(patient);
    }

    public Patient getPatientById(Integer id) {
        return patientRepository.findById(id).orElseThrow();
    }

    public Patient getPatientByEmailAndPassword(String patientEmail, String patientPassword) {
        return patientRepository.findByPatientUsernameAndPatientPassword(patientEmail,patientPassword).orElseThrow();
    }

    public Patient getPatientByUsernameOrEmail(String username) {
        return patientRepository.findByPatientUsernameOrPatientEmail(username,username).orElseThrow();
    }
    public ResponseEntity<?> saveImage(Integer id, MultipartFile imageFile) throws IOException {
        byte[] imageData = imageFile.getBytes();
        Patient m =  patientRepository.findById(id).orElseThrow();
        m.setPatientImage(imageData);
        patientRepository.save(m);
        return ResponseEntity.ok("Image Added");
    }

    public byte[] restoreImage(Integer id) {
        Patient m =  patientRepository.findById(id).orElseThrow();
        return m.getPatientImage();
    }

    public ResponseEntity<?> changePassword(Integer id, String patientPassword, String patientNewPassword) {
        Patient m = patientRepository.findById(id).orElseThrow();
        if(!m.getPatientPassword().equals(patientPassword))
            return ResponseEntity.internalServerError().body("Incorrect Password");
        else {
            System.out.println("HIIII");
            m.setPatientPassword(patientNewPassword);
            patientRepository.save(m);
            return ResponseEntity.ok(m);
        }
    }

    public ResponseEntity<?> changeDetails(Integer id, Patient patient) {
        Patient m = patientRepository.findById(id).orElseThrow();
        System.out.println(patient);
        m.setPatientUsername(patient.getPatientUsername());
        m.setPatientFirstName(patient.getPatientFirstName());
        m.setPatientLastName(patient.getPatientLastName());
        m.setPatientDob(m.getPatientDob());
        m.setPatientAddress(patient.getPatientAddress());
        m.setPatientEmail(patient.getPatientEmail());
        m.setPatientMobile(patient.getPatientMobile());
        m.setPatientEmergencyContact(patient.getPatientEmergencyContact());
        m.setPatientGender(patient.getPatientGender());
        m.setPatientHeight(patient.getPatientHeight());
        m.setPatientWeight(patient.getPatientWeight());
        m.setPatientGovtID(patient.getPatientGovtID());
        m.setPatientPassword(patient.getPatientPassword());
        m.setPatientBloodgroup(patient.getPatientBloodgroup());
        m.setPatientMedicationHistory(patient.getPatientMedicationHistory());
        m.setPatientMaritalStatus(patient.getPatientMaritalStatus());
        m.setPatientOccupation(patient.getPatientOccupation());
        m.setPatientPassport((patient.getPatientPassport()));
        patientRepository.save(m);
        return ResponseEntity.ok(m);
    }
}
