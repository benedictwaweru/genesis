FROM hashicorp/vault:1.20

# Copy custom configuration into the container
COPY config.hcl /vault/config/vault.hcl

# Copy policies and scripts into the container
COPY policies/ /vault/policies/
COPY scripts/ /vault/scripts/

# Make scripts executable
RUN chmod +x /vault/scripts/*.sh

# Run Vault server with your configuration
CMD ["server", "-config=/vault/config/vault.hcl"]
