package com.genesis.logistics.common.config.database;


import org.springframework.boot.autoconfigure.r2dbc.ConnectionFactoryOptionsBuilderCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.r2dbc.spi.ConnectionFactoryOptions;

@Configuration(proxyBeanMethods = false)
public class R2dbcConfig {
  @Bean
  public ConnectionFactoryOptionsBuilderCustomizer connectionFactoryPortCustomizer() {
    return (builder) -> builder.option(ConnectionFactoryOptions.PORT, 5432);
  }
}
