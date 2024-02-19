package com.v1.BackendV1.Controller;

import com.v1.BackendV1.Classes.Doctor;
import com.v1.BackendV1.Classes.Management;
import com.v1.BackendV1.Classes.Patient;
import com.v1.BackendV1.DTOAndHelper.ChangePassword2;
import com.v1.BackendV1.DTOAndHelper.ChangePassword3;
import com.v1.BackendV1.Service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.print.Doc;
import java.io.IOException;
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
    @GetMapping("/findUser/{username}")
    public Doctor getDoctorByUsernameOrEmail(@PathVariable String username) {
        return doctorService.getDoctorByUsernameOrEmail(username);
    }
    @GetMapping("/getAllAvailable")
    public List<Doctor> getAllAvailable(String availibility){
        return doctorService.getAvailableDoctors("Yes");
    }

    @PostMapping("/{id}/images")
    public ResponseEntity<?> uploadImage(@PathVariable Integer id, @RequestParam("image") MultipartFile imageFile)
            throws IOException {
        System.out.println("emp id " + id);
        System.out.println("uploaded file name :  " + imageFile.getOriginalFilename() + " size " + imageFile.getSize());
        return ResponseEntity.ok(doctorService.saveImage(id, imageFile));
    }

    @GetMapping(value = "/{empId}/images", produces = { MediaType.IMAGE_GIF_VALUE, MediaType.IMAGE_JPEG_VALUE,
            MediaType.IMAGE_PNG_VALUE })
    public ResponseEntity<?> downloadImage(@PathVariable Integer empId)  throws IOException{
        System.out.println("in img download " + empId);
        return ResponseEntity.ok(doctorService.restoreImage(empId));
    }

    @PutMapping("/updatePassword/{id}")
    public ResponseEntity<?> changePassword(@PathVariable Integer id, @RequestBody ChangePassword3 changePassword) {
        return doctorService.changePassword(id, changePassword.getDoctorPassword(), changePassword.getDoctorNewPassword());
    }

    @PutMapping("/updateDetails/{id}")
    public ResponseEntity<?> changeDetails(@PathVariable Integer id, @RequestBody Doctor doctor) {
        return doctorService.changeDetails(id, doctor);
    }
}
