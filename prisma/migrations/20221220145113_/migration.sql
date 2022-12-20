-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vehicles" (
    "id" TEXT NOT NULL,
    "typeOffer" BOOLEAN NOT NULL DEFAULT false,
    "title" VARCHAR(255) NOT NULL,
    "year" VARCHAR(4) NOT NULL,
    "mileage" VARCHAR(10) NOT NULL,
    "price" DECIMAL(8,2) NOT NULL,
    "describe" VARCHAR(255) NOT NULL,
    "typeVehicles" BOOLEAN NOT NULL DEFAULT true,
    "coverImg" TEXT NOT NULL,

    CONSTRAINT "vehicles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "galleryImgs" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "vehicle_id" TEXT NOT NULL,

    CONSTRAINT "galleryImgs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "galleryImgs" ADD CONSTRAINT "galleryImgs_vehicle_id_fkey" FOREIGN KEY ("vehicle_id") REFERENCES "vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
