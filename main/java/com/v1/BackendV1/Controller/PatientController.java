package com.v1.BackendV1.Controller;

import com.v1.BackendV1.Classes.Management;
import com.v1.BackendV1.Classes.Patient;
import com.v1.BackendV1.DTOAndHelper.ChangePassword;
import com.v1.BackendV1.DTOAndHelper.ChangePassword2;
import com.v1.BackendV1.Service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/patient")
public class PatientController {
private final PatientService patientService;
@Autowired
    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }

    @GetMapping("/findAll")
    public List<Patient> getPatient() {
        return patientService.getPatients();
    }

    @PostMapping("/add")
    public void addNewPatient(@RequestBody Patient patient)
    {
        patientService.addPatient(patient);
    }

    @GetMapping("/{id}")
    public Patient getPatientById(@PathVariable Integer id) {
        return patientService.getPatientById(id);
    }
    @PostMapping("/verify")
    public Patient getPatientByEmailAndPassword(@RequestBody Patient patient) {
        return patientService.getPatientByEmailAndPassword(patient.getPatientEmail(),patient.getPatientPassword());
    }

    @GetMapping("/findUser/{username}")
    public Patient getPatientByUsernameOrEmail(@PathVariable String username) {
        return patientService.getPatientByUsernameOrEmail(username);
    }
    @PostMapping("/{id}/images")
    public ResponseEntity<?> uploadImage(@PathVariable Integer id, @RequestParam("image") MultipartFile imageFile)
            throws IOException {
        System.out.println("emp id " + id);
        System.out.println("uploaded file name :  " + imageFile.getOriginalFilename() + " size " + imageFile.getSize());
        return ResponseEntity.ok(patientService.saveImage(id, imageFile));
    }

    @GetMapping(value = "/{empId}/images", produces = { MediaType.IMAGE_GIF_VALUE, MediaType.IMAGE_JPEG_VALUE,
            MediaType.IMAGE_PNG_VALUE })
    public ResponseEntity<?> downloadImage(@PathVariable Integer empId)  throws IOException{
        System.out.println("in img download " + empId);
        return ResponseEntity.ok(patientService.restoreImage(empId));
    }

    @PutMapping("/updatePassword/{id}")
    public ResponseEntity<?> changePassword(@PathVariable Integer id, @RequestBody ChangePassword2 changePassword) {
        return patientService.changePassword(id, changePassword.getPatientPassword(), changePassword.getPatientNewPassword());
    }

    @PutMapping("/updateDetails/{id}")
    public ResponseEntity<?> changeDetails(@PathVariable Integer id, @RequestBody Patient patient) {
        return patientService.changeDetails(id, patient);
    }

    @PutMapping("/updatePassword2/{username}")
    public ResponseEntity<?> changePassword2(@PathVariable String username, @RequestBody ChangePassword2 changePassword) {
        return patientService.changePassword2(username, changePassword.getPatientPassword(), changePassword.getPatientNewPassword());
    }

    @GetMapping("/findAll/desc")
    public List<Patient> getPatientsDesc(){
        return patientService.getPatientsDesc();
    }
}
