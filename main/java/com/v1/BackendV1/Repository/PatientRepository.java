package com.v1.BackendV1.Repository;

import com.v1.BackendV1.Classes.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PatientRepository extends JpaRepository<Patient,Integer> {
    Optional<Patient> findById(Integer id);
    Optional<Patient> findByPatientUsernameAndPatientPassword(String patientUsername,String patientPassword);
}
