package com.v1.BackendV1.Controller;

import com.v1.BackendV1.Classes.Bed;
import com.v1.BackendV1.Service.BedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
    @RequestMapping(path = "api/v1/bed")
public class BedController {
    private final BedService bedService;

    @Autowired
    public BedController(BedService bedService) {
        this.bedService = bedService;
    }

    @GetMapping("/findAll")
    public List<Bed> getBeds() {
        return bedService.getBeds();
    }

    @PostMapping("/add")
    public void addNewBed(@RequestBody Bed bed) {
        bedService.addNewBed(bed);
    }

    @GetMapping("/{id}")
    public Bed getBedsById(@PathVariable Integer id) {
        return bedService.getBedById(id);
    }

}
