package com.v1.BackendV1.Service;

import com.v1.BackendV1.Classes.Admin;
import com.v1.BackendV1.Classes.Receptionist;
import com.v1.BackendV1.Repository.AdminRepository;
import com.v1.BackendV1.Repository.ReceptionistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReceptionistService {
    private final ReceptionistRepository receptionistRepository;

    @Autowired
    public ReceptionistService(ReceptionistRepository receptionistRepository) {
        this.receptionistRepository = receptionistRepository;
    }

    public List<Receptionist> getReceptionists() {
        return receptionistRepository.findAll();
    }

    public void addReceptionist(Receptionist receptionist) {
        Optional<Receptionist> optionalPatient = receptionistRepository.findById(receptionist.getReceptionID());
        if (optionalPatient.isPresent()) {
            throw new IllegalStateException("Duplicate Entry");
        }
        receptionistRepository.save(receptionist);
    }
}
