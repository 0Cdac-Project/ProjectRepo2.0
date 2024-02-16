package com.v1.BackendV1.Controller;

import com.v1.BackendV1.Classes.Ward;
import com.v1.BackendV1.Service.WardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
    @RequestMapping(path = "api/v1/ward")
public class WardController {
    private final WardService wardService;

    @Autowired
    public WardController( WardService wardService) {
        this.wardService = wardService;
    }

    @GetMapping("/findAll")
    public List<Ward> getWards() {
        return wardService.getWards();
    }

    @PostMapping("/add")
    public void addNewAccountant(@RequestBody Ward ward) {
        wardService.addWard(ward);
    }

    @GetMapping("/{id}")
    public Ward getWardById(@PathVariable Integer id) {
        return wardService.getWardById(id);
    }
}
