package com.v1.BackendV1.Controller;

import com.v1.BackendV1.Classes.Doctor;
import com.v1.BackendV1.Classes.Management;
import com.v1.BackendV1.Service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.print.Doc;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/doctor")
public class DoctorController {
    private final DoctorService doctorService;

    @Autowired
    public DoctorController(DoctorService doctorService) {
        this.doctorService = doctorService;
    }

    @GetMapping("/findAll")
    public List<Doctor> getDoctor() {
        return doctorService.getDoctors();
    }

    @PostMapping("/add")
    public void addNewDoctor(@RequestBody Doctor doctor) {
        doctorService.addDoctor(doctor);
    }

    @GetMapping("/{id}")
    public Doctor getDoctorById(@PathVariable Integer id) {
        return doctorService.getDoctorById(id);
    }

    @PostMapping("/verify")
    public Doctor getDoctorByEmailAndPassword(@RequestBody Doctor doctor) {
        return doctorService.getDoctorByEmailAndPassword(doctor.getDoctorEmail(),doctor.getDoctorPassword());
    }

}
