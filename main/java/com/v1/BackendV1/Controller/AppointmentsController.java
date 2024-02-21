package com.v1.BackendV1.Controller;

import com.v1.BackendV1.Classes.Appointments;
import com.v1.BackendV1.Service.AppointmentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("/findAll")
    public List<Appointments> getAccountant() {
        return appointmentsService.getAppointments();
    }

    @PostMapping("/add")
    public void addAppointment(@RequestBody Appointments appointments) {
        appointmentsService.addAppointment(appointments);
    }

    @GetMapping("/{id}")
    public Appointments getAccountantById(@PathVariable Integer id) {
        return appointmentsService.getAppointmentById(id);
    }

    @GetMapping("/by_patient/{patientId}")
    public List<Appointments> getAccountantByPatientId(@PathVariable Integer patientId) {
        return appointmentsService.getAppointmentsByPatientID(patientId);
    }

    @GetMapping("/by_doctor/{doctorId}")
    public List<Appointments> getAppointmentsByDoctorId(@PathVariable Integer doctorId) {
        return appointmentsService.getAppointmentsByDoctorId(doctorId);
    }

    @GetMapping("/by_patient/{patientId}/{doctorId}")
    public ResponseEntity<?> getAccountantByPatientIdAndDoctorId(@PathVariable Integer patientId, @PathVariable Integer doctorId) {
        return appointmentsService.getAccountantByPatientIdAndDoctorId(patientId,doctorId);
    }
}
