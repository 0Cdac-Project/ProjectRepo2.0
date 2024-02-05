package com.v1.BackendV1.Repository;

import com.v1.BackendV1.Classes.Accountant;
import com.v1.BackendV1.Classes.Appointments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AppointmentsRepository extends JpaRepository<Appointments, Integer> {
    @Query("SELECT p FROM Appointments p WHERE p.appointmentID = :id")
    Optional<Appointments> findById(@Param("id") Integer id);
}
