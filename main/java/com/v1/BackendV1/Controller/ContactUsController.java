package com.v1.BackendV1.Controller;

import com.v1.BackendV1.Classes.ContactUs;
import com.v1.BackendV1.Service.ContactUsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
    @RequestMapping(path = "api/v1/contactus")
public class ContactUsController {
    private final ContactUsService contactUsService;

    @Autowired
    public ContactUsController(ContactUsService contactUsService) {
        this.contactUsService = contactUsService;
    }

    @GetMapping("/findAll")
    public List<ContactUs> getContacts() {
        return contactUsService.getContacts();
    }

    @PostMapping("/add")
    public void addNewContact(@RequestBody ContactUs contactUs) {
        contactUsService.addNewContact(contactUs);
    }

    @GetMapping("/{id}")
    public ContactUs getContactByID(@PathVariable Integer id) {
        return contactUsService.getContactByID(id);
    }

}
