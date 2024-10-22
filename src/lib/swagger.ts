import { createSwaggerSpec } from "next-swagger-doc";

export const getApiDocs = async () => {
  return createSwaggerSpec({
    apiFolder: "src/app/api",
    definition: {
      components: {
        securitySchemes: {
          BearerAuth: {
            bearerFormat: "JWT",
            scheme: "bearer",
            type: "http",
          },
        },
      },
      info: {
        title: "BunkieGot API",
        version: "1.0",
      },
      openapi: "3.0.0",
      security: [],
    },
  });
};
