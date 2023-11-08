-- CreateTable
CREATE TABLE `Patient` (
    `PatientID` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(191) NOT NULL,
    `ContactInformation` VARCHAR(191) NOT NULL,
    `MedicalHistory` VARCHAR(191) NULL,

    PRIMARY KEY (`PatientID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Appointment` (
    `AppointmentID` INTEGER NOT NULL AUTO_INCREMENT,
    `Date` DATETIME(3) NOT NULL,
    `Status` VARCHAR(191) NOT NULL,
    `Reason` VARCHAR(191) NULL,
    `PatientID` INTEGER NOT NULL,

    PRIMARY KEY (`AppointmentID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MedicalRecord` (
    `RecordID` INTEGER NOT NULL AUTO_INCREMENT,
    `Date` DATETIME(3) NOT NULL,
    `Diagnosis` VARCHAR(191) NOT NULL,
    `Prescription` VARCHAR(191) NULL,
    `PatientID` INTEGER NOT NULL,

    PRIMARY KEY (`RecordID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Expense` (
    `ExpenseID` INTEGER NOT NULL AUTO_INCREMENT,
    `ExpenseDate` DATETIME(3) NOT NULL,
    `Description` VARCHAR(191) NOT NULL,
    `Amount` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`ExpenseID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Appointment` ADD CONSTRAINT `Appointment_PatientID_fkey` FOREIGN KEY (`PatientID`) REFERENCES `Patient`(`PatientID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MedicalRecord` ADD CONSTRAINT `MedicalRecord_PatientID_fkey` FOREIGN KEY (`PatientID`) REFERENCES `Patient`(`PatientID`) ON DELETE RESTRICT ON UPDATE CASCADE;
