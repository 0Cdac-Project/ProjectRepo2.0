package com.v1.BackendV1.Repository;

import com.v1.BackendV1.Classes.Appointments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AppointmentsRepository extends JpaRepository<Appointments, Integer> {
    Optional<Appointments> findById(Integer id);
    List<Appointments> findByPatientID(Integer patientID);

    List<Appointments> findByDoctorID(Integer doctorID);

    List<Appointments> findByPatientIDAndDoctorID(Integer patientId, Integer doctorId);
}
