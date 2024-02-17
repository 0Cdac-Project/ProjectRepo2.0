package com.v1.BackendV1.Service;

import com.v1.BackendV1.Classes.Management;
import com.v1.BackendV1.Classes.Patient;
import com.v1.BackendV1.Repository.PatientRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
