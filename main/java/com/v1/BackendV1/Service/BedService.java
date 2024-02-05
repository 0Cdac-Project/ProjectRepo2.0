package com.v1.BackendV1.Service;

import com.v1.BackendV1.Classes.Accountant;
import com.v1.BackendV1.Classes.Bed;
import com.v1.BackendV1.Repository.AccountantRepository;
import com.v1.BackendV1.Repository.BedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BedService {
    private final BedRepository bedRepository;

    @Autowired
    public BedService(BedRepository bedRepository) {
        this.bedRepository = bedRepository;
    }

    public List<Bed> getBeds() {
        return bedRepository.findAll();
    }

    public void addNewBed(Bed bed) {
        Optional<Bed> optionalPatient = bedRepository.findById(bed.getBedID());
        if (optionalPatient.isPresent()) {
            throw new IllegalStateException("Duplicate Entry");
        }
        bedRepository.save(bed);
    }
}
