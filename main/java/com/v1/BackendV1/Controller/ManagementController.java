package com.v1.BackendV1.Controller;

import com.v1.BackendV1.Classes.Doctor;
import com.v1.BackendV1.Classes.Management;
import com.v1.BackendV1.Service.DoctorService;
import com.v1.BackendV1.Service.ManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

}
