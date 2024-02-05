package com.v1.BackendV1.Controller;

import com.v1.BackendV1.Classes.Accountant;
import com.v1.BackendV1.Classes.Admin;
import com.v1.BackendV1.Service.AccountantService;
import com.v1.BackendV1.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
    @RequestMapping(path = "api/v1/admin")
public class AdminController {
    private final AdminService adminService;

    @Autowired
    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping
    public List<Admin> getAdmin() {
        return adminService.getAdmin();
    }

    @PostMapping
    public void addNewAdmin(@RequestBody Admin admin) {
        adminService.addAdmin(admin);
    }
}
