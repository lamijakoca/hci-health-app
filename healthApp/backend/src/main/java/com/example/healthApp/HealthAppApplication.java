package com.example.healthApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class HealthAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(HealthAppApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer(){
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/note**").allowedOrigins("http://localhost:3000");
				registry.addMapping("/persons").allowedOrigins("http://localhost:3000");
			}
		};
	}
}
