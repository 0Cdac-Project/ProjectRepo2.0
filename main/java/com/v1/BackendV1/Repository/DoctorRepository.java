package com.v1.BackendV1.Repository;

import com.v1.BackendV1.Classes.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Integer> {
    Optional<Doctor> findById(Integer id);
    Optional<Doctor> findByDoctorUsernameAndDoctorPassword(String doctorUsername,String doctorPassword);
    Optional<Doctor> findByDoctorUsernameOrDoctorEmail(String docterUsername,String email);
    List<Doctor> findByDoctorAvailability(String Availibility);

    @Query("select sum(d.doctorSalary) from Doctor d")
    Integer findTotalDoctorSalary();

}
