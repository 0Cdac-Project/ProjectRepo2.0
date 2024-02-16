package com.v1.BackendV1.Service;

import com.v1.BackendV1.Classes.Ward;
import com.v1.BackendV1.Repository.WardRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class WardService {
    private final WardRepository wardRepository;

    @Autowired
    public WardService(WardRepository wardRepository) {
        this.wardRepository = wardRepository;
    }

    public List<Ward> getWards() {
        return wardRepository.findAll();
    }

    public void addWard(Ward ward) {
        Optional<Ward> optionalPatient = wardRepository.findById(ward.getWardID());
        if (optionalPatient.isPresent()) {
            throw new IllegalStateException("Duplicate Entry");
        }
        wardRepository.save(ward);
    }

    public Ward getWardById(Integer id) {
        return wardRepository.findById(id).orElseThrow();
    }
}
