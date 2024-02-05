package com.v1.BackendV1.Controller;

import com.v1.BackendV1.Classes.Patient;
import com.v1.BackendV1.Service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/patient")
public class PatientController {
private final PatientService patientService;
@Autowired
    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }

    @GetMapping
    public List<Patient> getPatient() {
        return patientService.getPatients();
    }

    @PostMapping
    public void addNewPatient(@RequestBody Patient patient)
    {
        patientService.addPatient(patient);
    }
}
