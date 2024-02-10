package com.v1.BackendV1.Service;

import com.v1.BackendV1.Classes.Doctor;
import com.v1.BackendV1.Repository.DoctorRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class DoctorService {
    private final DoctorRepository doctorRepository;

    @Autowired
    public DoctorService(DoctorRepository doctorRepository) {
        this.doctorRepository = doctorRepository;
    }

    public List<Doctor> getDoctors() {
        return doctorRepository.findAll();
    }

    public void addDoctor(Doctor doctor) {
        Optional<Doctor> optionalPatient = doctorRepository.findById(doctor.getdoctorID());
        if (optionalPatient.isPresent()) {
            throw new IllegalStateException("Duplicate Entry");
        }
        doctorRepository.save(doctor);
    }

    public Doctor getDoctorById(Integer id) {
        return doctorRepository.findById(id).orElseThrow();
    }

    public Doctor getDoctorByEmailAndPassword(String doctorEmail, String doctorPassword) {
        return doctorRepository.findByDoctorUsernameAndDoctorPassword(doctorEmail,doctorPassword).orElseThrow();
    }
}
