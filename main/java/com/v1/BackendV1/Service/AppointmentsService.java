package com.v1.BackendV1.Service;

import com.v1.BackendV1.Classes.Appointments;
import com.v1.BackendV1.Repository.AppointmentsRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class AppointmentsService {
    private final AppointmentsRepository appointmentsRepository;

    @Autowired
    public AppointmentsService(AppointmentsRepository appointmentsRepository) {
        this.appointmentsRepository = appointmentsRepository;
    }

    public List<Appointments> getAppointments() {
        return appointmentsRepository.findAll();
    }

    public void addAppointment(Appointments appointments) {
        Optional<Appointments> optionalPatient = appointmentsRepository.findById(appointments.getAppointmentID());
        if (optionalPatient.isPresent()) {
            throw new IllegalStateException("Duplicate Entry");
        }
        appointmentsRepository.save(appointments);
    }

    public Appointments getAppointmentById(Integer id) {
        return appointmentsRepository.findById(id).orElseThrow();
    }
}