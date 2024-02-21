package com.v1.BackendV1.Service;

import com.v1.BackendV1.Classes.Appointments;
import com.v1.BackendV1.CustomException.ResourceNotFoundException;
import com.v1.BackendV1.Repository.AppointmentsRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
        appointmentsRepository.save(appointments);
    }

    public Appointments getAppointmentById(Integer id) {
        return appointmentsRepository.findById(id).orElseThrow();
    }

    public List<Appointments> getAppointmentsByPatientID(Integer patientId) {
        return appointmentsRepository.findByPatientID(patientId);
    }

    public List<Appointments> getAppointmentsByDoctorId(Integer doctorId) {
        return appointmentsRepository.findByDoctorID(doctorId);
    }

    public ResponseEntity<?> getAccountantByPatientIdAndDoctorId(Integer patientId, Integer doctorId) {
        List<Appointments> a =appointmentsRepository.findByPatientIDAndDoctorID(patientId,doctorId);

        return (!a.isEmpty())?ResponseEntity.ok(a.get(0)):ResponseEntity.status(HttpStatus.NO_CONTENT).body("No Record Found");
    }

    public void updateAppointment(Appointments appointment) {
        Optional<Appointments> optionalAppointment = appointmentsRepository.findById(appointment.getAppointmentID());
        if(optionalAppointment.isPresent()){
            optionalAppointment.get().setMedication(appointment.getMedication());
            appointmentsRepository.save(optionalAppointment.get());
        }
        else{
            throw new IllegalStateException("Appointment Doesn't Exist");
        }
    }
}