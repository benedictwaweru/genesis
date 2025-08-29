package com.genesis.logistics;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(exclude = {
  org.springframework.boot.autoconfigure.r2dbc.R2dbcAutoConfiguration.class,
  org.springframework.boot.autoconfigure.data.r2dbc.R2dbcDataAutoConfiguration.class
})
public class LogisticsApplication {
  public static void main(String[] args) {
    SpringApplication.run(LogisticsApplication.class, args);
  }
}
