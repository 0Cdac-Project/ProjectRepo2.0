package com.v1.BackendV1.Controller;

import com.v1.BackendV1.Classes.Management;
import com.v1.BackendV1.DTOAndHelper.ChangePassword;
import com.v1.BackendV1.Service.ManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/management")
public class ManagementController {
    private final ManagementService managementService;

    @Autowired
    public ManagementController(ManagementService managementService) {
        this.managementService = managementService;
    }

    @GetMapping("/findAll")
    public List<Management> getManagement() {
        return managementService.getManagement();
    }

    @GetMapping("/findAllByCategory/{category}")
    public List<Management> getManagementByCategory(@PathVariable String category) {
        System.out.println(category);
        return managementService.getManagementByCategory(category);
    }

    @PostMapping("/add")
    public void addNewManagement(@RequestBody Management management) {
        managementService.addManagement(management);
    }

    @GetMapping("/{id}")
    public Management getManagementById(@PathVariable Integer id) {
        return managementService.getManagementById(id);
    }

    @PostMapping("/findStaff")
    public Management getManagementByEmailAndPassword(@RequestBody Management management) {
        return managementService.getManagementByEmailAndPassword(management.getmanagementUsername(),management.getmanagementPassword());
    }

    @GetMapping("/findUser/{username}")
    public Management getManagementByUsernameOrEmail(@PathVariable String username) {
        return managementService.getManagementByUsernameOrEmail(username);
    }
    @PutMapping("/updatePassword/{id}")
    public ResponseEntity<?> changePassword(@PathVariable Integer id, @RequestBody ChangePassword changePassword) {
        return managementService.changePassword(id, changePassword.getManagementPassword(), changePassword.getManagementNewPassword());
    }

    @PutMapping("/updateDetails/{id}")
    public ResponseEntity<?> changeDetails(@PathVariable Integer id, @RequestBody Management management) {
        return managementService.changeDetails(id, management);
    }

    @PostMapping("/{id}/images")
    public ResponseEntity<?> uploadImage(@PathVariable Integer id,@RequestParam("image") MultipartFile imageFile)
            throws IOException {
        System.out.println("emp id " + id);
        System.out.println("uploaded file name :  " + imageFile.getOriginalFilename() + " size " + imageFile.getSize());
        return ResponseEntity.ok(managementService.saveImage(id, imageFile));
    }

    @GetMapping(value = "/{empId}/images", produces = { MediaType.IMAGE_GIF_VALUE, MediaType.IMAGE_JPEG_VALUE,
            MediaType.IMAGE_PNG_VALUE })
    public ResponseEntity<?> downloadImage(@PathVariable Integer empId)  throws IOException{
        System.out.println("in img download " + empId);
        return ResponseEntity.ok(managementService.restoreImage(empId));
    }



}
