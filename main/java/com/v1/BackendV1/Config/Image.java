package com.v1.BackendV1.Config;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Base64;

public class Image {
    public static void main(String[] args) {
        String imagePath = "/path/to/your/image.jpg";

        try {
            // Read the image file as a byte array
            byte[] imageData = readImageFile(imagePath);

            // Convert the byte array to a Base64 encoded string
            String base64Image = convertToBase64(imageData);

            // Print the Base64 encoded string
            System.out.println("Base64 encoded image:\n" + base64Image);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static byte[] readImageFile(String imagePath) throws IOException {
        File file = new File(imagePath);
        byte[] imageData = new byte[(int) file.length()];

        try (FileInputStream fileInputStream = new FileInputStream(file)) {
            fileInputStream.read(imageData);
        }

        return imageData;
    }

    private static String convertToBase64(byte[] imageData) {
        return Base64.getEncoder().encodeToString(imageData);
    }
}
