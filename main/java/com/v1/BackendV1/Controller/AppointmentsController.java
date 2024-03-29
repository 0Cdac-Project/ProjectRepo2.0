package com.v1.BackendV1.Controller;

import com.v1.BackendV1.Classes.Accountant;
import com.v1.BackendV1.Classes.Appointments;
import com.v1.BackendV1.Service.AccountantService;
import com.v1.BackendV1.Service.AppointmentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
    @RequestMapping(path = "api/v1/appointments")
public class AppointmentsController {
    private final AppointmentsService appointmentsService;

    @Autowired
    public AppointmentsController(AppointmentsService appointmentsService) {
        this.appointmentsService = appointmentsService;
    }

    @GetMapping
    public List<Appointments> getAccountant() {
        return appointmentsService.getAppointments();
    }

    @PostMapping
    public void addAppointment(@RequestBody Appointments appointments) {
        appointmentsService.addAppointment(appointments);
    }
}
