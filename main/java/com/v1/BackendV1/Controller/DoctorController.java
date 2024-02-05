package com.v1.BackendV1.Controller;

import com.v1.BackendV1.Classes.Doctor;
import com.v1.BackendV1.Service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/doctor")
public class DoctorController {
    private final DoctorService doctorService;

    @Autowired
    public DoctorController(DoctorService doctorService) {
        this.doctorService = doctorService;
    }

    @GetMapping
    public List<Doctor> getDoctor() {
        return doctorService.getDoctors();
    }

    @PostMapping
    public void addNewDoctor(@RequestBody Doctor doctor) {
        doctorService.addDoctor(doctor);
    }
}
