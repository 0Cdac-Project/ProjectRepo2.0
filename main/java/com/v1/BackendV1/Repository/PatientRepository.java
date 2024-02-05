package com.v1.BackendV1.Repository;

import com.v1.BackendV1.Classes.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PatientRepository extends JpaRepository<Patient,Integer> {
    @Query("SELECT p FROM Patient p WHERE p.patientID = :id")
    Optional<Patient> findById(@Param("id") Integer id);
}
