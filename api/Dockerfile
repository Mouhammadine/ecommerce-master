FROM openjdk:8-jdk-alpine

EXPOSE 8080
WORKDIR /app
COPY src src
COPY pom.xml .
COPY mvnw .
COPY .mvn .mvn
CMD ["./mvnw", "spring-boot:run"]
