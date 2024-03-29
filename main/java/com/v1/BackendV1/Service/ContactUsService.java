package com.v1.BackendV1.Service;

import com.v1.BackendV1.Classes.Accountant;
import com.v1.BackendV1.Classes.ContactUs;
import com.v1.BackendV1.Repository.AccountantRepository;
import com.v1.BackendV1.Repository.ContactUsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactUsService {
    private final ContactUsRepository contactUsRepository;

    @Autowired
    public ContactUsService(ContactUsRepository contactUsRepository) {
        this.contactUsRepository = contactUsRepository;
    }

    public List<ContactUs> getContacts() {
        return contactUsRepository.findAll();
    }

    public void addNewContact(ContactUs contactUs) {
        Optional<ContactUs> optionalPatient = contactUsRepository.findById(contactUs.getContactId());
        if (optionalPatient.isPresent()) {
            throw new IllegalStateException("Duplicate Entry");
        }
        contactUsRepository.save(contactUs);
    }
}
