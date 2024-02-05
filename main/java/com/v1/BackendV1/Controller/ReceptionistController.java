package com.v1.BackendV1.Controller;

import com.v1.BackendV1.Classes.Admin;
import com.v1.BackendV1.Classes.Receptionist;
import com.v1.BackendV1.Service.AdminService;
import com.v1.BackendV1.Service.ReceptionistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
    @RequestMapping(path = "api/v1/receptionist")
public class ReceptionistController {
    private final ReceptionistService receptionistService;

    @Autowired
    public ReceptionistController(ReceptionistService receptionistService) {
        this.receptionistService = receptionistService;
    }

    @GetMapping
    public List<Receptionist> getReceptionists() {
        return receptionistService.getReceptionists();
    }

    @PostMapping
    public void addReceptionist(@RequestBody Receptionist receptionist) {
        receptionistService.addReceptionist(receptionist);
    }
}
