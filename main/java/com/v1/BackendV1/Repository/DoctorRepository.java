package com.v1.BackendV1.Repository;

import com.v1.BackendV1.Classes.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Integer> {
    @Query("SELECT p FROM Doctor p WHERE p.doctorID = :id")
    Optional<Doctor> findById(@Param("id") Integer id);
}
