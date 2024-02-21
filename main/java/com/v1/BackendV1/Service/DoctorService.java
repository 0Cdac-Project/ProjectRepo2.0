package com.v1.BackendV1.Service;

import com.v1.BackendV1.Classes.Doctor;
import com.v1.BackendV1.Classes.Patient;
import com.v1.BackendV1.Repository.DoctorRepository;
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
        doctorRepository.save(doctor);
    }

    public Doctor getDoctorById(Integer id) {
        return doctorRepository.findById(id).orElseThrow();
    }

    public Doctor getDoctorByEmailAndPassword(String doctorEmail, String doctorPassword) {
        return doctorRepository.findByDoctorUsernameAndDoctorPassword(doctorEmail,doctorPassword).orElseThrow();
    }

    public Doctor getDoctorByUsernameOrEmail(String username) {
        return doctorRepository.findByDoctorUsernameOrDoctorEmail(username,username).orElseThrow();
    }

    public List<Doctor> getAvailableDoctors(String availibility){
        return doctorRepository.findByDoctorAvailability(availibility);
    }

    public ResponseEntity<?> saveImage(Integer id, MultipartFile imageFile) throws IOException {
        byte[] imageData = imageFile.getBytes();
        Doctor m =  doctorRepository.findById(id).orElseThrow();
        m.setDoctorImage(imageData);
        doctorRepository.save(m);
        return ResponseEntity.ok("Image Added");
    }

    public byte[] restoreImage(Integer id) {
        Doctor m =  doctorRepository.findById(id).orElseThrow();
        return m.getDoctorImage();
    }
    public ResponseEntity<?> changePassword(Integer id, String doctorPassword, String doctorNewPassword) {
        Doctor m = doctorRepository.findById(id).orElseThrow();
        if(!m.getDoctorPassword().equals(doctorPassword))
            return ResponseEntity.internalServerError().body("Incorrect Password");
        else {
            System.out.println("HIIII");
            m.setDoctorPassword(doctorNewPassword);
            doctorRepository.save(m);
            return ResponseEntity.ok(m);
        }
    }

    public ResponseEntity<?> changeDetails(Integer id, Doctor doctor) {
        Doctor m = doctorRepository.findById(id).orElseThrow();
        System.out.println(doctor);
        m.setDoctorUsername(doctor.getDoctorUsername());
        m.setDoctorFirstName(doctor.getDoctorFirstName());
        m.setDoctorLastName(doctor.getDoctorLastName());
        m.setDoctorMobile(doctor.getDoctorMobile());
        m.setDoctorEmergencyContact(doctor.getDoctorEmergencyContact());
        m.setDoctorEmail(doctor.getDoctorEmail());
        m.setDoctorDob(doctor.getDoctorDob());
        m.setDoctorQualification(doctor.getDoctorQualification());
        m.setDoctorDepartment(doctor.getDoctorDepartment());
        m.setDoctorDesignation(doctor.getDoctorDesignation());
        m.setDoctorSpeciality(doctor.getDoctorSpeciality());
        m.setDoctorSalary(doctor.getDoctorSalary());
        m.setDoctorFees(doctor.getDoctorFees());
        m.setDoctorGovtID(doctor.getDoctorGovtID());
        m.setDoctorPassport(doctor.getDoctorPassport());
        m.setDoctorMaritalStatus(doctor.getDoctorMaritalStatus());
        m.setDoctorExperience(doctor.getDoctorExperience());
        m.setDoctorAddress(doctor.getDoctorAddress());
        m.setDoctorGender(doctor.getDoctorGender());
        doctorRepository.save(m);
        return ResponseEntity.ok(m);
    }

    public ResponseEntity<?> getTotalSalary() {
        return ResponseEntity.ok(doctorRepository.findTotalDoctorSalary());
    }
}
