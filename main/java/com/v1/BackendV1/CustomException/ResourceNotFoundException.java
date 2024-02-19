package com.v1.BackendV1.CustomException;

@SuppressWarnings("serial")
public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String mesg) {
        super(mesg);
    }
}
