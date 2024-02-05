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

    @GetMapping
    public List<Management> getManagement() {
        return managementService.getManagement();
    }

    @PostMapping
    public void addNewManagement(@RequestBody Management management) {
        managementService.addManagement(management);
    }
}
