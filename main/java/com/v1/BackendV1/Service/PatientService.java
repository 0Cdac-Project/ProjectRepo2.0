package com.v1.BackendV1.Service;

import com.v1.BackendV1.Classes.Patient;
import com.v1.BackendV1.Repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
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
}
