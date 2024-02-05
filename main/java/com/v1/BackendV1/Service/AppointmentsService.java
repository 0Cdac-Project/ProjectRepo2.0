package com.v1.BackendV1.Service;

import com.v1.BackendV1.Classes.Accountant;
import com.v1.BackendV1.Classes.Appointments;
import com.v1.BackendV1.Repository.AccountantRepository;
import com.v1.BackendV1.Repository.AppointmentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
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
}
